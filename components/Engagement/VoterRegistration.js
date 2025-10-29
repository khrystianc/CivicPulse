import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const VoterRegistration = () => {
  const handleRegister = () => {
    // Opens the official voter registration website
    Linking.openURL('https://vote.gov');
  };

  const handleCheckStatus = () => {
    // Opens the voter registration status check
    Linking.openURL('https://www.eac.gov/voters/verify-voter-registration');
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoCard}>
        <Text style={styles.title}>Register to Vote</Text>
        <Text style={styles.description}>
          Make sure you're registered to vote in upcoming elections. Registration
          requirements vary by state, but typically include:
        </Text>
        <View style={styles.requirementsList}>
          <Text style={styles.requirement}>• U.S. citizenship</Text>
          <Text style={styles.requirement}>• Meeting your state's residency requirements</Text>
          <Text style={styles.requirement}>• Being 18 years old (in some states, you can pre-register at 16 or 17)</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register to Vote Online</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={handleCheckStatus}>
        <Text style={styles.buttonText}>Check Registration Status</Text>
      </TouchableOpacity>

      <View style={styles.tipsCard}>
        <Text style={styles.tipsTitle}>Important Reminders:</Text>
        <Text style={styles.tip}>• Check your registration status regularly</Text>
        <Text style={styles.tip}>• Update your registration if you move</Text>
        <Text style={styles.tip}>• Know your polling location before election day</Text>
        <Text style={styles.tip}>• Bring required ID to vote</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
  requirementsList: {
    marginTop: 5,
  },
  requirement: {
    fontSize: 14,
    color: '#555',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipsCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  tip: {
    fontSize: 14,
    color: '#555',
    lineHeight: 24,
  },
});

export default VoterRegistration;
