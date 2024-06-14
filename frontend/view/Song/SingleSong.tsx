import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ISong } from "../../models/ISong";
import { usePlaylistContext } from "../../context/PlaylistContext";

interface SingleSongProps {
    singleSong: ISong;
    showAdd: boolean;
}

const SingleSong: React.FC<SingleSongProps> = ({ singleSong, showAdd }) => {
    const { selectedPlaylist } = usePlaylistContext();
    const [isInPlaylist, setIsInPlaylist] = useState<boolean>(false);

    useEffect(() => {
        if (selectedPlaylist) {
            setIsInPlaylist(singleSong.playlist === selectedPlaylist._id);
        } else {
            setIsInPlaylist(false);
        }
    }, [selectedPlaylist, singleSong]);

    const handleOnClick = () => {
        if (!selectedPlaylist || !selectedPlaylist._id) return;

        if (isInPlaylist) {
            // Assuming there is an API or state management function to remove the song from the playlist
            // For example: updateSongPlaylist(singleSong._id, null);
            singleSong.playlist = undefined; // You will likely have to update this in your actual data store
        } else {
            // Assuming there is an API or state management function to add the song to the playlist
            // For example: updateSongPlaylist(singleSong._id, selectedPlaylist._id);
            singleSong.playlist = selectedPlaylist._id; // You will likely have to update this in your actual data store
        }

        setIsInPlaylist(!isInPlaylist);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnClick}>
                {isInPlaylist ? (
                    <FontAwesome name="minus" size={24} color="red" style={styles.icon} />
                ) : (
                    <FontAwesome name="plus" size={24} color="black" style={styles.icon} />
                )}
            </TouchableOpacity>
            <View style={styles.info}>
                <Text style={styles.text}>{singleSong.songName}</Text>
                <Text style={styles.subText}>{singleSong.authorName}</Text>
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
        backgroundColor: '#1ED760',
        borderRadius: 10,
        marginVertical: 5,
    },
    icon: {
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        color: 'black',
    },
});

export default SingleSong;
