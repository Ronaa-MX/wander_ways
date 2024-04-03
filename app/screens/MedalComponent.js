import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MedalComponent = ({ medal, name, description }) => {
    return (
        <View style={styles.container}>
            <Image source={medal} style={styles.medalIcon} />
            <Text style={styles.medalName}>{name}</Text>
            <Text style={styles.medalDescription}>{description}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: "flex .space-around",
        alignItems: "center",
        padding: 2,
        marginBottom: 20,
        marginEnd: 20,
    },

    medalIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    medalName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    medalDescription: {
        fontSize: 14,
        marginTop: 4,
    },
});

export default MedalComponent;