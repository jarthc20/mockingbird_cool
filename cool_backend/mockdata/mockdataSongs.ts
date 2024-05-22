import {IStation} from "../src/common/IStation";
import {ISong} from "../src/common/ISong";
import {IPlaylist} from "../src/common/IPlaylist";

export const mockdataSongs: ISong[] = [
    {
        "songName": "Hello",
        "authorName": "Adelle"
    },
    {
        "songName": "Cool",
        "authorName": "test"
    }, {
        "songName": "Cool2",
        "authorName": "teste"
    }, {
        "songName": "Cool3",
        "authorName": "teest"
    }, {
        "songName": "Cool4",
        "authorName": "delle"
    }, {
        "songName": "wdaw",
        "authorName": "wdawdwd"
    }, {
        "songName": "adddddd",
        "authorName": "coool"
    }, {
        "songName": "ddwad",
        "authorName": "Adelle"
    }, {
        "songName": "wadddddd",
        "authorName": "Adelle"
    }, {
        "songName": "wat is sis",
        "authorName": "Adelle"
    }, {
        "songName": "ich bin cool",
        "authorName": "Adelle"
    }
]

export const mockdataPlaylist: IPlaylist[] = [
    {
        "name": "Hello",
        "songs": [
            "664de19b656c008ede796364","664de19b656c008ede796363"
        ]
    },
    {
        "name": "Cool",
        "songs": [
        ]
    },
]