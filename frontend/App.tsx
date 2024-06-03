import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabBar from "./view/BottomTabBar";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./view/Home";
import Playlists from "./view/Playlist/Playlists";
import PlaylistContext from "./context/PlaylistContext";
import PlaylistContextProvider from "./context/PlaylistContext";

export default function App() {

    const Stack = createStackNavigator();


    return (
        <PlaylistContextProvider>
            <NavigationContainer>
                <BottomTabBar/>
            </NavigationContainer>
        </PlaylistContextProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});


