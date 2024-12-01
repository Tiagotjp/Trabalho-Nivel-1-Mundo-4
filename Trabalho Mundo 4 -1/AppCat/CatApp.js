import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const CatApp = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
      style={styles.image}
    />
    <Text style={styles.text}>Hello, I am your cat!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default CatApp;
