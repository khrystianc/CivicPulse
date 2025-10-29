from flask import Blueprint, jsonify
from controllers.donations_controller import get_donations

donations_bp = Blueprint('donations_bp', __name__)

@donations_bp.route('/', methods=['GET'])
def fetch_donations():
    """API endpoint to fetch all donations"""
    return jsonify(get_donations())

