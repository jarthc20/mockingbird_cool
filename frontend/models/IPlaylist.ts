export interface IPlaylist {
    id: string|undefined,
    name: string,
    songs: string[]|undefined
}


const mockPlaylists: IPlaylist[] = [
    { id: '1', name: 'Favorites', songs: ['1', '2'] },
    { id: '2', name: 'Chill Hits', songs: ['3', '4'] },
    // Add more mock playlists as needed
];



export default mockPlaylists;