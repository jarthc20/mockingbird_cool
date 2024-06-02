"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSongToPlaylist = exports.getSongsByPlaylistId = exports.getSongs = exports.insertSong = exports.insertMockSongs = void 0;
const mockdataSongs_1 = require("../mockdata/mockdataSongs");
const Song_model_db_1 = require("./Song.model.db");
const insertMockSongs = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Song_model_db_1.Song.deleteMany();
    yield Song_model_db_1.Song.insertMany(mockdataSongs_1.mockdataSongs);
});
exports.insertMockSongs = insertMockSongs;
const insertSong = (song) => __awaiter(void 0, void 0, void 0, function* () {
    const newSong = new Song_model_db_1.Song(song);
    yield newSong.save();
});
exports.insertSong = insertSong;
const getSongs = () => __awaiter(void 0, void 0, void 0, function* () {
    const songsCool = yield Song_model_db_1.Song.find();
    return songsCool;
});
exports.getSongs = getSongs;
const getSongsByPlaylistId = (playlist) => __awaiter(void 0, void 0, void 0, function* () {
    const songsRe = yield (0, exports.getSongs)().then(songs => songs.filter(song => song.playlist === playlist));
    return songsRe;
});
exports.getSongsByPlaylistId = getSongsByPlaylistId;
const addSongToPlaylist = (song, playlist) => __awaiter(void 0, void 0, void 0, function* () {
    const songsRe = yield Song_model_db_1.Song.findByIdAndUpdate(song, { playlist: playlist });
    return songsRe;
});
exports.addSongToPlaylist = addSongToPlaylist;
