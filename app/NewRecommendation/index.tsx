import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { TextInput } from 'react-native-paper';

const NewRecommendation = () => {
    const [titleText, setTitle] = React.useState("");
    const [text, setText] = React.useState("");
    // const [text, setText] = React.useState("");
    // const [text, setText] = React.useState("");

    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>New Recommendation Component</Text>

            <TextInput
                label="Title"
                value={titleText}
                onChangeText={titleText => setTitle(titleText)}
            />
            <TextInput
                label="Recommended by"
                value={text}
                onChangeText={text => setText(text)}
            />
            {/* <TextInput
                label="Title"
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Title"
                value={text}
                onChangeText={text => setText(text)} 
            />*/}


            <Link href="../app/index" style={{ marginTop: 20 }}>
                <Text style={{ color: "blue" }}>Back to Recommendations</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#fff',
        width: '100%',
        color: '#000',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default NewRecommendation;