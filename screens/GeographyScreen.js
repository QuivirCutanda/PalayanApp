import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from '../components/Footer';

export default function GeographyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Geography of Palayan City</Text>
      <Text style={styles.introText}>
        Palayan City, the capital of Nueva Ecija, is known for its rich geographical features, from fertile farmlands to lush landscapes. Discover the natural beauty and landmarks that define its unique environment.
      </Text>

      <View style={styles.section}>
        <Image
          source={require('../assets/palayan_city_map.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.subTitle}>Location and Landscape</Text>
        <Text style={styles.description}>
          Situated in the heart of Luzon, Palayan City is surrounded by vast agricultural lands, rolling hills, and scenic mountains. Its strategic location makes it an essential part of the region's economy and cultural heritage.
        </Text>
      </View>

      <View style={styles.section}>
        <Image
          source={require('../assets/river_view.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.subTitle}>Natural Waterways</Text>
        <Text style={styles.description}>
          Palayan City is blessed with various rivers and water bodies, including the prominent Pampanga River. These waterways provide irrigation for rice fields and contribute to the fertile land that supports agriculture.
        </Text>
      </View>

      <View style={styles.section}>
        <Image
          source={require('../assets/mountain_view.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.subTitle}>Mountains and Hills</Text>
        <Text style={styles.description}>
          The city is surrounded by rolling hills and mountain ranges that add to its scenic beauty. These highlands offer breathtaking views and are perfect for outdoor activities like hiking and nature exploration.
        </Text>
      </View>

      <View style={styles.section}>
        <Image
          source={require('../assets/forest_area.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.subTitle}>Forest and Green Spaces</Text>
        <Text style={styles.description}>
          Palayan City is home to several green spaces and forested areas that support diverse wildlife and provide a tranquil environment. These spaces are crucial for maintaining ecological balance and promoting eco-tourism.
        </Text>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#2E8B57',
  },
  introText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#2E8B57',
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});
