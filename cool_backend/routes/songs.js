"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Song_db_1 = require("../db/Song.db");
let router = express_1.default.Router();
router.get('/all', (request, response) => {
    const byPlaylist = request.query.byPlaylist;
    if (byPlaylist) {
        (0, Song_db_1.getSongsByPlaylistId)(byPlaylist).then(songs => response.send(songs));
    }
    else {
        (0, Song_db_1.getSongs)().then((sortedData) => {
            response.send(sortedData);
        });
    }
});
router.post('/', (request, response) => {
    const song = request.body;
    (0, Song_db_1.insertSong)(song).then(() => {
        response.location(request.url + `/${song.songName}`).status(201).send(song);
    }).catch((error) => {
        response.status(409).send(error);
    });
});
router.post('/addToPlaylist', (request, response) => {
    const song = request.body;
    const playlist = request.query.playlist;
    (0, Song_db_1.addSongToPlaylist)(song._id, playlist).then(song => {
        if (song) {
            response.status(201).send(song);
        }
        response.status(404).send();
    });
});
module.exports = router;
