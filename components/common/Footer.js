import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© {currentYear} CivicPulse. All rights reserved.</Text>
      <Text style={styles.subtext}>Fostering civic engagement and transparency</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    padding: 20,
    alignItems: 'center',
    marginTop: 'auto',
  },
  text: {
    fontSize: 12,
    color: '#ecf0f1',
  },
  subtext: {
    fontSize: 10,
    color: '#95a5a6',
    marginTop: 5,
  },
});

export default Footer;
