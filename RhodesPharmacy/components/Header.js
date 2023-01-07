import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Rhodes Pharmacy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
});

export default Header;