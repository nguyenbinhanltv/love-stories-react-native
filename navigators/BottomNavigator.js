import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens
import Home from '../screens/HomeScreen';
import Settings from '../screens/SettingsScreen';
import Stories from '../screens/StoriesScreen';

//Color
import { activeColor, inactiveColor, backgroundColor } from './color';

const Tab = createMaterialBottomTabNavigator();

const barStyle = {
    backgroundColor: backgroundColor,
};

const homeIcon = ({ color }) => (
    <MaterialCommunityIcons name="home" color={color} size={25} />
);

const storiesIcon = ({ color }) => (
    <MaterialCommunityIcons name="book" color={color} size={25} />
);

const settingsIcon = ({ color }) => (
    <MaterialCommunityIcons name="settings" color={color} size={25} />
);

export default class BottomNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator
            initialRouteName="Home"
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            shifting={true}
            labeled={false}
            barStyle={barStyle}>
                <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: homeIcon,
                    tabBarColor: backgroundColor
                }}/>
                <Tab.Screen
                name="Stories"
                component={Stories}
                options={{
                    tabBarIcon: storiesIcon,
                    tabBarColor: activeColor
                }}/>
                <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: settingsIcon,
                    tabBarColor: backgroundColor
                }}/>
            </Tab.Navigator>
        );
    }
};