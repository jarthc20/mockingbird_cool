import {mockdataPlaylist, mockdataSongs} from "../mockdata/mockdataSongs";
import {IStation} from "../src/common/IStation";
import e from "express";
import {Song} from "./Song.model.db";
import {ISong} from "../src/common/ISong";
import {IPlaylist} from "../src/common/IPlaylist";
import {Playlist, PlaylistSchema} from "./Playlist.model.db";


export const insertMockPlaylist = async () => {
    await Playlist.deleteMany();
    await Playlist.insertMany(mockdataPlaylist);
}


export const insertPlaylist = async(playlist:IPlaylist)=>{
    const newPlaylist = new Playlist(playlist);
    await newPlaylist.save();
}

export const getPlaylist = async ():Promise<IPlaylist[]> => {
    const playlistsCool = await Playlist.find();
    return playlistsCool;
}

/*export const addSongToPlaylist = async (songId:string,playlistId:string):Promise<IPlaylist> => {
    let newVar = await Playlist.findById(playlistId).exec();
}

 */