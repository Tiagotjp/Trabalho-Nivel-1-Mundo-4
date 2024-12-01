import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroFornecedor from './components/Cadastro.js';
import ListaFornecedores from './components/Fornecedores.js';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fornecedores, setFornecedores] = useState([]);

    const handleCadastroSubmit = (novoFornecedor) => {
        setFornecedores([...fornecedores, novoFornecedor]);
    };

    const handleRemove = (fornecedorId) => {
        setFornecedores((currentFornecedores) =>
            currentFornecedores.filter((f) => f.id !== fornecedorId)
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Cadastro"
                screenOptions={{
                    headerStyle: { backgroundColor: '#F7F7F7' },
                    headerTintColor: '#333',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                {/* Tela de Cadastro */}
                <Stack.Screen name="Cadastro" options={{ title: '' }}>
                    {(props) => (
                        <ScrollView contentContainerStyle={styles.scroll}>
                            <View style={styles.section}>
                                <CadastroFornecedor
                                    onCadastroSubmit={handleCadastroSubmit}
                                    onFornecedoresPress={() =>
                                        props.navigation.navigate('Fornecedores')
                                    }
                                    {...props}
                                />
                            </View>
                        </ScrollView>
                    )}
                </Stack.Screen>

                {/* Tela de Lista de Fornecedores */}
                <Stack.Screen
                    name="Fornecedores"
                    options={{ title: 'Lista de Fornecedores' }}
                >
                    {() => (
                        <ListaFornecedores
                            fornecedores={fornecedores}
                            onRemove={handleRemove}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});
