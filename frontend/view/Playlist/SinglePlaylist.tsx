import React, { useState, useEffect } from 'react';
import { IPlaylist } from "../../models/IPlaylist";
import { ISong } from "../../models/ISong";
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { usePlaylistContext } from "../../context/PlaylistContext";
import {getSongsByPlaylistIdAPI} from "../../api_access/API_Access";

interface SinglePlaylistProps {
    playlist: IPlaylist
}

const SinglePlaylist: React.FC<SinglePlaylistProps> = ({ playlist }) => {
    const { selectedPlaylist, setSelectedPlaylist } = usePlaylistContext();
    const [modalVisible, setModalVisible] = useState(false);
    const [songs, setSongs] = useState<ISong[]>([]);
    const [loading, setLoading] = useState(false);

    const handleOnClick = () => {
        setSelectedPlaylist(playlist);
    };

    const handleDescriptionPress = async () => {
        setModalVisible(true);
        setLoading(true);
        const fetchedSongs = await getSongsByPlaylistIdAPI(false, playlist._id);
        setSongs(fetchedSongs || []);
        setLoading(false);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSongs([]);
    };

    return (
        <View>
            <View style={styles.row}>
                <Text onPress={handleOnClick} style={styles.playlistName}>{playlist.name}</Text>
                <TouchableOpacity onPress={handleDescriptionPress} style={styles.blackButton}>
                    <Text style={styles.buttonText}>Description</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}> About the playlist: <br/>{playlist.desc}</Text>
                        {loading ? (
                            <Text>Loading...</Text>
                        ) : (
                            <FlatList
                                data={songs}
                                renderItem={({ item }) => (
                                    <Text style={styles.songItem}>{item.songName} by {item.authorName}</Text>
                                )}
                            />
                        )}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#1ED760',
        margin: 10,
        display: "flex",
        gap: 5,
        borderRadius: 10
    },
    playlistName: {
        flex: 1,
        marginRight: 10,
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
        maxHeight: '80%'
    },
    blackButton: {
        backgroundColor: "black",
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    closeButton: {
        backgroundColor: "black",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 15,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    songItem: {
        padding: 10,
        fontSize: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export default SinglePlaylist;
