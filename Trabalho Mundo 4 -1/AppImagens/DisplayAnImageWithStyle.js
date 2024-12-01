import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagem com "Stretch"</Text>
      <Image
        style={styles.stretch}
        source={require('./assets/000222.png')} // Atualizado
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center', 
    flexWrap: 'wrap', 
    width: '90%', 
    alignSelf: 'center',
  },
  stretch: {
    width: 180,
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default DisplayAnImageWithStyle;