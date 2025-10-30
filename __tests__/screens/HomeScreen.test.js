import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../screens/HomeScreen';

const mockNavigation = {
  navigate: jest.fn(),
};

describe('HomeScreen', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('CivicPulse')).toBeTruthy();
  });

  it('renders the subtitle', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('Fostering Community Connection and Impactful Change')).toBeTruthy();
  });

  it('renders the transparency dashboard feature card', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('📊 Transparency Dashboard')).toBeTruthy();
  });

  it('renders the civic engagement feature card', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('🗳️ Civic Engagement')).toBeTruthy();
  });

  it('renders the welcome section', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('Welcome to CivicPulse')).toBeTruthy();
  });
});
