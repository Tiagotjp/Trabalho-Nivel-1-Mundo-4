import React, { Component } from 'react';
import { Alert, Image, StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class CadastroFornecedor extends Component {
    state = {
        nome: '',
        endereco: '',
        contato: '',
        categorias: '',
        descricao: '',
        imagem: null,
    };

    handleCadastro = () => {
        const { nome, endereco, contato, categorias, descricao, imagem } = this.state;
        if (!nome || !endereco || !contato || !categorias || !descricao) {
            this.showAlert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        const novoFornecedor = {
            id: Date.now().toString(),
            nome,
            endereco,
            contato,
            categorias,
            descricao,
            imagem,
        };

        this.props.onCadastroSubmit(novoFornecedor);
        this.clearFields();
        this.showAlert('Sucesso', 'Fornecedor cadastrado com sucesso!');
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            this.setState({
                imagem: result.assets && result.assets.length > 0 ? result.assets[0].uri : null,
            });
        }
    };

    clearFields = () => {
        this.setState({
            nome: '',
            endereco: '',
            contato: '',
            categorias: '',
            descricao: '',
            imagem: null,
        });
    };

    showAlert = (title, message) => {
        Alert.alert(title, message);
    };

    render() {
        const { nome, endereco, contato, categorias, descricao, imagem } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro de Fornecedores</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Fornecedor"
                        value={nome}
                        onChangeText={(text) => this.setState({ nome: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                        value={endereco}
                        onChangeText={(text) => this.setState({ endereco: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contato"
                        value={contato}
                        onChangeText={(text) => this.setState({ contato: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Categoria"
                        value={categorias}
                        onChangeText={(text) => this.setState({ categorias: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição do Produto"
                        value={descricao}
                        onChangeText={(text) => this.setState({ descricao: text })}
                    />

                    {imagem && <Image source={{ uri: imagem }} style={styles.image} />}

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.imageButton} onPress={this.pickImage}>
                            <Text style={styles.buttonText}>Imagem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cadastroButton} onPress={this.handleCadastro}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.fornecedoresButton}
                        onPress={this.props.onFornecedoresPress}
                    >
                        <Text style={styles.buttonText}>Fornecedores</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 18,
        color: '#333',
    },
    form: {
        width: '100%',
        padding: 30,
        backgroundColor: '#d3d3d3',
        borderRadius: 15,
        elevation: 8,
        alignItems: 'center', // Alinha os inputs no centro do contêiner
    },
    input: {
        width: 280, // Ajuste a largura para garantir que todos os inputs tenham o mesmo comprimento
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    imageButton: {
        backgroundColor: '#007BFF',
        marginTop:10,
        marginRight: 10,
        paddingVertical: 14,
        paddingHorizontal:14,
        borderRadius: 8,
        alignItems: 'center',
    },
    cadastroButton: {
        backgroundColor: '#007BFF',
        marginTop: 10,
        paddingVertical: 14,
        paddingHorizontal:14,
        borderRadius: 8,
        alignItems: 'center',
    },
    fornecedoresButton: {
        backgroundColor: '#007BFF',
        marginTop: 10,
        paddingVertical: 14,
        paddingHorizontal:14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CadastroFornecedor;
