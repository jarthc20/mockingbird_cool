import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ISong } from "../../models/ISong";
import {usePlaylistContext} from "../../context/PlaylistContext";

interface SingleSongProps {
    singleSong: ISong;
    showAdd: boolean;
}

const SingleSong: React.FC<SingleSongProps> = ({ singleSong, showAdd }) => {
    const { selectedPlaylist, setSelectedPlaylist , setPlaylists, playlists} = usePlaylistContext();
    const [isInPlaylist, setIsInPlaylist] = useState<boolean>(false);


    useEffect(() => {
        if (selectedPlaylist) {
            const songInPlaylist = selectedPlaylist.songs.includes(singleSong._id.toString());
            setIsInPlaylist(songInPlaylist);
        }
    }, [selectedPlaylist, singleSong]);

    const handleOnClick = () => {
        if (!selectedPlaylist) return;

        const updatedSongs = isInPlaylist
            ? selectedPlaylist.songs.filter(songId => songId !== singleSong._id.toString())
            : [...selectedPlaylist.songs, singleSong._id.toString()];

        const updatedPlaylist = { ...selectedPlaylist, songs: updatedSongs };

        setSelectedPlaylist(updatedPlaylist);

        // Update the list of playlists
        if (playlists) {
            const updatedPlaylists = playlists.map(playlist =>
                playlist.id === updatedPlaylist.id ? updatedPlaylist : playlist
            );
            setPlaylists(updatedPlaylists);
        }

        setIsInPlaylist(!isInPlaylist);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnClick}>
                {isInPlaylist ? (
                    <FontAwesome name="check" size={24} color="green" style={styles.icon} />
                ) : (
                    <FontAwesome name="plus" size={24} color="black" style={styles.icon} />
                )}
            </TouchableOpacity>
            <View style={styles.info}>
                <Text style={styles.text}>{singleSong.songname}</Text>
                <Text style={styles.text}>{singleSong.authorname}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    icon: {
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default SingleSong;
