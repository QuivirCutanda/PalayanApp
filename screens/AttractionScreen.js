import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from '../components/Footer';


export default function AttractionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>City Attractions</Text>
      <Text style={styles.introText}>
        Explore the best attractions our city has to offer! Whether you're looking for history, nature, or culture, there's something for everyone to enjoy.
      </Text>
      
      <View style={styles.attraction}>
        <Image 
          source={require('../assets/images/Attraction/park-image.jpg')} 
          style={styles.image}
        />
        <Text style={styles.attractionTitle}>The Great Central Park</Text>
        <Text style={styles.attractionDescription}>
          Central Park is a must-visit green space, perfect for outdoor activities such as jogging, cycling, and picnicking. It also features beautiful walking trails and peaceful lakes, providing a serene escape from the city hustle.
        </Text>
      </View>

      <View style={styles.attraction}>
        <Image 
          source={require('../assets/images/Attraction/museum-image.jpg')} // Replace with actual image URL or local asset path
          style={styles.image}
        />
        <Text style={styles.attractionTitle}>The City Museum</Text>
        <Text style={styles.attractionDescription}>
          The City Museum showcases the rich history and culture of our region. From ancient artifacts to modern art, the museum offers an immersive experience for history enthusiasts and art lovers alike.
        </Text>
      </View>

      <View style={styles.attraction}>
        <Image 
          source={require('../assets/images/Attraction/art-district-image.jpg')} // Replace with actual image URL or local asset path
          style={styles.image}
        />
        <Text style={styles.attractionTitle}>Downtown Art District</Text>
        <Text style={styles.attractionDescription}>
          The Downtown Art District is a vibrant area filled with art galleries, street performances, and unique art installations. It's a hub for creativity and a great place to discover the city's contemporary art scene.
        </Text>
      </View>

      <View style={styles.attraction}>
        <Image 
          source={require('../assets/images/Attraction/riverwalk-image.jpg')} // Replace with actual image URL or local asset path
          style={styles.image}
        />
        <Text style={styles.attractionTitle}>The Riverwalk</Text>
        <Text style={styles.attractionDescription}>
          The Riverwalk is an iconic destination for both tourists and locals. With its scenic waterfront views, cafes, and boutique shops, it's an ideal place for a leisurely stroll or a relaxing afternoon by the water.
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
  },
  introText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  attraction: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  attractionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  attractionDescription: {
    fontSize: 16,
    color: '#555',
  },
});
