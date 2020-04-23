import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class StoriesScreen extends React.Component {
    render() {
        return (
            <View style={styles.stories}>
                <Text>Stories Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stories: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});