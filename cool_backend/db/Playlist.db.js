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
exports.getPlaylist = exports.insertPlaylist = exports.insertMockPlaylist = void 0;
const mockdataSongs_1 = require("../mockdata/mockdataSongs");
const Playlist_model_db_1 = require("./Playlist.model.db");
const insertMockPlaylist = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Playlist_model_db_1.Playlist.deleteMany();
    yield Playlist_model_db_1.Playlist.insertMany(mockdataSongs_1.mockdataPlaylist);
});
exports.insertMockPlaylist = insertMockPlaylist;
const insertPlaylist = (playlist) => __awaiter(void 0, void 0, void 0, function* () {
    const newPlaylist = new Playlist_model_db_1.Playlist(playlist);
    yield newPlaylist.save();
});
exports.insertPlaylist = insertPlaylist;
const getPlaylist = () => __awaiter(void 0, void 0, void 0, function* () {
    const playlistsCool = yield Playlist_model_db_1.Playlist.find();
    return playlistsCool;
});
exports.getPlaylist = getPlaylist;
/*export const addSongToPlaylist = async (songId:string,playlistId:string):Promise<IPlaylist> => {
    let newVar = await Playlist.findById(playlistId).exec();
}

 */ 
