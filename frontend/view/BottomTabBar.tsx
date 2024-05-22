import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import Home from "./Home";
import Songs from "./Songs";
import Playlists from "./Playlists";



const BottomTabBar = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>

            <Tab.Screen name={"Home"} component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Image source={require('../assets/favicon.png')} style={{width:30, height:30}}/>
                )
            }}/>

            <Tab.Screen name={"Songs"} component={Songs} options={{
                tabBarLabel: 'Songs',
                tabBarIcon: () => (
                    <Image source={require('../assets/splash.png')} style={{width:30, height:30}}/>
                )
            }}/>

            <Tab.Screen name={"Playlists"} component={Playlists} options={{
                tabBarLabel: 'Playlists',
                tabBarIcon: () => (
                    <Image source={require('../assets/adaptive-icon.png')} style={{width:30, height:30}}/>
                )
            }}/>

        </Tab.Navigator>
    );
};

export default BottomTabBar;