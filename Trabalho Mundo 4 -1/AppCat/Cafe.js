import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cafe = () => (
  <View style={styles.container}>
    <Text>Hello, I am Maru!</Text>
    <Text>Hello, I am Jellylorum!</Text>
    <Text>Hello, I am Spot!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Cafe;
