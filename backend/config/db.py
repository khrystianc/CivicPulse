import mongoengine
import os

def initialize_db(app):
    """Initialize MongoDB database connection with environment-based configuration"""
    
    # Get MongoDB configuration from environment variables
    mongodb_host = os.getenv('MONGODB_HOST', 'localhost')
    mongodb_port = int(os.getenv('MONGODB_PORT', 27017))
    mongodb_db = os.getenv('MONGODB_DB', 'civicpulse')
    mongodb_username = os.getenv('MONGODB_USERNAME', '')
    mongodb_password = os.getenv('MONGODB_PASSWORD', '')
    
    # Build connection settings
    connect_kwargs = {
        'db': mongodb_db,
        'host': mongodb_host,
        'port': mongodb_port
    }
    
    # Add authentication if credentials are provided
    if mongodb_username and mongodb_password:
        connect_kwargs['username'] = mongodb_username
        connect_kwargs['password'] = mongodb_password
        connect_kwargs['authentication_source'] = 'admin'
    
    # Connect to MongoDB using mongoengine
    mongoengine.connect(**connect_kwargs)

