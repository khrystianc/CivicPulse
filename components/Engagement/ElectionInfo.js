import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ElectionInfo = () => {
  // Mock data - in production, this would come from an API
  const [elections] = useState([
    {
      id: '1',
      title: 'General Election 2025',
      date: '2025-11-04',
      type: 'General',
      description: 'Federal and state-level positions including Senate, House, and Governor races',
      registrationDeadline: '2025-10-15',
    },
    {
      id: '2',
      title: 'Primary Election 2025',
      date: '2025-05-20',
      type: 'Primary',
      description: 'Party primaries for upcoming general election',
      registrationDeadline: '2025-04-30',
    },
    {
      id: '3',
      title: 'Local Municipal Election',
      date: '2025-03-15',
      type: 'Municipal',
      description: 'City council, school board, and local ballot measures',
      registrationDeadline: '2025-02-28',
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.typeContainer}>
        <Text style={styles.type}>{item.type}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Election Date:</Text>
        <Text style={styles.value}>{new Date(item.date).toLocaleDateString()}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Registration Deadline:</Text>
        <Text style={styles.value}>{new Date(item.registrationDeadline).toLocaleDateString()}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={elections}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  typeContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  type: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#e74c3c',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginRight: 8,
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    lineHeight: 20,
  },
});

export default ElectionInfo;
