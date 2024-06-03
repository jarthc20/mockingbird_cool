import React from 'react';
import {Button, FlatList, ScrollView, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Playlists from "./Playlist/Playlists";
import Songs from "./Song/Songs";
import {usePlaylistContext} from "../context/PlaylistContext";

const Home = ({navigation}) => {
    const {playlists,selectedPlaylist, setSelectedPlaylist, setPlaylists} = usePlaylistContext();
    

    return (
        <ScrollView>
            <Text>{selectedPlaylist?.name}</Text>
            <Text>Welcome to Mockingbird</Text>
            <Button title={"Go to your Playlists"} onPress={() => navigation.navigate(Playlists)}/>
            <Button title={"Search Songs"} onPress={() => navigation.navigate(Songs)}/>
        </ScrollView>
    );
};

export default Home;