export interface IPlaylist {
    _id?: string|undefined,
    name: string,
    desc: string,
}


const mockPlaylists: IPlaylist[] = [
    { _id: '1', name: 'Favorites', desc: "Hallo"},
    { _id: '2', name: 'Chill Hits', desc: "HELLO"},
];



export default mockPlaylists;