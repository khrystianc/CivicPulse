import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CandidateProfiles from '../components/Engagement/CandidateProfiles';
import ElectionInfo from '../components/Engagement/ElectionInfo';
import VoterRegistration from '../components/Engagement/VoterRegistration';

const EngagementScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Civic Engagement</Text>
        <Text style={styles.subtitle}>Stay informed and participate in democracy</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Election Information</Text>
          <ElectionInfo />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Candidate Profiles</Text>
          <CandidateProfiles />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Voter Registration</Text>
          <VoterRegistration />
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
    backgroundColor: '#e74c3c',
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

export default EngagementScreen;
