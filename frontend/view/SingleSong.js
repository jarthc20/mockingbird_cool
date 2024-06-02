"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var SingleSong = function (_a) {
    var singleSong = _a.singleSong, showAdd = _a.showAdd;
    return (<react_native_1.View>
            {showAdd ?
            <react_native_1.Button title={"Add to playlist"}/>
            :
                <react_native_1.Button title={"deleteFromPlaylist"}/>}
            <react_native_1.Text>{singleSong._id}</react_native_1.Text>
            <react_native_1.Text>{singleSong.authorname}</react_native_1.Text>
            <react_native_1.Text>{singleSong.songname}</react_native_1.Text>
        </react_native_1.View>);
};
exports.default = SingleSong;
