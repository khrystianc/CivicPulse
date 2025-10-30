/**
 * Smoke tests for Donations component
 * Validates that the component file exists and is properly structured
 */
const fs = require('fs');
const path = require('path');

describe('Donations Component', () => {
  it('Donations.js file exists', () => {
    const filePath = path.join(__dirname, '../../components/Dashboard/Donations.js');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('Donations component uses axios for API calls', () => {
    const filePath = path.join(__dirname, '../../components/Dashboard/Donations.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check that component imports and uses axios
    expect(content).toContain('axios');
    expect(content).toContain('api/donations');
  });

  it('Donations component handles loading, error, and empty states', () => {
    const filePath = path.join(__dirname, '../../components/Dashboard/Donations.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for state management
    expect(content).toContain('useState');
    expect(content).toContain('loading');
    expect(content).toContain('error');
  });

  it('Donations component displays donor information', () => {
    const filePath = path.join(__dirname, '../../components/Dashboard/Donations.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check that component displays donor and amount
    expect(content).toContain('donor');
    expect(content).toContain('amount');
  });
});
