import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Avatar extends React.Component {
    render() {
        return (
            <View style={styles.avatar}>
                <View style={styles.avatarMale}>
                </View>
                <View style={styles.loveFlower}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={styles.loveTopLeft}>
                        </View>
                        <View style={styles.loveBottomLeft}>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <View style={styles.loveTopRight}>
                        </View>
                        <View style={styles.loveBottomRight}>
                        </View>
                    </View>
                </View>
                <View style={styles.avatarFemale}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: '100%',
        height: '30%',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarMale: {
        width: 100,
        height: 100,
        borderRadius: 10000,
        backgroundColor: '#8360c3',
        marginRight: 50,
        marginBottom: 250,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 2
    },
    avatarFemale: {
        width: 100,
        height: 100,
        borderRadius: 10000,
        backgroundColor: '#8360c3',
        marginLeft: 50,
        marginBottom: 250,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 2
    },
    loveTopLeft: {
        width: 50,
        height: 50,
        backgroundColor: '#8360c3',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100
    },
    loveBottomLeft: {
        width: 50,
        height: 50,
        backgroundColor: '#8360c3',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100
    },
    loveTopRight: {
        width: 50,
        height: 50,
        backgroundColor: '#8360c3',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100
    },
    loveBottomRight: {
        width: 50,
        height: 50,
        backgroundColor: '#8360c3',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100
    },
    loveFlower: {
        flexDirection: 'row',
        marginBottom: 200
    }
});