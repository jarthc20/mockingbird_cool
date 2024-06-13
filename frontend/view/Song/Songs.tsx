import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text} from "react-native";
import SongListPage from "./SongListPage";
import {ISong, mockSongs} from "../../models/ISong";
import {SearchBar} from "react-native-elements";
import {usePlaylistContext} from "../../context/PlaylistContext";
import {getAllSongsAPI} from "../../api_access/API_Access";

const Songs = () => {
    const [songs, setSongs] = useState<ISong[]>(mockSongs);
    const [searchString, setSearchString] = useState<String>("");
    const {selectedPlaylist,setSelectedPlaylist, playlists} = usePlaylistContext();

    useEffect(() => {
        setNewSongs();
    }, []);

    const setNewSongs = () => {
        getAllSongsAPI(false)
            .then(data => {
                if (data) {
                    setSongs(data);
                }
            });
    }

    return (
        <ScrollView>
            <Text>{selectedPlaylist?.name}</Text>
            <Text>Welcome to Songs</Text>

            <SongListPage songList={songs} />
        </ScrollView>
    );
};

export default Songs;