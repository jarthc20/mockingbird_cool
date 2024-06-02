"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Home = function () {
    var handleGoToPlaylists = function () {
        window.location.href = 'Playlists.tsx';
    };
    return (<react_native_1.ScrollView>
            <react_native_1.Text>Welcome to Mockingbird</react_native_1.Text>
            <react_native_1.Button title={"Go to your Playlists"} onPress={handleGoToPlaylists}/>
        </react_native_1.ScrollView>);
};
exports.default = Home;
