import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ISong } from "../../models/ISong";
import { usePlaylistContext } from "../../context/PlaylistContext";
import {useNavigation} from "@react-navigation/native";
import songs from "./Songs";

interface SingleSongProps {
    singleSong: ISong;
    showAdd: boolean;
}

const SingleSong: React.FC<SingleSongProps> = ({ singleSong, showAdd }) => {
    const { selectedPlaylist } = usePlaylistContext();
    const [isInPlaylist, setIsInPlaylist] = useState<boolean>(false);
    const navigation = useNavigation();


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

            singleSong.playlist = undefined;
        } else {

            singleSong.playlist = selectedPlaylist._id;
        }

        setIsInPlaylist(!isInPlaylist);
    };

    const handleClickOnSong = () => {
        if (singleSong.src) {
            Linking.openURL(singleSong.src).catch(err => console.error("Couldn't load page", err));
        }
    }

    return (
        <TouchableOpacity onPress={handleClickOnSong}>
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
        </TouchableOpacity>
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
