import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//Components
import Date from '../components/Date';
import Avatar from '../components/Avatar';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Date />
                <Avatar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#ffffff'
    }
});