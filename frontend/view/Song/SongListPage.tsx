import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { ISong } from "../../models/ISong";
import SingleSong from "./SingleSong";
import { usePlaylistContext } from "../../context/PlaylistContext";

interface SongListProps {
    songList: ISong[];
}

const SongListPage: React.FC<SongListProps> = ({ songList }) => {
    const { selectedPlaylist } = usePlaylistContext();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const isInPlaylist = (): boolean => {
        songList.map(s => {
            if(s.playlist)
            {
                if(s.playlist == selectedPlaylist?.name)
                {
                    return true;
                }
            }

        });
        return false;
    };

    const filteredSongs = songList.filter(song =>
        song.songName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.authorName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <ScrollView style={styles.scrollView}>
                {filteredSongs.map(song => (
                    <SingleSong
                        key={song._id}
                        singleSong={song}
                        showAdd={!isInPlaylist()}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        paddingHorizontal: 10,
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 5,
    },
});

export default SongListPage;
