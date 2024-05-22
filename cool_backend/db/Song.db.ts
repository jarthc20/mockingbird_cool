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