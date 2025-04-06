from flask import Flask
from flask_cors import CORS
from routes.donations import donations_bp
from config import MONGO_URI
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient(MONGO_URI)
db = client["civicpulse"]

app.register_blueprint(donations_bp, url_prefix='/api/donations')

if __name__ == "__main__":
    app.run(debug=True, port=5000)
