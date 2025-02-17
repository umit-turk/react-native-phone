"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryListItem = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles_1 = require("../constants/styles");
var CountryListItem = function (_a) {
    var item = _a.item, onSelect = _a.onSelect, nameStyle = _a.nameStyle, dialCodeStyle = _a.dialCodeStyle;
    return (<react_native_1.TouchableOpacity style={styles.container} onPress={function () { return onSelect(item); }}>
    <react_native_1.Text style={styles.emoji}>{item.emoji}</react_native_1.Text>
    <react_native_1.Text style={[styles.name, nameStyle]}>{item.name}</react_native_1.Text>
    <react_native_1.Text style={[styles.dialCode, dialCodeStyle]}>{item.dial_code}</react_native_1.Text>
  </react_native_1.TouchableOpacity>);
};
exports.CountryListItem = CountryListItem;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    emoji: {
        fontSize: 20,
        marginRight: 10,
    },
    name: {
        flex: 1,
        fontSize: 16,
    },
    dialCode: {
        fontSize: 16,
        color: styles_1.DEFAULT_COLORS.text,
    },
});
