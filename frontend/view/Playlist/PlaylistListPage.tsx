import React, {useEffect, useState} from 'react';
import {usePlaylistContext} from "../../context/PlaylistContext";
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Modal} from "react-native";
import SinglePlaylist from "./SinglePlaylist";
import mockPlaylists from "../../models/IPlaylist";
import {SearchBar} from "react-native-elements";

const PlaylistListPage: React.FC = () => {
    const {playlists, setPlaylists} = usePlaylistContext();
    const [searchString, setSearchString] = useState<string>("");
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [newPlaylistName, setNewPlaylistName] = useState<string>("");

    useEffect(() => {
        setPlaylists(mockPlaylists);
    }, []);

    const updateSearch = (search: string) => {
        setSearchString(search);
        const filteredPlaylists = mockPlaylists.filter(playlist =>
            playlist.name.toLowerCase().includes(search.toLowerCase())
        );
        setPlaylists(filteredPlaylists);
    };

    const createNewPlaylist = () => {
        if (!newPlaylistName.trim()) return;

        const newPlaylist = {
            id: (playlists?.length || 0 + 1).toString(),  // Assuming id is a string
            name: newPlaylistName,
            songs: [],
        };

        setPlaylists([...(playlists || []), newPlaylist]);
        setNewPlaylistName("");
        setModalVisible(false);
    };

    return (
        <SafeAreaView>
            <SearchBar
                placeholder="Search Playlists"
                onChangeText={updateSearch}
                value={searchString}
            />
            <ScrollView>
                {playlists?.map(playlist => (
                    <SinglePlaylist key={playlist.id} playlist={playlist} />
                ))}
            </ScrollView>
            <Button title="Create new playlist" onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Create New Playlist</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Playlist Name"
                        value={newPlaylistName}
                        onChangeText={setNewPlaylistName}
                    />
                    <Button title="Add Playlist" onPress={createNewPlaylist} />
                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        width: '80%',
    }
});

export default PlaylistListPage;
