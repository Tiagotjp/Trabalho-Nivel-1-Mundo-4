import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pizza Translator 🍕</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here to translate!"
        placeholderTextColor="#999"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.result}>
        {text
          .split(' ')
          .map(word => (word ? '🍕' : ''))
          .join(' ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  result: {
    marginTop: 20,
    fontSize: 42,
    color: '#ff6347',
    textAlign: 'center',
  },
});

export default PizzaTranslator;
