// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer'; // Import Footer component

export default function HomeScreen({ navigation }) {
  const features = [
    { id: '1', title: 'City Attraction', image: require('../assets/attraction.png'), screen: 'AttractionScreen' },
    { id: '2', title: 'Dining', image: require('../assets/dining.png'), screen: 'DiningScreen' },
    { id: '3', title: 'Business', image: require('../assets/business.png'), screen: 'BusinessScreen' },
    { id: '4', title: 'About', image: require('../assets/about.jpg'), screen: 'AboutCityScreen' },
    { id: '5', title: 'History', image: require('../assets/history.jpg'), screen: 'HistoryScreen' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Republic of the Philippines</Text>
      <Text style={styles.subtitle}>City of Palayan</Text>
      <Image
        source={require('../assets/images/Placeholder.jpg')}
        style={styles.banner}
      />
      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)} // Navigate to the screen based on item
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      />
      <Footer /> {/* Add the footer at the bottom */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light background color for a clean look
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40', // Dark color for text contrast
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#495057', // Slightly lighter gray for the subtitle
    textAlign: 'center',
    marginBottom: 15,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: '#ddd', // Add border color to the image for definition
    borderWidth: 1,
  },
  cardList: {
    paddingVertical: 10,
  },
  card: {
    width: 180,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
    height: 220, // Adjusted card height to fit description
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ddd', // Border color to separate the image
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#343a40', // Darker color for better readability
  },
});
