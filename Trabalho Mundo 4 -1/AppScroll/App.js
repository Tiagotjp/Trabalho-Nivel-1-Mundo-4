import React from 'react';
import { Image, ScrollView, Text, StyleSheet, View } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Scroll me, please! 😊</Text>
    <View style={styles.logoRow}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>
    <View style={styles.logoRow}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>

    <Text style={styles.text}>If you like...</Text>
    <View style={styles.logoRow}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>
      <View style={styles.logoRow}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>

    <Text style={styles.text}>Scrolling down!</Text>
    <View style={styles.logoRow}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>
    <View style={styles.logoRow}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>

    <Text style={styles.text}>What's the best?</Text>
    <View style={styles.logoRow}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
       <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>
    <View style={styles.logoRow}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>

    <Text style={styles.footer}>React Native 🚀</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7',
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  footer: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#4CAF50',
  },
  logo: {
    width: 64,
    height: 64,
    margin: 5,
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default App;
