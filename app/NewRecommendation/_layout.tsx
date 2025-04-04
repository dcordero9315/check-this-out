import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function NewRecommendation() {
    return (
      <Stack>
        <Stack.Screen 
            name="index" 
            options={{ 
                title: 'Recommendations', 
                headerShown: false 
            }} 
        />
        <Stack.Screen 
            name="newRecommendation" 
            options={{ 
                title: 'New Recommendation' 
            }} 
        />
        <Stack.Screen 
            name="test" 
            options={{ 
                title: 'Test' 
            }} 
        />   
      </Stack>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
