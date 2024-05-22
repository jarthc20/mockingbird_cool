import React from 'react';
import {ISong} from "../models/ISong";
import {View, Text, Button} from "react-native";

interface SingleSongProps{
    singleSong: ISong
    showAdd: boolean
}


const SingleSong: React.FC<SingleSongProps> = ({singleSong, showAdd}) => {
    return (
        <View>
            {
                showAdd ?
                    <Button title={"Add to playlist"}/>
                    :
                    <Button title={"deleteFromPlaylist"}/>
            }
            <Text>{singleSong._id}</Text>
            <Text>{singleSong.authorname}</Text>
            <Text>{singleSong.songname}</Text>
        </View>
    );
};

export default SingleSong;