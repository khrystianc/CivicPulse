from flask import Blueprint, jsonify
from controllers.voting_records_controller import get_voting_records

voting_records_bp = Blueprint('voting_records_bp', __name__)

@voting_records_bp.route('/', methods=['GET'])
def fetch_voting_records():
    """API endpoint to fetch all voting records"""
    return jsonify(get_voting_records())
