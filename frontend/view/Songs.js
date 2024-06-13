"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var SongListPage_1 = require("./SongListPage");
var ISong_1 = require("../models/ISong");
var react_native_elements_1 = require("react-native-elements");
var Songs = function () {
    var _a = (0, react_1.useState)(ISong_1.mockSongs), songs = _a[0], setSongs = _a[1];
    var _b = (0, react_1.useState)(""), searchString = _b[0], setSearchString = _b[1];
    var updateSearch = function (search) {
        setSearchString(search);
        var filteredSongs = ISong_1.mockSongs.filter(function (song) {
            return song.songName.toLowerCase().includes(search.toLowerCase()) ||
                song.authorName.toLowerCase().includes(search.toLowerCase());
        });
        setSongs(filteredSongs);
    };
    return (<react_native_1.ScrollView>
            <react_native_1.Text>Welcome to Songs</react_native_1.Text>
            <react_native_elements_1.SearchBar placeholder="Test" onChangeText={updateSearch} value={searchString}/>
            <SongListPage_1.default songList={songs}/>
        </react_native_1.ScrollView>);
};
exports.default = Songs;
