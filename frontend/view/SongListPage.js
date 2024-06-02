"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var SingleSong_1 = require("./SingleSong");
var SongListPage = function (_a) {
    var songList = _a.songList;
    return (<react_native_1.SafeAreaView>
            <react_native_1.ScrollView>
                {songList.map(function (song) { return (<SingleSong_1.default key={song._id} singleSong={song} showAdd={true}/>); })}
            </react_native_1.ScrollView>
        </react_native_1.SafeAreaView>);
};
exports.default = SongListPage;
