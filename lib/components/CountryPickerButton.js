"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryPickerButton = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles_1 = require("../constants/styles");
var CountryPickerButton = function (_a) {
    var country = _a.country, isError = _a.isError, errorTextColor = _a.errorTextColor, onPress = _a.onPress;
    return (<react_native_1.TouchableOpacity style={[
            styles.container,
            { borderRightColor: isError ? errorTextColor : styles_1.DEFAULT_COLORS.border }
        ]} onPress={onPress}>
    <react_native_1.Text style={styles.flag}>{country.emoji}</react_native_1.Text>
    <react_native_1.Text style={[
            styles.countryCode,
            isError && { color: errorTextColor }
        ]}>
      {country.dial_code}
    </react_native_1.Text>
  </react_native_1.TouchableOpacity>);
};
exports.CountryPickerButton = CountryPickerButton;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        borderRightWidth: 1,
        borderRightColor: styles_1.DEFAULT_COLORS.border,
    },
    flag: {
        fontSize: 20,
        marginRight: 5,
    },
    countryCode: {
        fontSize: 16,
        color: styles_1.DEFAULT_COLORS.text,
    },
});
