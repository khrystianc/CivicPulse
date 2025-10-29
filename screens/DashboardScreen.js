import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Donations from '../components/Dashboard/Donations';
import VotingRecords from '../components/Dashboard/VotingRecords';
import PolicyChanges from '../components/Dashboard/PolicyChanges';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transparency Dashboard</Text>
        <Text style={styles.subtitle}>Track political activities and changes</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Political Donations</Text>
          <Donations />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Voting Records</Text>
          <VotingRecords />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Policy Changes</Text>
          <PolicyChanges />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#ecf0f1',
  },
  content: {
    padding: 15,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
  },
});

export default DashboardScreen;
