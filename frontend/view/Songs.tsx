import React, {useState} from 'react';
import {ScrollView, Text} from "react-native";
import SongListPage from "./SongListPage";
import {ISong, mockSongs} from "../models/ISong";
import {SearchBar} from "react-native-elements";

const Songs = () => {
    const [songs, setSongs] = useState<ISong[]>(mockSongs);
    const [searchString, setSearchString] = useState<String>("");

    const updateSearch = (search: string) => {
        setSearchString(search);
        const filteredSongs = mockSongs.filter(song =>
            song.songname.toLowerCase().includes(search.toLowerCase()) ||
            song.authorname.toLowerCase().includes(search.toLowerCase())
        );
        setSongs(filteredSongs);
    }

    return (
        <ScrollView>
            <Text>Welcome to Songs</Text>
            <SearchBar
                placeholder="Test"
                onChangeText={updateSearch}
                value={searchString}
            />
            <SongListPage songList={songs} />
        </ScrollView>
    );
};

export default Songs;