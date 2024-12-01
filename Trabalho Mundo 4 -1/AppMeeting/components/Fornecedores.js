import React, { useState } from 'react';
import {
    Alert,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const ListaFornecedores = ({ fornecedores, onRemove }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);

    const handleDetalhes = (fornecedor) => {
        setFornecedorSelecionado(fornecedor);
        setModalVisible(true);
    };

    const handleDelete = (fornecedor) => {
        Alert.alert('Confirmar exclusão', 'Você realmente deseja excluir este fornecedor?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Excluir', onPress: () => onRemove(fornecedor.id) },
        ]);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {fornecedores.map((fornecedor) => (
                    <View key={fornecedor.id} style={styles.fornecedorContainer}>
                        <Image source={{ uri: fornecedor.imagem }} style={styles.imagemFornecedor} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.nomeFornecedor}>{fornecedor.nome}</Text>
                            <Text style={styles.detalheFornecedor}>Categoria: {fornecedor.categorias}</Text>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={() => handleDetalhes(fornecedor)}
                            >
                                <Text style={styles.actionText}>Detalhes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.actionButton, { backgroundColor: '#E63946' }]}
                                onPress={() => handleDelete(fornecedor)}
                            >
                                <Text style={styles.actionText}>Apagar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {fornecedorSelecionado && (
                <Modal visible={modalVisible} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image
                                source={{ uri: fornecedorSelecionado.imagem }}
                                style={styles.modalImage}
                            />
                            <Text style={styles.modalText}>
                                Nome: {fornecedorSelecionado.nome}
                            </Text>
                            <Text style={styles.modalText}>
                                Endereço: {fornecedorSelecionado.endereco}
                            </Text>
                            <Text style={styles.modalText}>
                                Contato: {fornecedorSelecionado.contato}
                            </Text>
                            <Text style={styles.modalText}>
                                Categoria: {fornecedorSelecionado.categorias}
                            </Text>
                            <Text style={styles.modalText}>
                                Descrição: {fornecedorSelecionado.descricao}
                            </Text>
                            <TouchableOpacity
                                style={[styles.actionButton, { marginTop: 20 }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.actionText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#F0F0F0' },
    fornecedorContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#FFF',
        borderRadius: 12,
        elevation: 3,
    },
    imagemFornecedor: { width: 80, height: 80, borderRadius: 50 },
    infoContainer: { flex: 1, marginLeft: 12 },
    nomeFornecedor: { fontWeight: 'bold', fontSize: 16, marginBottom: 8 },
    detalheFornecedor: { fontSize: 14, color: '#555', marginBottom: 4 },
    actionButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 8,
        marginTop: 8,
    },
    actionText: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: {
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },
    modalImage: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
    modalText: { fontSize: 16, color: '#333', marginBottom: 10 },
});

export default ListaFornecedores;
