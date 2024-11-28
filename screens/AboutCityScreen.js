import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from '../components/Footer';

export default function AboutCityScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>About Palayan City</Text>
      
      <Image
        source={require('../assets/images/Placeholder.jpg')} // Replace with your image URI or local asset
        style={styles.mainImage}
      />
      
      <Text style={styles.content}>
        Palayan City, the capital of Nueva Ecija, is a city in the Central Luzon region of the Philippines. Known for its agricultural lands and as a hub for rice production, Palayan City plays a vital role in the region’s economy and culture.
      </Text>

      <Text style={styles.subTitle}>History</Text>
      <Text style={styles.content}>
        Palayan City was established as a city in 1998 and is home to many historical and cultural landmarks. It was named after the local term for "rice field" due to its strong agricultural heritage.
      </Text>

      <Image
        source={require('../assets/images/Palayan_City_Municipal_Hall.jpg')} // Replace with your image URI or local asset
        style={styles.image}
      />

      <Text style={styles.subTitle}>Culture and Festivals</Text>
      <Text style={styles.content}>
        The city hosts various cultural events and festivals, such as the "Palayan City Founding Anniversary," which celebrates its rich history and unity. The people of Palayan are known for their strong sense of community and hospitality.
      </Text>

      <Image
        source={require('../assets/images/Philippine_festival.jpg')} // Replace with your image URI or local asset
        style={styles.image}
      />

      <Text style={styles.subTitle}>Natural Attractions</Text>
      <Text style={styles.content}>
        Palayan City is surrounded by picturesque landscapes, including lush rice fields, rolling hills, and scenic spots ideal for eco-tourism and outdoor activities. It is a peaceful destination for travelers seeking to experience nature's beauty.
      </Text>

      <Footer /> {/* Self-closing tag for Footer */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  mainImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    textAlign: 'justify',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
});
