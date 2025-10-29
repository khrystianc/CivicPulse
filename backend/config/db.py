from flask_mongoengine import MongoEngine
import os

db = MongoEngine()

def initialize_db(app):
    """Initialize MongoDB database connection with environment-based configuration"""
    
    # Get MongoDB configuration from environment variables
    mongodb_host = os.getenv('MONGODB_HOST', 'localhost')
    mongodb_port = int(os.getenv('MONGODB_PORT', 27017))
    mongodb_db = os.getenv('MONGODB_DB', 'civicpulse')
    mongodb_username = os.getenv('MONGODB_USERNAME', '')
    mongodb_password = os.getenv('MONGODB_PASSWORD', '')
    
    # Build connection settings
    settings = {
        'db': mongodb_db,
        'host': mongodb_host,
        'port': mongodb_port
    }
    
    # Add authentication if credentials are provided
    if mongodb_username and mongodb_password:
        settings['username'] = mongodb_username
        settings['password'] = mongodb_password
        settings['authentication_source'] = 'admin'
    
    app.config['MONGODB_SETTINGS'] = settings
    db.init_app(app)

