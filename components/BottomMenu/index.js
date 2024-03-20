import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;


const Tab = createBottomTabNavigator();

const BottomMenu = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    // tabBarShowLabel: false,
                    // tabBarActiveTintColor: 'tomato',
                    // tabBarInactiveTintColor: 'gray',
                })}
                
            >
                <Tab.Screen name="Home" component={Home} options={{
                    // tabBarLabel: "Home",
                    // tabBarVisible: true
                    }} />
                    {/* <Tab.Screen name="Profile" component={Home} options={{
                    tabBarLabel: "Profile",
                    tabBarVisible: true
                    }} /> */}
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default BottomMenu