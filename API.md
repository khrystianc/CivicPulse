# CivicPulse API Documentation

## Base URL

Development: `http://localhost:5000`
Production: `https://your-domain.com`

## Endpoints

### Health Check

#### GET /health

Check if the API is running.

**Response:**
```json
{
  "status": "healthy",
  "message": "CivicPulse API is running"
}
```

**Status Codes:**
- `200 OK`: API is healthy

---

### Root

#### GET /

Get API information and available endpoints.

**Response:**
```json
{
  "name": "CivicPulse API",
  "version": "1.0.0",
  "endpoints": {
    "donations": "/api/donations",
    "voting_records": "/api/voting-records",
    "policy_changes": "/api/policy-changes",
    "health": "/health"
  }
}
```

**Status Codes:**
- `200 OK`: Success

---

## Donations

### GET /api/donations

Retrieve all political donations.

**Response:**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "amount": 5000.00,
    "donor": "John Smith",
    "date": "2024-10-15T10:30:00.000Z"
  },
  {
    "id": "507f1f77bcf86cd799439012",
    "amount": 2500.00,
    "donor": "Tech Corporation",
    "date": "2024-10-20T14:45:00.000Z"
  }
]
```

**Fields:**
- `id` (string): Unique identifier for the donation
- `amount` (number): Donation amount in USD
- `donor` (string): Name of the donor
- `date` (string): ISO 8601 formatted date

**Status Codes:**
- `200 OK`: Success
- `500 Internal Server Error`: Database error

---

## Voting Records

### GET /api/voting-records

Retrieve all voting records.

**Response:**
```json
[
  {
    "id": "507f1f77bcf86cd799439013",
    "politician": "Jane Doe",
    "bill": "Healthcare Reform Act 2024",
    "vote": "Yes",
    "date": "2024-09-10T16:00:00.000Z"
  },
  {
    "id": "507f1f77bcf86cd799439014",
    "politician": "John Smith",
    "bill": "Infrastructure Bill 2024",
    "vote": "No",
    "date": "2024-09-15T18:30:00.000Z"
  }
]
```

**Fields:**
- `id` (string): Unique identifier for the voting record
- `politician` (string): Name of the politician
- `bill` (string): Name or description of the bill
- `vote` (string): Vote cast - one of "Yes", "No", or "Abstain"
- `date` (string): ISO 8601 formatted date

**Status Codes:**
- `200 OK`: Success
- `500 Internal Server Error`: Database error

---

## Policy Changes

### GET /api/policy-changes

Retrieve all policy changes.

**Response:**
```json
[
  {
    "id": "507f1f77bcf86cd799439015",
    "title": "New Environmental Protection Policy",
    "description": "Strengthens regulations on industrial emissions and promotes renewable energy",
    "status": "Implemented",
    "date": "2024-08-01T09:00:00.000Z"
  },
  {
    "id": "507f1f77bcf86cd799439016",
    "title": "Education Funding Reform",
    "description": "Increases funding for public schools and introduces new teacher support programs",
    "status": "Under Review",
    "date": "2024-10-01T11:00:00.000Z"
  }
]
```

**Fields:**
- `id` (string): Unique identifier for the policy change
- `title` (string): Title of the policy
- `description` (string): Detailed description of the policy
- `status` (string): Current status - one of "Proposed", "Under Review", "Approved", "Rejected", or "Implemented"
- `date` (string): ISO 8601 formatted date

**Status Codes:**
- `200 OK`: Success
- `500 Internal Server Error`: Database error

---

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "error": "Error message description",
  "status": 500
}
```

**Common Status Codes:**
- `400 Bad Request`: Invalid request parameters
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error
- `503 Service Unavailable`: Service temporarily unavailable

---

## CORS

The API supports Cross-Origin Resource Sharing (CORS) for all endpoints under `/api/*`.

**Allowed Methods:** GET, POST, PUT, DELETE, OPTIONS
**Allowed Headers:** Content-Type, Authorization

---

## Rate Limiting

✅ **Rate limiting is now implemented** using Flask-Limiter.

**Default Limits:**
- 200 requests per day per IP address
- 50 requests per hour per IP address

**Configuration:**
Limits can be adjusted in `server.py` by modifying the `default_limits` parameter.

---

## Authentication

The current version does not require authentication. For production deployment with sensitive data, implement proper authentication (JWT, OAuth, etc.).

---

## Data Models

### Donation Model
```python
{
  "amount": Float (required),
  "donor": String (required),
  "date": DateTime (required)
}
```

### Voting Record Model
```python
{
  "politician": String (required),
  "bill": String (required),
  "vote": String (required, choices: ["Yes", "No", "Abstain"]),
  "date": DateTime (required)
}
```

### Policy Change Model
```python
{
  "title": String (required),
  "description": String (required),
  "status": String (required, choices: ["Proposed", "Under Review", "Approved", "Rejected", "Implemented"]),
  "date": DateTime (required)
}
```

---

## Testing

Use tools like cURL, Postman, or HTTPie to test the API:

```bash
# Health check
curl http://localhost:5000/health

# Get donations
curl http://localhost:5000/api/donations

# Get voting records
curl http://localhost:5000/api/voting-records

# Get policy changes
curl http://localhost:5000/api/policy-changes
```

---

## Notes

- All dates are in ISO 8601 format
- All endpoints return JSON responses
- The API uses HTTP status codes to indicate success or failure
- MongoDB ObjectId is converted to string for JSON serialization
