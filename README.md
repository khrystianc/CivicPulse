# CivicPulse

## Overview
CivicPulse is a comprehensive civic engagement platform that fosters community connection and facilitates impactful change. Whether you're initiating a project or joining an existing one, CivicPulse makes it easy to collaborate and make a difference in the areas you care about most.

## Features

### 📊 Transparency Dashboard
- **Political Donations**: Track campaign contributions and donor information
- **Voting Records**: Monitor how elected officials vote on bills and legislation
- **Policy Changes**: Stay informed about proposed and implemented policy changes

### 🗳️ Civic Engagement Tools
- **Election Information**: Get details about upcoming elections and important dates
- **Candidate Profiles**: Learn about candidates running for office
- **Voter Registration**: Access resources and links to register to vote

## Technology Stack

### Frontend
- React Native (Expo)
- React Navigation
- Axios for API calls
- Cross-platform (iOS, Android, Web)

### Backend
- Flask (Python)
- MongoDB with MongoEngine ODM
- Flask-CORS for cross-origin requests
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- MongoDB 4.4+
- Git

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/khrystianc/CivicPulse.git
   cd CivicPulse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   This will open Expo DevTools in your browser. You can then:
   - Press `w` to run in web browser
   - Press `a` to run on Android emulator
   - Press `i` to run on iOS simulator
   - Scan QR code with Expo Go app on your phone

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Ensure MongoDB is running:
   ```bash
   # macOS/Linux
   sudo systemctl start mongod
   # or
   mongod
   ```

6. Start the backend server:
   ```bash
   python server.py
   ```

   The API will be available at `http://localhost:5000`

### Verify Setup

1. Check backend health:
   ```bash
   curl http://localhost:5000/health
   ```

2. Test API endpoints:
   ```bash
   curl http://localhost:5000/api/donations
   curl http://localhost:5000/api/voting-records
   curl http://localhost:5000/api/policy-changes
   ```

## Project Structure

```
CivicPulse/
├── App.js                      # Main React Native app entry
├── app.json                    # Expo configuration
├── package.json                # Frontend dependencies
├── screens/                    # Screen components
│   ├── HomeScreen.js          # Landing page
│   ├── DashboardScreen.js     # Transparency dashboard
│   └── EngagementScreen.js    # Civic engagement tools
├── components/                 # Reusable components
│   ├── Dashboard/             # Dashboard-specific components
│   │   ├── Donations.js
│   │   ├── VotingRecords.js
│   │   └── PolicyChanges.js
│   ├── Engagement/            # Engagement-specific components
│   │   ├── CandidateProfiles.js
│   │   ├── ElectionInfo.js
│   │   └── VoterRegistration.js
│   └── common/                # Shared components
│       ├── Header.js
│       └── Footer.js
└── backend/                    # Flask backend
    ├── server.py              # Main Flask application
    ├── requirements.txt       # Python dependencies
    ├── .env.example          # Environment variables template
    ├── config/
    │   └── db.py             # Database configuration
    ├── models/               # Database models
    │   ├── donation.py
    │   ├── voting_record.py
    │   └── policy_change.py
    ├── controllers/          # Business logic
    │   ├── donations_controller.py
    │   ├── voting_records_controller.py
    │   └── policy_changes_controller.py
    └── routes/               # API routes
        ├── donations_routes.py
        ├── voting_records_routes.py
        └── policy_changes_routes.py
```

## API Documentation

Comprehensive API documentation is available in [API.md](API.md).

### Quick API Reference

- `GET /health` - Health check
- `GET /api/donations` - Get all political donations
- `GET /api/voting-records` - Get all voting records
- `GET /api/policy-changes` - Get all policy changes

## Deployment

Detailed deployment instructions are available in [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Deploy Options

1. **Development**: Run locally using instructions above
2. **Cloud Platform**: Deploy to Heroku, AWS, Google Cloud, or Azure
3. **Docker**: Use Docker Compose for containerized deployment
4. **Traditional**: Deploy with Gunicorn + Nginx for backend, static hosting for frontend

## Contributing

We welcome contributions from the community! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

### Backend Testing
The backend includes comprehensive test coverage with pytest.

```bash
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
pytest
```

**Test Coverage:**
- API endpoint tests (health check, donations, voting records, policy changes)
- Database model tests (validation, serialization)
- CORS and rate limiting tests

**Test Files:**
- `tests/test_api.py` - API endpoint tests
- `tests/test_models.py` - Database model tests

### Frontend Testing
The frontend uses Jest for testing with smoke tests for components.

```bash
npm test
```

**Test Coverage:**
- App component structure
- HomeScreen component content
- Donations component functionality

**Test Files:**
- `__tests__/App.test.js`
- `__tests__/screens/HomeScreen.test.js`
- `__tests__/components/Donations.test.js`

## Security

- ✅ **Rate Limiting**: Implemented with Flask-Limiter (200/day, 50/hour per IP)
- ✅ **CORS**: Configured and can be restricted to specific origins
- ✅ **Environment Variables**: All sensitive data in `.env` (not committed)
- ⚠️ **MongoDB Authentication**: Should be enabled in production
- ⚠️ **HTTPS**: Should be configured at the server/proxy level in production
- ⚠️ **Dependencies**: Keep updated regularly with `npm audit` and `pip list --outdated`

See [SECURITY.md](SECURITY.md) for detailed security guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [MongoEngine Documentation](http://mongoengine.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Support

For issues, questions, or suggestions:
- Open an issue on [GitHub Issues](https://github.com/khrystianc/CivicPulse/issues)
- Contribute to discussions in the repository

## Acknowledgments

- Thanks to all contributors who help improve CivicPulse
- Built with open-source technologies
- Inspired by the need for greater civic transparency and engagement

---

**Made with ❤️ for civic engagement and transparency**

