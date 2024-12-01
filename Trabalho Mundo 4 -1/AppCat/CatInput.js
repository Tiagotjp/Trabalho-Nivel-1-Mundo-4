import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
const CatInput = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Type a cat name..."
        placeholderTextColor="#888"
      />
      <Text style={styles.output}>
        {name === '' ? 'Please give me a name!' : `Hello, I am ${name}!`}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  output: {
    marginTop: 12,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
export default CatInput;
