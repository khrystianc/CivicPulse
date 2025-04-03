import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/donations')
      .then(response => setDonations(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <Text>Political Donations</Text>
      {donations.map(donation => (
        <Text key={donation.id}>{donation.amount} - {donation.donor}</Text>
      ))}
    </View>
  );
};

export default Donations;
