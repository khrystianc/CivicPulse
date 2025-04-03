from flask import Blueprint, request, jsonify
from controllers.donations_controller import get_donations

donations_bp = Blueprint('donations_bp', __name__)

@donations_bp.route('/', methods=['GET'])
def fetch_donations():
    return jsonify(get_donations())
