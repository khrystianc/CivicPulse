/**
 * Smoke tests for HomeScreen component
 * Validates that the component file exists and is properly structured
 */
const fs = require('fs');
const path = require('path');

describe('HomeScreen', () => {
  it('HomeScreen.js file exists', () => {
    const filePath = path.join(__dirname, '../../screens/HomeScreen.js');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('HomeScreen file contains expected text content', () => {
    const filePath = path.join(__dirname, '../../screens/HomeScreen.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for key elements
    expect(content).toContain('CivicPulse');
    expect(content).toContain('Transparency Dashboard');
    expect(content).toContain('Civic Engagement');
  });

  it('HomeScreen has navigation prop', () => {
    const filePath = path.join(__dirname, '../../screens/HomeScreen.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    expect(content).toContain('navigation');
    expect(content).toContain('navigate');
  });

  it('HomeScreen has proper styling', () => {
    const filePath = path.join(__dirname, '../../screens/HomeScreen.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    expect(content).toContain('StyleSheet');
    expect(content).toContain('styles');
  });
});
