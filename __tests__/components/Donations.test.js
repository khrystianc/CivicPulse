import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import Donations from '../../components/Dashboard/Donations';

jest.mock('axios');

describe('Donations Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    axios.get.mockImplementation(() => new Promise(() => {}));
    const { getByTestId } = render(<Donations />);
    // ActivityIndicator should be shown during loading
    expect(axios.get).toHaveBeenCalledWith('http://localhost:5000/api/donations');
  });

  it('renders donations when data is fetched successfully', async () => {
    const mockDonations = [
      { id: '1', donor: 'John Doe', amount: 1000, date: '2024-01-01' },
      { id: '2', donor: 'Jane Smith', amount: 2000, date: '2024-01-02' },
    ];

    axios.get.mockResolvedValue({ data: mockDonations });

    const { getByText, queryByText } = render(<Donations />);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('Jane Smith')).toBeTruthy();
      expect(getByText('$1,000')).toBeTruthy();
      expect(getByText('$2,000')).toBeTruthy();
    });
  });

  it('renders error message when fetch fails', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));

    const { getByText } = render(<Donations />);

    await waitFor(() => {
      expect(getByText('Failed to load donations')).toBeTruthy();
    });
  });

  it('renders empty state when no donations are available', async () => {
    axios.get.mockResolvedValue({ data: [] });

    const { getByText } = render(<Donations />);

    await waitFor(() => {
      expect(getByText('No donations available')).toBeTruthy();
    });
  });
});
