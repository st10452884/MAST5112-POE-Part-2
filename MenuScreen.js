import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

const dishes = [
  { id: '1', name: 'Grilled Chicken', course: 'Main', image: require('../../assets/sp.jpeg') },
  { id: '2', name: 'Caesar Salad', course: 'Appetizer', image: require('../../assets/starters.jpeg') },
  { id: '3', name: 'Lemonade', course: 'Drink', image: require('../../assets/drinks.jpeg') },
  { id: '4', name: 'Chocolate Cake', course: 'Dessert', image: require('../../assets/desert.jpeg') },

];

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#8a2be2" />
        <Text style={styles.title}>Menu</Text>
        <Icon name="person" size={30} color="#8a2be2" onPress={() => {}} />
      </View>

      <TextInput placeholder="Search..." style={styles.searchBar} />

      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dishCard}>
            <Image source={item.image} style={styles.dishImage} />
            <Text style={styles.dishName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addDishButton} onPress={() => navigation.navigate('AddDish')}>
        <Text style={styles.addDishText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#8a2be2',
  },
  searchBar: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8a2be2',
  },
  dishCard: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  dishImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 16,
    color: '#8a2be2',
  },
  addDishButton: {
    backgroundColor: '#8a2be2',
    padding: 15,
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
  },
  addDishText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MenuScreen;
