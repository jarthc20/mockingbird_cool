export interface ISong {
    _id: number;
    songname: string;
    authorname: string;
    spotifyUrl: string;
}

export const mockSongs: ISong[] = [
    { _id: 1, songname: "Bohemian Rhapsody", authorname: "Queen", spotifyUrl: "https://spotify.com/track/1" },
    { _id: 2, songname: "Stairway to Heaven", authorname: "Led Zeppelin", spotifyUrl: "https://spotify.com/track/2" },
    { _id: 3, songname: "Hotel California", authorname: "Eagles", spotifyUrl: "https://spotify.com/track/3" },
    { _id: 4, songname: "Imagine", authorname: "John Lennon", spotifyUrl: "https://spotify.com/track/4" },
];
