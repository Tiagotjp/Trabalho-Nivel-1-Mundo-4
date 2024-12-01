import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Cat from './Cat';
import CatApp from './CatApp';
import CatInput from './CatInput';

const App = () => (
  <SafeAreaView style={styles.container}>
    {/* Linha 1: Texto e Imagem lado a lado */}
    <View style={styles.row}>
      <View style={styles.box}>
        <Cat name="Maru" />
      </View>
      <View style={styles.box}>
        <CatApp />
      </View>
    </View>

    {/* Linha 2: Interação com Input */}
    <View style={styles.fullWidthBox}>
      <CatInput />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap', // Garante que os elementos quebrem linha em telas menores
    marginBottom: 20,
  },
  box: {
    flex: 1,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    minWidth: '45%', // Ocupa 45% da largura para telas maiores
    maxWidth: '100%', // Ocupa a largura total em telas menores
    height: 200, // Altura fixa para uniformidade
    backgroundColor: '#fff',
  },
  fullWidthBox: {
    width: '90%', // Ocupa 90% da largura da tela
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
});

export default App;
