# CivicPulse Deployment Guide

This guide provides instructions for deploying the CivicPulse application to production.

## Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- MongoDB 4.4+
- Git

## Backend Deployment

### 1. Setup Environment

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configure Environment Variables

Copy the example environment file and update with your values:

```bash
cp .env.example .env
```

Edit `.env` and configure:
- `FLASK_DEBUG=False` for production
- `MONGODB_HOST`, `MONGODB_PORT`, `MONGODB_DB` - your MongoDB connection details
- `MONGODB_USERNAME`, `MONGODB_PASSWORD` - if authentication is required
- `CORS_ORIGIN` - your frontend URL (e.g., https://yourdomain.com)
- `HOST` and `PORT` - server binding configuration

### 3. Setup MongoDB

Ensure MongoDB is running and accessible. Create the database:

```bash
mongo
> use civicpulse
> db.createCollection("donation")
> db.createCollection("voting_record")
> db.createCollection("policy_change")
> exit
```

### 4. Run Backend Server

**Development:**
```bash
python server.py
```

**Production (with Gunicorn):**
```bash
gunicorn -w 4 -b 0.0.0.0:5000 server:app
```

For production, consider using a process manager like systemd or supervisor.

### 5. Verify Backend

Check health endpoint:
```bash
curl http://localhost:5000/health
```

## Frontend Deployment

### 1. Install Dependencies

```bash
cd /path/to/CivicPulse
npm install
```

### 2. Configure API Endpoint

Update API endpoints in the component files if your backend is not running on `localhost:5000`.

For production builds, create environment-specific configuration files.

### 3. Development Mode

```bash
npm start
```

This will start the Expo development server.

### 4. Build for Production

**Web:**
```bash
npm run web
expo build:web
```

**iOS:**
```bash
expo build:ios
```

**Android:**
```bash
expo build:android
```

For Expo managed workflow, you can also use Expo EAS Build:
```bash
npm install -g eas-cli
eas build --platform all
```

## Deployment Options

### Option 1: Traditional Server Deployment

1. **Backend**: Deploy Flask app using Gunicorn + Nginx
2. **Frontend**: Build React Native for web and deploy static files to Nginx or CDN
3. **Database**: MongoDB Atlas or self-hosted MongoDB

### Option 2: Cloud Platform Deployment

#### Backend (Heroku, AWS, Google Cloud, Azure)

**Heroku Example:**
```bash
cd backend
heroku create civicpulse-api
heroku addons:create mongolab
git push heroku main
```

**Create Procfile in backend:**
```
web: gunicorn server:app
```

#### Frontend (Netlify, Vercel, AWS Amplify)

**Netlify Example:**
```bash
npm run build:web
netlify deploy --prod --dir=web-build
```

### Option 3: Docker Deployment

Create `Dockerfile` for backend:
```dockerfile
FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "server:app"]
```

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:4.4
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
  
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGODB_HOST=mongodb
      - MONGODB_PORT=27017
    depends_on:
      - mongodb

volumes:
  mongo-data:
```

Run with:
```bash
docker-compose up -d
```

## Security Considerations

1. **Environment Variables**: Never commit `.env` files. Use secure secret management.
2. **CORS**: Set specific origins in production, not `*`
3. **HTTPS**: Always use HTTPS in production
4. **MongoDB**: Enable authentication and use strong passwords
5. **Rate Limiting**: Implement rate limiting for API endpoints
6. **Input Validation**: Validate all user inputs
7. **Dependencies**: Keep all dependencies up to date

## Monitoring and Maintenance

1. **Logging**: Configure proper logging for production
2. **Error Tracking**: Consider using services like Sentry
3. **Performance Monitoring**: Use APM tools for monitoring
4. **Backups**: Regular MongoDB backups
5. **Updates**: Keep dependencies and security patches up to date

## Troubleshooting

### Backend Issues

- **Connection Refused**: Check if MongoDB is running and accessible
- **Import Errors**: Verify all dependencies are installed
- **CORS Errors**: Check CORS_ORIGIN configuration

### Frontend Issues

- **API Connection**: Verify backend URL is correct and accessible
- **Build Failures**: Clear cache with `expo start --clear`
- **Package Issues**: Try `rm -rf node_modules && npm install`

## Support

For issues or questions, please open an issue on the GitHub repository.
