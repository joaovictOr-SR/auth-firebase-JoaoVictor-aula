import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import app from '../firebaseConfig'; 

const Jogadores = ({ navigation }) => {
    const [jogadoresList, setJogadoresList] = useState([]);

    useEffect(() => {
        const db = getFirestore(app);
        const jogadoresCollection = collection(db, 'colecao-real-madrid');

        const unsubscribe = onSnapshot(jogadoresCollection, querySnapshot => {
            const jogadores = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    nome: data.nome || 'N/A', 
                    posicao: data.posicao || 'N/A', 
                    camisa: data.camisa || 'N/A', 
                    nascimento: formatDate(data.nascimento) || 'N/A',
                    altura: formatNumber(data.altura) || 'N/A'
                };
            });
            setJogadoresList(jogadores);
        });

        return () => unsubscribe();
    }, []);

    const formatDate = (timestamp) => {
        if (timestamp && timestamp.seconds) {
            const date = new Date(timestamp.seconds * 1000);
            return date.toLocaleDateString();
        }
        return 'N/A';
    };

    const formatNumber = (value) => {
        return typeof value === 'number' ? value.toString() : 'N/A';
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.info}>Camisa: {item.camisa}</Text>
            <Text style={styles.info}>Nascimento: {item.nascimento}</Text>
            <Text style={styles.info}>Altura: {item.altura} cm</Text>
        </View>
    );

    return (
        <ImageBackground
            source={require('../images/fundo-jogadores.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Jogadores</Text>
                <FlatList
                    data={jogadoresList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // ou 'contain' se preferir
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#003366',
    },
    position: {
        fontSize: 16,
        color: '#666666',
    },
    info: {
        fontSize: 14,
        color: '#333333',
    },
});

export default Jogadores;
