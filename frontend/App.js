"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var BottomTabBar_1 = require("./view/BottomTabBar");
var native_1 = require("@react-navigation/native");
function App() {
    return (<native_1.NavigationContainer>
        <BottomTabBar_1.default />
      </native_1.NavigationContainer>);
}
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
