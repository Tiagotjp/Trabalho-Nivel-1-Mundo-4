import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Cat = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, I am {name}!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default Cat;
