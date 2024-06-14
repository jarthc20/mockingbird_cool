import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { usePlaylistContext } from "../context/PlaylistContext";

const Home: React.FC = () => {
    const { playlists, selectedPlaylist } = usePlaylistContext();
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.playlistName}>{selectedPlaylist?.name}</Text>
            <Text style={styles.welcomeText}>Welcome to Mockingbird</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Playlists')}
            >
                <Text style={styles.buttonText}>Go to your Playlists</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Songs')}
            >
                <Text style={styles.buttonText}>Search Songs</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    playlistName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1ED760',
    },
    button: {
        backgroundColor: '#1ED760',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Home;
