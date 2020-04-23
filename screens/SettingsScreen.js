import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.settings}>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    settings: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});