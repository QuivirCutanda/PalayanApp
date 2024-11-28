import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Footer from '../components/Footer';
import AttractionScreen from '../screens/AttractionScreen';
import DiningScreen from '../screens/DiningScreen';
import BusinessScreen from '../screens/BusinessScreen';
import AboutCityScreen from '../screens/AboutCityScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreenComponent from '../screens/HomeScreen';

// Create a Drawer navigator
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  const features = [
    { id: '1', title: 'City Attraction', image: require('../assets/attraction.png'), screen: 'AttractionScreen' },
    { id: '2', title: 'Dining', image: require('../assets/dining.png'), screen: 'DiningScreen' },
    { id: '3', title: 'Business', image: require('../assets/business.png'), screen: 'BusinessScreen' },
    { id: '4', title: 'About', image: require('../assets/business.png'), screen: 'AboutCityScreen' },
    { id: '5', title: 'History', image: require('../assets/business.png'), screen: 'HistoryScreen' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Republic of the Philippines</Text>
      <Text style={styles.subtitle}>City of Palayan</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder_building.jpg' }}
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
        contentContainerStyle={styles.cardList}
      />
      <Footer /> {/* Add the footer at the bottom */}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="AttractionScreen" component={AttractionScreen} />
        <Drawer.Screen name="AboutCityScreen" component={AboutCityScreen} />
        <Drawer.Screen name="BusinessScreen" component={BusinessScreen} />
        <Drawer.Screen name="DiningScreen" component={DiningScreen} />
        <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardList: {
    paddingVertical: 10,
  },
  card: {
    width: 160,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});
