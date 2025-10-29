from models.policy_change import PolicyChange

def get_policy_changes():
    """Fetch all policy changes from the database"""
    policy_changes = PolicyChange.objects()
    return [change.to_json() for change in policy_changes]
