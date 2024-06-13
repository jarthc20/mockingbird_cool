export interface ISong {
    _id: number;
    songName: string;
    authorName: string;
    playlist: string|undefined
    src: string;
}

export const mockSongs: ISong[] = [
    { _id: 1, songName: "Bohemian Rhapsody", authorName: "Queen", playlist: undefined,src: "https://spotify.com/track/1" },
    { _id: 2, songName: "Stairway to Heaven", authorName: "Led Zeppelin",playlist: undefined, src: "https://spotify.com/track/2" },
    { _id: 3, songName: "Hotel California", authorName: "Eagles",playlist: undefined, src: "https://spotify.com/track/3" },
    { _id: 4, songName: "Imagine", authorName: "John Lennon", playlist: undefined,src: "https://spotify.com/track/4" },
];
