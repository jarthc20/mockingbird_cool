import React from 'react';
import {Button, ScrollView, Text} from "react-native";

const Home = () => {

    const handleGoToPlaylists = () => {
        window.location.href = 'Playlists.tsx';
    }

    return (
        <ScrollView>
            <Text>Welcome to Mockingbird</Text>
            <Button title={"Go to your Playlists"} onPress={handleGoToPlaylists}/>
        </ScrollView>
    );
};

export default Home;