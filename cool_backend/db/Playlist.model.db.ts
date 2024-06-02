import * as mongoose from "mongoose";
import {IStation} from "../src/common/IStation";
import {ISong} from "../src/common/ISong";
import {IPlaylist} from "../src/common/IPlaylist";
import {Song, SongsSchema} from "./Song.model.db";


export const PlaylistSchema = new mongoose.Schema<IPlaylist>(
    {
        name: String,
        desc: String
    }
);

export const Playlist = mongoose.model('Playlist', PlaylistSchema);