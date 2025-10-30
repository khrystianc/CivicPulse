/**
 * Basic smoke test for App component
 * Validates that App.js exists and has expected structure
 */
const fs = require('fs');
const path = require('path');

describe('App Component', () => {
  it('App.js file exists', () => {
    const filePath = path.join(__dirname, '../App.js');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('App.js contains NavigationContainer and Stack Navigator', () => {
    const filePath = path.join(__dirname, '../App.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    expect(content).toContain('NavigationContainer');
    expect(content).toContain('createStackNavigator');
  });

  it('App.js includes all required screens', () => {
    const filePath = path.join(__dirname, '../App.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    expect(content).toContain('HomeScreen');
    expect(content).toContain('DashboardScreen');
    expect(content).toContain('EngagementScreen');
  });
});
