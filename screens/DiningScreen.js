import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from '../components/Footer';

export default function DiningScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dining Options in Palayan City</Text>
      <Text style={styles.introText}>
        Palayan City offers a variety of dining experiences, from local Filipino specialties to international dishes. Explore some of the city's most popular dining spots.
      </Text>
      
      <View style={styles.restaurant}>
        <Image 
          source={require('../assets/Dining/cafe_del_sol.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.restaurantTitle}>Cafe del Sol</Text>
        <Text style={styles.restaurantDescription}>
          Cafe del Sol is a well-loved spot for its hearty breakfasts and freshly brewed coffee. Located in the heart of Palayan City, it provides a cozy atmosphere perfect for starting your day.
        </Text>
      </View>

      <View style={styles.restaurant}>
        <Image 
          source={require('../assets/Dining/grill_house_palayan.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.restaurantTitle}>The Grill House</Text>
        <Text style={styles.restaurantDescription}>
          The Grill House is famous for its delicious barbecue, grilled meats, and seafood dishes. It’s an excellent place for friends and family to gather over a feast.
        </Text>
      </View>

      <View style={styles.restaurant}>
        <Image 
          source={require('../assets/Dining/savor_dining.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.restaurantTitle}>Savor Dining</Text>
        <Text style={styles.restaurantDescription}>
          Savor Dining offers a mix of traditional Filipino dishes and international cuisine. With its elegant setting, it's a perfect spot for special occasions and intimate dinners.
        </Text>
      </View>

      <View style={styles.restaurant}>
        <Image 
          source={require('../assets/Dining/palayan_food_street.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.restaurantTitle}>Palayan Food Street</Text>
        <Text style={styles.restaurantDescription}>
          The Palayan Food Street is a vibrant area filled with street food vendors and small eateries that serve authentic Filipino snacks, local delicacies, and budget-friendly meals. A must-visit for food enthusiasts.
        </Text>
      </View>
      <Footer/>
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
  restaurant: {
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
  restaurantTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  restaurantDescription: {
    fontSize: 16,
    color: '#555',
  },
});
