import React, { createContext, useContext, useState, useEffect } from 'react';
import { IPlaylist } from '../models/IPlaylist';
import { getAllPlaylistAPI } from "../api_access/API_Access";

interface PlaylistContextProps {
    playlists: IPlaylist[] | undefined;
    selectedPlaylist: IPlaylist | undefined;
    setPlaylists: (playlists: IPlaylist[] | undefined) => void;
    setSelectedPlaylist: (playlist: IPlaylist | undefined) => void;
}

const PlaylistContext = createContext<PlaylistContextProps>({
    playlists: undefined,
    selectedPlaylist: undefined,
    setPlaylists: () => {},
    setSelectedPlaylist: () => {},
});

export const usePlaylistContext = () => {
    const context = useContext(PlaylistContext);
    if (!context) {
        throw new Error("usePlaylistContext must be used within a PlaylistContextProvider");
    }
    return context;
};

interface PlaylistProviderProps {
    children: React.ReactNode;
}

const PlaylistContextProvider: React.FC<PlaylistProviderProps> = ({ children }) => {
    const [playlists, setPlaylists] = useState<IPlaylist[]>();
    const [selectedPlaylist, setSelectedPlaylist] = useState<IPlaylist | undefined>(undefined);

    const handleSetPlaylists = (newPlaylists: IPlaylist[] | undefined) => {
        setPlaylists(newPlaylists);
    };

    const handleSetSelectedPlaylist = (playlist: IPlaylist | undefined) => {
        setSelectedPlaylist(playlist);
    };

    useEffect(() => {
        const fetchPlaylists = async () => {
            const fetchedPlaylists = await getAllPlaylistAPI();
            setPlaylists(fetchedPlaylists);
        };

        fetchPlaylists();
    }, []);

    return (
        <PlaylistContext.Provider
            value={{
                playlists,
                selectedPlaylist,
                setPlaylists: handleSetPlaylists,
                setSelectedPlaylist: handleSetSelectedPlaylist,
            }}
        >
            {children}
        </PlaylistContext.Provider>
    );
};

export default PlaylistContextProvider;
