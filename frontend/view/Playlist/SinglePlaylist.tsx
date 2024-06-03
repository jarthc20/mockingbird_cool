import React from 'react';
import {IPlaylist} from "../../models/IPlaylist";
import {Image, View, Text} from "react-native";
import {usePlaylistContext} from "../../context/PlaylistContext";

interface SinglePlaylistProps{
    playlist: IPlaylist
}


const SinglePlaylist:React.FC<SinglePlaylistProps> = ({playlist}) => {
    const {selectedPlaylist,setSelectedPlaylist} = usePlaylistContext();

    const handleOnClick = () => {
        setSelectedPlaylist(playlist);
    };

    return (
        <View>
            <Text onPress={handleOnClick}>{playlist.name}</Text>
            <Image source={require("../../assets/favicon.png")}/>
        </View>
    );
};

export default SinglePlaylist;