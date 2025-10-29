import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/donations')
      .then(response => {
        setDonations(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching donations:', error);
        setError('Failed to load donations');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (donations.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No donations available</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.donor}>{item.donor}</Text>
        <Text style={styles.amount}>${item.amount.toLocaleString()}</Text>
      </View>
      <Text style={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <FlatList
      data={donations}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id || index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    padding: 20,
    backgroundColor: '#fee',
    borderRadius: 8,
  },
  errorText: {
    color: '#c33',
    textAlign: 'center',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: '#999',
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  donor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default Donations;
