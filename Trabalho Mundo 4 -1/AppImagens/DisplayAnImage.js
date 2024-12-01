import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Imagem Local</Text>
    <Image
      style={styles.imageFull}
      source={require('./assets/000111.png')} // Atualizado
      resizeMode="contain" // Garante que a imagem seja exibida inteira
    />
      
      <Text style={styles.title}>Imagem da Internet</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      
      <Text style={styles.title}>Imagem Base64</Text>
      <Image
        style={styles.imageLarge}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFW'
            + 'HRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/'
            + 'ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBg'
            + 'YGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
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
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center', 
    flexWrap: 'wrap', 
    width: '90%', 
    alignSelf: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageLarge: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageFull: {
    width: '100%',
    height: 200, 
  },
});

export default DisplayAnImage;