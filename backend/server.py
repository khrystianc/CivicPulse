from flask import Flask
from flask_cors import CORS
from routes.donations_routes import donations_bp
from routes.voting_records_routes import voting_records_bp
from routes.policy_changes_routes import policy_changes_bp
from config.db import initialize_db

app = Flask(__name__)
CORS(app)

app.register_blueprint(donations_bp, url_prefix='/api/donations')
app.register_blueprint(voting_records_bp, url_prefix='/api/voting-records')
app.register_blueprint(policy_changes_bp, url_prefix='/api/policy-changes')

initialize_db(app)

if __name__ == '__main__':
    app.run(port=5000)
