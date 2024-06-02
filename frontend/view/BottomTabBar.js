"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var react_native_1 = require("react-native");
var Home_1 = require("./Home");
var Songs_1 = require("./Songs");
var Playlists_1 = require("./Playlists");
var BottomTabBar = function () {
    var Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
    return (<Tab.Navigator>

            <Tab.Screen name={"Home"} component={Home_1.default} options={{
            tabBarLabel: 'Home',
            tabBarIcon: function () { return (<react_native_1.Image source={require('../assets/favicon.png')} style={{ width: 30, height: 30 }}/>); }
        }}/>

            <Tab.Screen name={"Songs"} component={Songs_1.default} options={{
            tabBarLabel: 'Songs',
            tabBarIcon: function () { return (<react_native_1.Image source={require('../assets/splash.png')} style={{ width: 30, height: 30 }}/>); }
        }}/>

            <Tab.Screen name={"Playlists"} component={Playlists_1.default} options={{
            tabBarLabel: 'Playlists',
            tabBarIcon: function () { return (<react_native_1.Image source={require('../assets/adaptive-icon.png')} style={{ width: 30, height: 30 }}/>); }
        }}/>

        </Tab.Navigator>);
};
exports.default = BottomTabBar;
