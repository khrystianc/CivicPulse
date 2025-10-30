"""
API endpoint tests for CivicPulse backend
"""
import pytest
import sys
import os
from datetime import datetime

# Add parent directory to path for imports
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from server import app
from models.donation import Donation
from models.voting_record import VotingRecord
from models.policy_change import PolicyChange


@pytest.fixture
def client():
    """Create a test client for the Flask app"""
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


@pytest.fixture
def sample_data():
    """Create sample data for testing"""
    # Clear existing data
    Donation.objects.delete()
    VotingRecord.objects.delete()
    PolicyChange.objects.delete()
    
    # Create sample donation
    donation = Donation(
        amount=1000.0,
        donor="Test Donor",
        date=datetime.now()
    )
    donation.save()
    
    # Create sample voting record
    voting_record = VotingRecord(
        politician="Test Politician",
        bill="Test Bill",
        vote="Yes",
        date=datetime.now()
    )
    voting_record.save()
    
    # Create sample policy change
    policy_change = PolicyChange(
        title="Test Policy",
        description="Test Description",
        status="Proposed",
        date=datetime.now()
    )
    policy_change.save()
    
    yield {
        'donation': donation,
        'voting_record': voting_record,
        'policy_change': policy_change
    }
    
    # Cleanup after test
    Donation.objects.delete()
    VotingRecord.objects.delete()
    PolicyChange.objects.delete()


def test_health_endpoint(client):
    """Test the /health endpoint"""
    response = client.get('/health')
    assert response.status_code == 200
    data = response.get_json()
    assert data['status'] == 'healthy'
    assert 'message' in data


def test_root_endpoint(client):
    """Test the root / endpoint"""
    response = client.get('/')
    assert response.status_code == 200
    data = response.get_json()
    assert data['name'] == 'CivicPulse API'
    assert 'version' in data
    assert 'endpoints' in data


def test_donations_endpoint(client, sample_data):
    """Test the /api/donations/ endpoint"""
    response = client.get('/api/donations/')
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)
    assert len(data) >= 1
    assert 'donor' in data[0]
    assert 'amount' in data[0]


def test_voting_records_endpoint(client, sample_data):
    """Test the /api/voting-records/ endpoint"""
    response = client.get('/api/voting-records/')
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)
    assert len(data) >= 1
    assert 'politician' in data[0]
    assert 'bill' in data[0]
    assert 'vote' in data[0]


def test_policy_changes_endpoint(client, sample_data):
    """Test the /api/policy-changes/ endpoint"""
    response = client.get('/api/policy-changes/')
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)
    assert len(data) >= 1
    assert 'title' in data[0]
    assert 'description' in data[0]
    assert 'status' in data[0]


def test_donations_without_trailing_slash(client):
    """Test that requests without trailing slash are redirected"""
    response = client.get('/api/donations', follow_redirects=False)
    assert response.status_code == 308  # Permanent redirect


def test_cors_headers(client):
    """Test that CORS headers are present"""
    response = client.get('/api/donations/')
    assert 'Access-Control-Allow-Origin' in response.headers


def test_rate_limiting(client):
    """Test that rate limiting is configured (basic check)"""
    # Make multiple requests and verify they succeed
    # (More comprehensive rate limit testing would require many requests)
    for _ in range(5):
        response = client.get('/health')
        assert response.status_code == 200
