import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CandidateProfiles = () => {
  // Mock data - in production, this would come from an API
  const [candidates] = useState([
    {
      id: '1',
      name: 'Jane Smith',
      party: 'Democratic',
      position: 'State Senator',
      experience: '15 years in public service',
      platform: 'Education reform, healthcare access, environmental protection',
    },
    {
      id: '2',
      name: 'John Doe',
      party: 'Republican',
      position: 'State Representative',
      experience: '10 years in business, 5 years in local government',
      platform: 'Economic growth, infrastructure development, tax reform',
    },
    {
      id: '3',
      name: 'Maria Garcia',
      party: 'Independent',
      position: 'Mayor',
      experience: 'Community organizer, city council member',
      platform: 'Housing affordability, public transit, community safety',
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.party}>{item.party}</Text>
        <Text style={styles.position}>{item.position}</Text>
      </View>
      <Text style={styles.label}>Experience:</Text>
      <Text style={styles.text}>{item.experience}</Text>
      <Text style={styles.label}>Platform:</Text>
      <Text style={styles.text}>{item.platform}</Text>
    </View>
  );

  return (
    <FlatList
      data={candidates}
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
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
  },
  party: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '600',
  },
  position: {
    fontSize: 14,
    color: '#666',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 8,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

export default CandidateProfiles;
