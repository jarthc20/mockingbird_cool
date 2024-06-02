"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Playlist_db_1 = require("../db/Playlist.db");
let router = express_1.default.Router();
router.get('/all', (request, response) => {
    const sortParam = request.query.sortBy;
    const filterParam = request.query.filterBy;
    (0, Playlist_db_1.getPlaylist)().then((sortedData) => {
        response.send(sortedData);
    });
});
router.post('/', (request, response) => {
    const playlist = request.body;
    (0, Playlist_db_1.insertPlaylist)(playlist).then(() => {
        response.location(request.url + `/${playlist.name}`).status(201).send(playlist);
    }).catch((error) => {
        response.status(409).send(error);
    });
});
module.exports = router;
