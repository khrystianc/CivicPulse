"""
Database model tests for CivicPulse backend
"""
import pytest
import sys
import os
from datetime import datetime

# Add parent directory to path for imports
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from models.donation import Donation
from models.voting_record import VotingRecord
from models.policy_change import PolicyChange


@pytest.fixture
def cleanup():
    """Cleanup test data after each test"""
    yield
    Donation.objects.delete()
    VotingRecord.objects.delete()
    PolicyChange.objects.delete()


def test_donation_model(cleanup):
    """Test the Donation model"""
    donation = Donation(
        amount=5000.0,
        donor="Test Corporation",
        date=datetime.now()
    )
    donation.save()
    
    # Verify the donation was saved
    assert donation.id is not None
    assert donation.amount == 5000.0
    assert donation.donor == "Test Corporation"
    
    # Test to_json method
    json_data = donation.to_json()
    assert 'id' in json_data
    assert json_data['amount'] == 5000.0
    assert json_data['donor'] == "Test Corporation"
    assert 'date' in json_data


def test_voting_record_model(cleanup):
    """Test the VotingRecord model"""
    voting_record = VotingRecord(
        politician="Senator Test",
        bill="Test Bill 2024",
        vote="Yes",
        date=datetime.now()
    )
    voting_record.save()
    
    # Verify the voting record was saved
    assert voting_record.id is not None
    assert voting_record.politician == "Senator Test"
    assert voting_record.bill == "Test Bill 2024"
    assert voting_record.vote == "Yes"
    
    # Test to_json method
    json_data = voting_record.to_json()
    assert 'id' in json_data
    assert json_data['politician'] == "Senator Test"
    assert json_data['vote'] == "Yes"


def test_policy_change_model(cleanup):
    """Test the PolicyChange model"""
    policy_change = PolicyChange(
        title="Test Policy",
        description="A comprehensive test policy",
        status="Proposed",
        date=datetime.now()
    )
    policy_change.save()
    
    # Verify the policy change was saved
    assert policy_change.id is not None
    assert policy_change.title == "Test Policy"
    assert policy_change.description == "A comprehensive test policy"
    assert policy_change.status == "Proposed"
    
    # Test to_json method
    json_data = policy_change.to_json()
    assert 'id' in json_data
    assert json_data['title'] == "Test Policy"
    assert json_data['status'] == "Proposed"


def test_donation_required_fields(cleanup):
    """Test that Donation model enforces required fields"""
    with pytest.raises(Exception):
        donation = Donation()
        donation.save()


def test_voting_record_vote_values(cleanup):
    """Test different vote values for VotingRecord"""
    for vote_value in ["Yes", "No", "Abstain"]:
        voting_record = VotingRecord(
            politician="Test Politician",
            bill="Test Bill",
            vote=vote_value,
            date=datetime.now()
        )
        voting_record.save()
        assert voting_record.vote == vote_value
        voting_record.delete()


def test_policy_change_status_values(cleanup):
    """Test different status values for PolicyChange"""
    statuses = ["Proposed", "Under Review", "Approved", "Rejected", "Implemented"]
    for status in statuses:
        policy_change = PolicyChange(
            title="Test Policy",
            description="Test Description",
            status=status,
            date=datetime.now()
        )
        policy_change.save()
        assert policy_change.status == status
        policy_change.delete()


def test_multiple_records(cleanup):
    """Test creating and retrieving multiple records"""
    # Create multiple donations
    for i in range(5):
        Donation(
            amount=float(1000 * (i + 1)),
            donor=f"Donor {i}",
            date=datetime.now()
        ).save()
    
    # Verify all were saved
    donations = Donation.objects.all()
    assert len(donations) == 5
    
    # Verify amounts are correct
    amounts = [d.amount for d in donations]
    assert 1000.0 in amounts
    assert 5000.0 in amounts
