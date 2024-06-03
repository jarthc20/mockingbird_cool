import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { ISong } from "../../models/ISong";
import SingleSong from "./SingleSong";
import { usePlaylistContext } from "../../context/PlaylistContext";

interface SongListProps {
    songList: ISong[];
}

const SongListPage: React.FC<SongListProps> = ({ songList }) => {
    const { playlists, selectedPlaylist } = usePlaylistContext();

    const isInPlaylist = (songId: string): boolean => {
        if (!selectedPlaylist) return false;

        /*for (const playlist of playlists) {
            if (playlist.songs.includes(songId)) {
                return true;
            }
        }*/

        if (selectedPlaylist.songs.includes(songId))
            return true;
        return false;
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {songList.map(song => (
                    <SingleSong
                        key={song._id}
                        singleSong={song}
                        showAdd={isInPlaylist(song._id.toString())}
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
});

export default SongListPage;
