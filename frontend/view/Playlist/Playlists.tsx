import React from 'react';
import {ScrollView, Text, FlatList, StyleSheet} from 'react-native';
import {usePlaylistContext} from "../../context/PlaylistContext";
import PlaylistListPage from "./PlaylistListPage";

const Playlists = () => {
    const {selectedPlaylist,setSelectedPlaylist} = usePlaylistContext();

    return (
        <ScrollView>
            <Text style={styles.selected}>Selected Playlist: {selectedPlaylist? selectedPlaylist.name : "No Playlist selected"}</Text>
            <PlaylistListPage/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    selected: {
        fontSize: 20,
        color: '#1ED760'
    }

});

export default Playlists;
