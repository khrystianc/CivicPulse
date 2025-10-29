import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>CivicPulse</Text>
        <Text style={styles.subtitle}>Fostering Community Connection and Impactful Change</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Welcome to CivicPulse</Text>
        <Text style={styles.description}>
          CivicPulse is your tool for staying informed and engaged in civic matters.
          Track political donations, voting records, policy changes, and stay updated
          on elections and candidates.
        </Text>

        <View style={styles.featuresContainer}>
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={styles.featureTitle}>📊 Transparency Dashboard</Text>
            <Text style={styles.featureDescription}>
              Track political donations, voting records, and policy changes in real-time
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation.navigate('Engagement')}
          >
            <Text style={styles.featureTitle}>🗳️ Civic Engagement</Text>
            <Text style={styles.featureDescription}>
              Stay informed about elections, candidates, and voter registration
            </Text>
          </TouchableOpacity>
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
    backgroundColor: '#2c3e50',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ecf0f1',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 30,
  },
  featuresContainer: {
    gap: 15,
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default HomeScreen;
