import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Date extends React.Component {
    render() {
        return (
            <View style={styles.date}>
                <View style={styles.top}>
                    <Text>From Shu With Love</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    date: {
        width: '100%',
        height: '70%',
        backgroundColor: '#8360c3',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 2
    },
    top: {
        height: '10%',
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});