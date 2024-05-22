import React from 'react';
import {SafeAreaView, ScrollView} from "react-native";
import {ISong} from "../models/ISong";
import SingleSong from "./SingleSong";
import {SearchBar} from "react-native-screens";

interface SongListProps{
    songList: ISong[]
}

const SongListPage: React.FC<SongListProps> = ({songList}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                {songList.map(song => (
                    <SingleSong  key={song._id} singleSong={song} showAdd={true}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SongListPage;