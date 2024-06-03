import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import {usePlaylistContext} from "../../context/PlaylistContext";
import PlaylistListPage from "./PlaylistListPage";

const Playlists = () => {
    const {selectedPlaylist,setSelectedPlaylist} = usePlaylistContext();



    return (
        <ScrollView>
            <Text>{selectedPlaylist?.name}</Text>
            <Text>Welcome to Playlists</Text>
            <PlaylistListPage/>
        </ScrollView>
    );
};

export default Playlists;
