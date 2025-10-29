from flask import Blueprint, jsonify
from controllers.policy_changes_controller import get_policy_changes

policy_changes_bp = Blueprint('policy_changes_bp', __name__)

@policy_changes_bp.route('/', methods=['GET'])
def fetch_policy_changes():
    """API endpoint to fetch all policy changes"""
    return jsonify(get_policy_changes())
