from models.voting_record import VotingRecord

def get_voting_records():
    """Fetch all voting records from the database"""
    voting_records = VotingRecord.objects()
    return [record.to_json() for record in voting_records]
