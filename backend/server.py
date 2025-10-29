from flask import Flask
from flask_cors import CORS
from routes.donations_routes import donations_bp
from routes.voting_records_routes import voting_records_bp
from routes.policy_changes_routes import policy_changes_bp
from config.db import initialize_db
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configure CORS for production
cors_origin = os.getenv('CORS_ORIGIN', '*')
CORS(app, resources={r"/api/*": {"origins": cors_origin}})

# Register blueprints
app.register_blueprint(donations_bp, url_prefix='/api/donations')
app.register_blueprint(voting_records_bp, url_prefix='/api/voting-records')
app.register_blueprint(policy_changes_bp, url_prefix='/api/policy-changes')

# Initialize database
initialize_db(app)

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return {'status': 'healthy', 'message': 'CivicPulse API is running'}

# Root endpoint
@app.route('/', methods=['GET'])
def root():
    return {
        'name': 'CivicPulse API',
        'version': '1.0.0',
        'endpoints': {
            'donations': '/api/donations',
            'voting_records': '/api/voting-records',
            'policy_changes': '/api/policy-changes',
            'health': '/health'
        }
    }

if __name__ == '__main__':
    # Get configuration from environment variables
    debug_mode = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    port = int(os.getenv('PORT', 5000))
    host = os.getenv('HOST', '0.0.0.0')
    
    app.run(host=host, port=port, debug=debug_mode)

