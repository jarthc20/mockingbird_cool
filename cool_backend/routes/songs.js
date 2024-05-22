"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Song_db_1 = require("../db/Song.db");
let router = express_1.default.Router();
router.get('/', (request, response) => {
    const sortParam = request.query.sortBy;
    const filterParam = request.query.filterBy;
    (0, Song_db_1.getSongs)().then((sortedData) => {
        /*switch (sortParam) {
            case "name":
                sortedData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "kategorie":
                sortedData.sort((a, b) => a.kategorie.localeCompare(b.kategorie));
                break;
        }
        switch (filterParam){
            case "Berg":
                sortedData= sortedData.filter((station) => station.kategorie.includes("Berg"));
                break;
            case "Ort":
                sortedData = sortedData.filter((station) => station.kategorie.includes("Ort"));
                break;
            case "See":
                sortedData = sortedData.filter((station) => station.kategorie.includes("See"));
                break;
            case "See all":
                sortedData = sortedData;
                break;
        }

         */
        response.send(sortedData);
    });
});
router.post('/', (request, response) => {
    const song = request.body;
    (0, Song_db_1.insertSong)(song).then(() => {
        response.location(request.url + `/${song.songName}`).status(201).send(song);
    }).catch((error) => {
        response.status(409).send(error);
    });
});
module.exports = router;
