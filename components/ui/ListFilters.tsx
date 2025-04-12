import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const ListFilters: React.FC = () => {
    // const handleSearch = () => {
    //     console.log('Search action triggered');
    // };

    // const handleMore = () => {
    //     console.log('More options action triggered');
    // };

    return (
        <Appbar.Header>
            <Appbar.Content 
                title="All" 
                titleStyle={styles.textStyle} 
                onPress={() => console.log("All media tab")}
            />
            <Appbar.Content 
                title="Movies" 
                titleStyle={styles.textStyle} 
                onPress={() => console.log("Movies tab")}
            />
            <Appbar.Content 
                title="TV Shows" 
                titleStyle={styles.textStyle} 
                onPress={() => console.log("TV tab")}
            />
            <Appbar.Content 
                title="Books" 
                titleStyle={styles.textStyle} 
                onPress={() => console.log("Books tab")}
            />
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#000',
        margin: 3,
        paddingVertical: 3,
        borderRadius: 15,
        textAlign: 'center'
    },
});

export default ListFilters;