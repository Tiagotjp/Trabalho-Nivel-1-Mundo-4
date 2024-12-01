import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, StyleSheet } from 'react-native';
import DisplayAnImage from './DisplayAnImage.js';
import DisplayAnImageWithStyle from './DisplayAnImageWithStyle.js';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Visualizar Imagens Simples"
        onPress={() => navigation.navigate('Imagens Simples')}
      />
      <Button
        title="Visualizar Imagem com Stretch"
        onPress={() => navigation.navigate('Imagem com Stretch')}
        style={styles.button}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Imagens Simples" component={DisplayAnImage} />
        <Stack.Screen name="Imagem com Stretch" component={DisplayAnImageWithStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  button: {
    marginTop: 20,
  },
});

export default App;