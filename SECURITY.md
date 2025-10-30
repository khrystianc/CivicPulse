# CivicPulse Security Policy

## Reporting Security Issues

If you discover a security vulnerability, please report it privately to the maintainers. Do not open a public issue.

**Email**: [your-security-email@example.com]

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will respond within 48 hours and work with you to address the issue.

## Security Measures

### Backend Security

1. **Environment Variables**: All sensitive configuration stored in `.env` files (not committed)
2. **CORS**: Configured to restrict origins in production
3. **Input Validation**: All user inputs validated
4. **Dependencies**: Regularly updated and audited
5. **MongoDB**: Authentication enabled in production
6. **HTTPS**: Required for production deployments
7. **Rate Limiting**: Should be implemented for production

### Frontend Security

1. **No Hardcoded Secrets**: API keys and tokens stored in environment variables
2. **HTTPS Only**: All API calls over HTTPS in production
3. **Dependency Audit**: Regular npm audit runs
4. **XSS Prevention**: React Native's built-in XSS protection
5. **Secure Links**: External links validated

## Security Best Practices

### For Deployment

1. **Change Default Credentials**
   - Update MongoDB credentials
   - Use strong passwords
   - Enable authentication

2. **Configure CORS Properly**
   ```python
   # In production, specify exact origins
   CORS_ORIGIN=https://yourdomain.com
   ```

3. **Use Environment Variables**
   ```bash
   # Never commit .env files
   # Always use .env.example as template
   ```

4. **Enable HTTPS**
   - Use SSL/TLS certificates
   - Redirect HTTP to HTTPS
   - Set secure cookies

5. **Rate Limiting (✓ Implemented)**
   - Rate limiting is now enabled by default with Flask-Limiter
   - Default limits: 200 requests per day, 50 requests per hour per IP
   - Configuration can be adjusted via the rate limiter settings in server.py
   - Prevents abuse and DoS attacks

6. **Regular Updates**
   - Update Python dependencies: `pip list --outdated`
   - Update npm packages: `npm outdated`
   - Apply security patches promptly

7. **Monitoring and Logging**
   - Log security events
   - Monitor for suspicious activity
   - Set up alerts for errors

8. **Database Security**
   - Enable MongoDB authentication
   - Use encrypted connections
   - Regular backups
   - Restrict network access

### For Development

1. **Use Virtual Environments**
   - Python: `python -m venv venv`
   - Keep dependencies isolated

2. **Don't Commit Secrets**
   - Add `.env` to `.gitignore`
   - Use `.env.example` for templates
   - Review commits before pushing

3. **Validate Input**
   - Sanitize all user input
   - Use parameterized queries
   - Validate data types

4. **Handle Errors Properly**
   - Don't expose stack traces
   - Log errors securely
   - Return generic error messages

## Dependency Security

### Python Dependencies

Check for vulnerabilities:
```bash
pip install safety
safety check
```

### Node.js Dependencies

Check for vulnerabilities:
```bash
npm audit
npm audit fix
```

## Known Issues

None currently reported.

## Security Updates

| Date | Version | Description |
|------|---------|-------------|
| 2025-10-29 | 1.0.0 | Initial security policy |

## Security Checklist for Production

- [ ] Environment variables configured
- [ ] CORS restricted to production domain
- [ ] HTTPS enabled
- [ ] MongoDB authentication enabled
- [ ] Rate limiting implemented
- [ ] Error handling configured
- [ ] Logging enabled
- [ ] Backups configured
- [ ] Dependencies updated
- [ ] Security audit completed
- [ ] Monitoring setup
- [ ] Incident response plan in place

## Responsible Disclosure

We follow responsible disclosure practices:
1. Report received and acknowledged (48 hours)
2. Vulnerability confirmed (1 week)
3. Fix developed and tested (2 weeks)
4. Fix deployed (3 weeks)
5. Public disclosure (30 days after fix)

## Contact

For security concerns:
- Email: [security@example.com]
- GitHub: Open a security advisory

Thank you for helping keep CivicPulse secure!
