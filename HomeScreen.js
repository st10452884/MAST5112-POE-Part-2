import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/fish.jpeg')} style={styles.logo} />
      <Text style={styles.slogan}>Just gotta have food made by a chef</Text>
      <Button title="Get Started" color="#8a2be2" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e5f5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  slogan: {
    fontSize: 18,
    color: '#8a2be2',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
