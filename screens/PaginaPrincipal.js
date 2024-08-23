import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaginaPrincipal = ({ navigation }) => {
    return (
        <View style={styles.container}> 
           <TouchableOpacity 
               style={styles.button} 
               onPress={() => navigation.navigate('Jogadores')}>
               <Text style={styles.buttonText}>Ver Jogadores</Text>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4b65cc',
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#1e90ff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default PaginaPrincipal;
