import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Test = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Test</Text>
            <Link href="./index" style={{ marginTop: 20 }}>
                <Text style={{ color: "blue" }}>Back to Recommendations</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default Test;