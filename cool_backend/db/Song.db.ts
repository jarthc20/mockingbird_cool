import {mockdataSongs} from "../mockdata/mockdataSongs";
import {IStation} from "../src/common/IStation";
import e from "express";
import {Song} from "./Song.model.db";
import {ISong} from "../src/common/ISong";


export const insertMockSongs = async () => {
    await Song.deleteMany();
    await Song.insertMany(mockdataSongs);
}


export const insertSong = async(song:ISong)=>{
    const newSong = new Song(song);
    await newSong.save();
}

export const getSongs = async ():Promise<ISong[]> => {
    const songsCool = await Song.find();
    return songsCool;
}

export const getSongsByPlaylistId = async (playlist:string):Promise<ISong[]> => {
    const songsRe = await getSongs().then(songs => songs.filter(song=> song.playlist === playlist));
    return songsRe;
}


export const addSongToPlaylist = async (song:string,playlist:string|undefined):Promise<ISong|null> => {
    const songsRe = await Song.findByIdAndUpdate(song,{playlist:playlist});
    return songsRe;
}

