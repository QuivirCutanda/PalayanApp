import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from '../components/Footer';

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header with the title */}
      <Text style={styles.title}>History of the City</Text>
      
      {/* Image section */}
      <Image
        source={require('../assets/history_image.jpg')} // Replace with the actual image path
        style={styles.image}
      />
      
      {/* Content section */}
      <Text style={styles.content}>
        The city has a rich history, with its origins tracing back to the indigenous Bukidnon tribes and Spanish colonial influence.
      </Text>
      <Text style={styles.content}>
        During the Spanish era, it became a center of trade and cultural exchange. The influences of this period are still evident in the city's architecture, traditions, and festivals. Over time, the city has developed into a vibrant, modern community that honors its historical roots while embracing progress.
      </Text>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light background for a clean look
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#343a40', // Dark color for good contrast
    textAlign: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  content: {
    fontSize: 16,
    color: '#495057', // Darker color for text readability
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
  },
});
