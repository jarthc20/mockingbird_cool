import React, { useEffect, useState } from 'react';
import { usePlaylistContext } from "../../context/PlaylistContext";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Modal } from "react-native";
import SinglePlaylist from "./SinglePlaylist";
import { SearchBar } from "react-native-elements";
import { addPlaylistAPI, getAllPlaylistAPI } from "../../api_access/API_Access";

const PlaylistListPage: React.FC = () => {
    const { playlists, setPlaylists } = usePlaylistContext();
    const [searchString, setSearchString] = useState<string>("");
    const [filteredPlaylists, setFilteredPlaylists] = useState(playlists || []);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [newPlaylistName, setNewPlaylistName] = useState<string>("");
    const [newPlaylistDescription, setNewPlaylistDescription] = useState<string>("");

    useEffect(() => {
        getAllPlaylistAPI(false)
            .then(data => {
                setPlaylists(data);
                setFilteredPlaylists(data);
            });
    }, []);

    useEffect(() => {
        // Apply search filter whenever playlists are updated
        if (searchString) {
            updateSearch(searchString);
        } else {
            setFilteredPlaylists(playlists);
        }
    }, [playlists]);

    const updateSearch = (search: string) => {
        setSearchString(search);
        const filtered = playlists?.filter(playlist =>
            playlist.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPlaylists(filtered || []);
    };

    const createNewPlaylist = () => {
        if (!newPlaylistName.trim()) return;

        const newPlaylist = {

        name: newPlaylistName,
            desc: newPlaylistDescription
    };
        addPlaylistAPI(false, newPlaylist)
            .then(() => {
                setPlaylists([...(playlists || []), newPlaylist]);
                setFilteredPlaylists([...(filteredPlaylists || []), newPlaylist]);
            });

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
                {filteredPlaylists?.map(playlist => (
                    <SinglePlaylist key={playlist._id} playlist={playlist} />
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
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={newPlaylistDescription}
                        onChangeText={setNewPlaylistDescription}
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
