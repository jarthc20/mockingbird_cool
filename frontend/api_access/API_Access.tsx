import axios from "axios";
import {ISong} from "../models/ISong";
import {IPlaylist} from "../models/IPlaylist";
import {ICreatePlaylist} from "../models/ICreatePlaylist";


const BASE_URL = 'http://localhost:30000/songs';
const PLAYLIST_URL = 'http://localhost:30000/playlists';

const createCancelToken = (shouldCancel: boolean) =>
    shouldCancel ? axios.CancelToken.source().token : undefined;

const handleCancelError = (error: any) =>
    axios.isCancel(error) ? console.log('Request canceled:', error.message) : console.error(error);

export const getAllSongsAPI = async (cancel = false, param?: string) => {
    try {
        const response = await axios.get<ISong[]>(`${BASE_URL}/all${param || ''}`, {
            cancelToken: createCancelToken(cancel)
        });
        return response.data;
    } catch (error) {
        console.error(`Error matches: ${error}`);
    }
}


export const getAllPlaylistAPI = async (cancel = false, param?: string) => {
    try {
        const response = await axios.get<IPlaylist[]>(`${PLAYLIST_URL}/all${param || ''}`, {
            cancelToken: createCancelToken(cancel)
        });
        return response.data;
    } catch (error) {
        console.error(`Error matches: ${error}`);
    }
}


export const addPlaylistAPI = async (cancel = false, playlist: ICreatePlaylist) => {
    try {
        const config = { cancelToken: createCancelToken(cancel) };
        const response = await axios.post<IPlaylist>(`${PLAYLIST_URL}/`, playlist, config);
        return response.data;
    } catch (error) {
        handleCancelError(error);
    }
};


export const getSongsByPlaylistIdAPI = async (cancel = false, playlistId: string | undefined) => {
    try {
        const response = await axios.get<ISong[]>(`${BASE_URL}/all?byPlaylist=${playlistId}`, {
            cancelToken: createCancelToken(cancel)
        });
        return response.data;
    } catch (error) {
        console.error(`Error matches: ${error}`);
        return undefined;
    }
}
