import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const VotingRecords = () => {
  const [votingRecords, setVotingRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/voting-records')
      .then(response => {
        setVotingRecords(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching voting records:', error);
        setError('Failed to load voting records');
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

  if (votingRecords.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No voting records available</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.politician}>{item.politician}</Text>
        <Text style={[styles.vote, item.vote === 'Yes' ? styles.voteYes : styles.voteNo]}>
          {item.vote}
        </Text>
      </View>
      <Text style={styles.bill}>{item.bill}</Text>
      <Text style={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <FlatList
      data={votingRecords}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  politician: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  vote: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  voteYes: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  voteNo: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  bill: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default VotingRecords;
