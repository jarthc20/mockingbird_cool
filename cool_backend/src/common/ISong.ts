import {IPlaylist} from "./IPlaylist";

export interface ISong {
    songName: string,
    authorName: string,
    playlist: string | undefined
    src: string
}