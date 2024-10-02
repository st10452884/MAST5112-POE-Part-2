import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const AddDishScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Main');

  const handleAddDish = () => {
  
    console.log({ name, price, description, course });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />

      <Text style={styles.label}>Price</Text>
      <TextInput value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />

      <Text style={styles.label}>Description</Text>
      <TextInput value={description} onChangeText={setDescription} style={styles.input} multiline />

      <Text style={styles.label}>Course</Text>
      <Picker selectedValue={course} style={styles.picker} onValueChange={(itemValue) => setCourse(itemValue)}>
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Appetizer" value="Appetizer" />
        <Picker.Item label="Drink" value="Drink" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Button title="Add Dish" onPress={handleAddDish} color="#8a2be2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3e5f5',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#8a2be2',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8a2be2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    marginBottom: 15,
  },
});

export default AddDishScreen;
