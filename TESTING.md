# CivicPulse Testing Guide

## Overview

This guide covers testing the CivicPulse application, including both frontend and backend components.

## Backend Testing

### Prerequisites

- Python 3.9+
- MongoDB running locally or accessible remotely
- Virtual environment activated

### Setup Test Environment

```bash
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Manual Testing

#### 1. Start MongoDB

```bash
# Linux/macOS
sudo systemctl start mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:7.0
```

#### 2. Seed Sample Data

```bash
python seed_data.py
```

This will populate the database with sample data for testing.

#### 3. Start the Backend Server

```bash
python server.py
```

The server should start on `http://localhost:5000`

#### 4. Test API Endpoints

Using curl:

```bash
# Health check
curl http://localhost:5000/health

# Root endpoint
curl http://localhost:5000/

# Get donations
curl http://localhost:5000/api/donations

# Get voting records
curl http://localhost:5000/api/voting-records

# Get policy changes
curl http://localhost:5000/api/policy-changes
```

Using a browser or Postman:
- Navigate to `http://localhost:5000/health`
- Navigate to `http://localhost:5000/api/donations`
- Navigate to `http://localhost:5000/api/voting-records`
- Navigate to `http://localhost:5000/api/policy-changes`

### Expected Responses

All endpoints should return:
- Status code: 200 OK
- Content-Type: application/json
- Valid JSON data

### Testing with Docker

```bash
# Build and start services
docker-compose up -d

# Check logs
docker-compose logs -f backend

# Test endpoints
curl http://localhost:5000/health

# Seed data (after containers are running)
docker-compose exec backend python seed_data.py

# Stop services
docker-compose down
```

## Frontend Testing

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
cd /path/to/CivicPulse
npm install --legacy-peer-deps
```

### Running the App

#### Development Mode

```bash
npm start
```

This will:
1. Start the Expo development server
2. Open Expo DevTools in your browser
3. Allow you to run the app on:
   - Web browser (press `w`)
   - Android emulator (press `a`)
   - iOS simulator (press `i`)
   - Physical device via Expo Go app

#### Web Testing

```bash
npm run web
```

### Testing Checklist

#### Home Screen
- [ ] App loads without errors
- [ ] Title "CivicPulse" is displayed
- [ ] Two feature cards are visible
- [ ] Navigation to Dashboard works
- [ ] Navigation to Engagement works

#### Dashboard Screen
- [ ] Screen loads with header
- [ ] Donations section displays
- [ ] Voting Records section displays
- [ ] Policy Changes section displays
- [ ] Data loads from backend API
- [ ] Loading states work correctly
- [ ] Error states display properly
- [ ] Empty states show when no data

#### Engagement Screen
- [ ] Screen loads with header
- [ ] Election Info displays
- [ ] Candidate Profiles display
- [ ] Voter Registration displays
- [ ] Links open correctly
- [ ] Information is readable and formatted

#### Components
- [ ] All components render without errors
- [ ] Styling is consistent
- [ ] Touch/click interactions work
- [ ] Navigation between screens is smooth
- [ ] Back button works correctly

### Integration Testing

#### Backend + Frontend

1. Start backend server:
   ```bash
   cd backend
   python server.py
   ```

2. Seed data:
   ```bash
   python seed_data.py
   ```

3. Start frontend:
   ```bash
   npm start
   ```

4. Test data flow:
   - Navigate to Dashboard
   - Verify donations appear
   - Verify voting records appear
   - Verify policy changes appear

#### Testing API Connection

If you see "Failed to load" errors:
1. Check backend is running on port 5000
2. Check MongoDB is running
3. Check CORS settings
4. Check network connectivity
5. Review browser console for errors

### Performance Testing

#### Frontend Performance
- [ ] App loads within 3 seconds
- [ ] Navigation is smooth (no lag)
- [ ] Lists scroll smoothly
- [ ] No memory leaks
- [ ] Images load properly

#### Backend Performance
- [ ] API responses within 200ms
- [ ] Multiple concurrent requests handled
- [ ] Database queries optimized
- [ ] No memory leaks
- [ ] Proper connection pooling

### Security Testing

#### Backend
- [ ] CORS configured properly
- [ ] Environment variables not exposed
- [ ] No sensitive data in logs
- [ ] Input validation works
- [ ] Error messages don't leak info

#### Frontend
- [ ] API keys not in client code
- [ ] HTTPS in production
- [ ] No XSS vulnerabilities
- [ ] Dependencies up to date

## Common Issues and Solutions

### Backend Issues

**Issue**: MongoDB connection refused
```
Solution: Ensure MongoDB is running
- Linux/macOS: sudo systemctl start mongod
- Docker: docker run -d -p 27017:27017 mongo:7.0
```

**Issue**: Import errors
```
Solution: Reinstall dependencies
- pip install -r requirements.txt
```

**Issue**: Port already in use
```
Solution: Change port or kill existing process
- Change PORT in .env
- Or: lsof -ti:5000 | xargs kill
```

### Frontend Issues

**Issue**: npm install fails
```
Solution: Use legacy peer deps
- npm install --legacy-peer-deps
```

**Issue**: Expo not starting
```
Solution: Clear cache and restart
- expo start --clear
```

**Issue**: Can't connect to backend
```
Solution: Check backend URL
- Ensure backend is running on localhost:5000
- Update API URLs in components if needed
```

## Automated Testing (✓ Implemented)

### Backend Unit Tests
The backend now includes comprehensive test coverage using pytest.

**Test Files:**
- `tests/test_api.py` - Tests all API endpoints (health, donations, voting records, policy changes)
- `tests/test_models.py` - Tests database models (Donation, VotingRecord, PolicyChange)
- `tests/__init__.py` - Test package initialization

**Test Coverage:**
- 15 backend tests covering:
  - API endpoint functionality
  - CORS headers
  - Rate limiting
  - Database model validation
  - JSON serialization
  - Error handling

### Frontend Tests
The frontend includes smoke tests using Jest.

**Test Files:**
- `__tests__/App.test.js` - App component structure tests
- `__tests__/screens/HomeScreen.test.js` - HomeScreen content validation
- `__tests__/components/Donations.test.js` - Donations component tests

**Test Coverage:**
- 11 frontend tests covering:
  - Component file existence
  - Component structure validation
  - Content verification
  - API integration checks

### Running Tests
```bash
# Backend (15 tests)
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
pytest -v

# Frontend (11 tests)
npm test
```

**Test Results:**
- Backend: ✅ 15 passed
- Frontend: ✅ 11 passed

## Production Testing

Before deploying to production:

1. [ ] All tests pass
2. [ ] Security audit complete
3. [ ] Performance benchmarks met
4. [ ] CORS configured for production
5. [ ] Environment variables set
6. [ ] Database backups configured
7. [ ] Monitoring setup
8. [ ] Error tracking enabled
9. [ ] Load testing completed
10. [ ] Documentation updated

## Support

For issues or questions:
- Check existing GitHub issues
- Review logs for error messages
- Consult API documentation (API.md)
- Review deployment guide (DEPLOYMENT.md)
