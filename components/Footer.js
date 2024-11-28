// components/Footer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>© 2024 Palayan City. All rights reserved.</Text> 
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="facebook" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="twitter" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="instagram" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#1a1a1a', // Darker background for a sleeker look
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    shadowColor: '#000', // Add shadow for depth
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // For Android shadow effect
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#e0e0e0', // Light gray color for better contrast
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15, // Increase space between icons
  },
  iconButton: {
    padding: 10,
    borderRadius: 25, // Slightly larger for better touch targets
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle background color
    justifyContent: 'center',
    alignItems: 'center',
  },
});
