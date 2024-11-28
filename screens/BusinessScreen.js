import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from '../components/Footer';

export default function BusinessScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Business Opportunities in Palayan City</Text>
      <Text style={styles.introText}>
        Palayan City is known for its dynamic business environment, supporting a range of industries from retail to agriculture. Here are some of the key establishments and opportunities.
      </Text>

      <View style={styles.business}>
        <Image 
          source={require('../assets/Business/palayan_mall.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.businessTitle}>Palayan City Mall</Text>
        <Text style={styles.businessDescription}>
          The Palayan City Mall is a bustling shopping destination that offers a mix of retail stores, dining options, and entertainment venues. It's a popular spot for both locals and visitors to shop and unwind.
        </Text>
      </View>

      <View style={styles.business}>
        <Image 
          source={require('../assets/Business/marketplace.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.businessTitle}>Palayan City Marketplace</Text>
        <Text style={styles.businessDescription}>
          The marketplace is known for its vibrant atmosphere where local vendors sell fresh produce, handicrafts, and unique goods. It’s an ideal place for small business owners to start their ventures.
        </Text>
      </View>

      <View style={styles.business}>
        <Image 
          source={require('../assets/Business/tech_hub.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.businessTitle}>Palayan Tech Hub</Text>
        <Text style={styles.businessDescription}>
          A modern space designed to support tech startups and entrepreneurs, the Palayan Tech Hub provides resources and networking opportunities to help new businesses grow in the digital age.
        </Text>
      </View>

      <View style={styles.business}>
        <Image 
          source={require('../assets/Business/agriculture_center.jpg')} // Replace with actual image name in your project
          style={styles.image}
        />
        <Text style={styles.businessTitle}>Palayan Agriculture Center</Text>
        <Text style={styles.businessDescription}>
          As an agricultural city, Palayan is home to businesses focused on farming and agribusiness. The Agriculture Center supports local farmers with training, resources, and sustainable practices.
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
  business: {
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
  businessTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  businessDescription: {
    fontSize: 16,
    color: '#555',
  },
});
