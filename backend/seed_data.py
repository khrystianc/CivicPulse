"""
Seed script to populate the database with sample data for development and testing.
"""
from datetime import datetime, timedelta
from models.donation import Donation
from models.voting_record import VotingRecord
from models.policy_change import PolicyChange

import os
from flask import Flask

def create_sample_data():
    """Create sample data for all models"""
    
    # Clear existing data
    print("Clearing existing data...")
    Donation.objects.delete()
    VotingRecord.objects.delete()
    PolicyChange.objects.delete()
    
    # Create sample donations
    print("Creating sample donations...")
    donations_data = [
        {"amount": 5000.00, "donor": "Tech Innovations Corp", "date": datetime.now() - timedelta(days=30)},
        {"amount": 2500.00, "donor": "John Smith", "date": datetime.now() - timedelta(days=25)},
        {"amount": 10000.00, "donor": "Healthcare Alliance", "date": datetime.now() - timedelta(days=20)},
        {"amount": 1500.00, "donor": "Jane Doe", "date": datetime.now() - timedelta(days=15)},
        {"amount": 7500.00, "donor": "Energy Solutions LLC", "date": datetime.now() - timedelta(days=10)},
        {"amount": 3000.00, "donor": "Community Fund", "date": datetime.now() - timedelta(days=5)},
    ]
    
    for data in donations_data:
        Donation(**data).save()
    print(f"Created {len(donations_data)} donations")
    
    # Create sample voting records
    print("Creating sample voting records...")
    voting_records_data = [
        {
            "politician": "Senator Jane Williams",
            "bill": "Healthcare Reform Act 2024",
            "vote": "Yes",
            "date": datetime.now() - timedelta(days=45)
        },
        {
            "politician": "Representative John Davis",
            "bill": "Infrastructure Investment Bill",
            "vote": "Yes",
            "date": datetime.now() - timedelta(days=40)
        },
        {
            "politician": "Senator Michael Brown",
            "bill": "Education Funding Act",
            "vote": "No",
            "date": datetime.now() - timedelta(days=35)
        },
        {
            "politician": "Representative Sarah Johnson",
            "bill": "Climate Action Initiative",
            "vote": "Yes",
            "date": datetime.now() - timedelta(days=30)
        },
        {
            "politician": "Senator Jane Williams",
            "bill": "Tax Reform Bill 2024",
            "vote": "Abstain",
            "date": datetime.now() - timedelta(days=25)
        },
        {
            "politician": "Representative John Davis",
            "bill": "Small Business Support Act",
            "vote": "Yes",
            "date": datetime.now() - timedelta(days=20)
        },
    ]
    
    for data in voting_records_data:
        VotingRecord(**data).save()
    print(f"Created {len(voting_records_data)} voting records")
    
    # Create sample policy changes
    print("Creating sample policy changes...")
    policy_changes_data = [
        {
            "title": "New Environmental Protection Policy",
            "description": "Strengthens regulations on industrial emissions and promotes renewable energy adoption",
            "status": "Implemented",
            "date": datetime.now() - timedelta(days=60)
        },
        {
            "title": "Education Funding Reform",
            "description": "Increases funding for public schools and introduces new teacher support programs",
            "status": "Under Review",
            "date": datetime.now() - timedelta(days=30)
        },
        {
            "title": "Healthcare Access Expansion",
            "description": "Expands healthcare coverage to underserved communities",
            "status": "Approved",
            "date": datetime.now() - timedelta(days=45)
        },
        {
            "title": "Infrastructure Modernization Plan",
            "description": "Comprehensive plan to upgrade roads, bridges, and public transportation",
            "status": "Proposed",
            "date": datetime.now() - timedelta(days=15)
        },
        {
            "title": "Digital Privacy Protection Act",
            "description": "Enhances data privacy rights and regulations for technology companies",
            "status": "Under Review",
            "date": datetime.now() - timedelta(days=20)
        },
        {
            "title": "Affordable Housing Initiative",
            "description": "Provides incentives for affordable housing development and rent assistance programs",
            "status": "Implemented",
            "date": datetime.now() - timedelta(days=90)
        },
    ]
    
    for data in policy_changes_data:
        PolicyChange(**data).save()
    print(f"Created {len(policy_changes_data)} policy changes")
    
    print("\n✓ Sample data created successfully!")
    print(f"  - {len(donations_data)} donations")
    print(f"  - {len(voting_records_data)} voting records")
    print(f"  - {len(policy_changes_data)} policy changes")

if __name__ == "__main__":
    from dotenv import load_dotenv
    load_dotenv()
    
    # Create Flask app and initialize database
    app = Flask(__name__)
    from config.db import initialize_db
    initialize_db(app)
    
    with app.app_context():
        try:
            create_sample_data()
        except Exception as e:
            print(f"\n✗ Error creating sample data: {e}")
            print("\nMake sure MongoDB is running and accessible.")
            exit(1)
