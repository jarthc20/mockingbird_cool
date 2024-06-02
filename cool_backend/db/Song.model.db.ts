import * as mongoose from "mongoose";
import {IStation} from "../src/common/IStation";
import {ISong} from "../src/common/ISong";


export const SongsSchema = new mongoose.Schema<ISong>(
    {
        songName: String,
        authorName: String,
        src: String,
        playlist: String
    }
);

export const Song = mongoose.model('Song', SongsSchema);