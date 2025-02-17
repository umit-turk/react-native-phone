"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneInput = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var countries_1 = require("../data/countries");
var styles_1 = require("../constants/styles");
var CountryPickerButton_1 = require("./CountryPickerButton");
var CountryPickerModal_1 = require("./CountryPickerModal");
var phoneUtils_1 = require("../utils/phoneUtils");
var PhoneInput = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.defaultCountry, defaultCountry = _b === void 0 ? 'US' : _b, _c = _a.includeDialCode, includeDialCode = _c === void 0 ? false : _c, label = _a.label, error = _a.error, _d = _a.isError, isError = _d === void 0 ? false : _d, _e = _a.styles, customStyles = _e === void 0 ? {} : _e, _f = _a.errorStyles, customErrorStyles = _f === void 0 ? {} : _f, _g = _a.modalConfig, modalConfig = _g === void 0 ? {} : _g, _h = _a.countryListConfig, countryListConfig = _h === void 0 ? {} : _h;
    var _j = (0, react_1.useState)(countries_1.countries.find(function (c) { return c.code === defaultCountry; }) || countries_1.countries[0]), selectedCountry = _j[0], setSelectedCountry = _j[1];
    var _k = (0, react_1.useState)(false), modalVisible = _k[0], setModalVisible = _k[1];
    var _l = (0, react_1.useState)(''), searchQuery = _l[0], setSearchQuery = _l[1];
    var mergedStyles = {
        container: [styles.container, styles_1.DEFAULT_STYLES.containerStyle, customStyles.containerStyle],
        input: [styles_1.DEFAULT_STYLES.inputStyle, customStyles.inputStyle],
        label: [styles_1.DEFAULT_STYLES.labelStyle, customStyles.labelStyle],
    };
    var errorStyles = __assign(__assign({}, styles_1.DEFAULT_ERROR_STYLES), customErrorStyles);
    var filteredCountries = (0, react_1.useMemo)(function () {
        return countries_1.countries.filter(function (country) {
            return country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                country.dial_code.includes(searchQuery);
        });
    }, [searchQuery]);
    var handleCountrySelect = (0, react_1.useCallback)(function (country) {
        setSelectedCountry(country);
        setModalVisible(false);
        onChange('', country);
    }, [onChange]);
    var handleChangeText = (0, react_1.useCallback)(function (text) {
        var numericValue = text.replace(/\D/g, '');
        var maxLength = (0, phoneUtils_1.getMaxLength)(selectedCountry);
        var truncatedValue = numericValue.slice(0, maxLength);
        if (includeDialCode) {
            var dialCode = selectedCountry.dial_code.replace('+', '');
            onChange(dialCode + truncatedValue, selectedCountry);
        }
        else {
            onChange(truncatedValue, selectedCountry);
        }
    }, [selectedCountry, onChange, includeDialCode]);
    return (<react_native_1.View>
      {label && (<react_native_1.Text style={[
                mergedStyles.label,
                isError && { color: errorStyles.errorTextColor }
            ]}>
          {label}
        </react_native_1.Text>)}
      <react_native_1.View style={[
            mergedStyles.container,
            isError && { borderColor: errorStyles.errorBorderColor }
        ]}>
        <CountryPickerButton_1.CountryPickerButton country={selectedCountry} isError={isError} errorTextColor={errorStyles.errorTextColor} onPress={function () { return setModalVisible(true); }}/>

        <react_native_1.TextInput style={[
            mergedStyles.input,
            isError && { color: errorStyles.errorTextColor }
        ]} value={(0, phoneUtils_1.formatPhoneNumber)(value, selectedCountry, includeDialCode)} onChangeText={handleChangeText} keyboardType="phone-pad" placeholder={(0, phoneUtils_1.getPlaceholder)(selectedCountry)} placeholderTextColor={isError ? errorStyles.errorTextColor : styles_1.DEFAULT_COLORS.placeholder} maxLength={(0, phoneUtils_1.getMaxLength)(selectedCountry) + 10}/>
      </react_native_1.View>
      
      {error && (<react_native_1.View style={errorStyles.errorContainerStyle}>
          <react_native_1.Text style={[
                { color: errorStyles.errorTextColor },
                errorStyles.errorStyle
            ]}>
            {error}
          </react_native_1.Text>
        </react_native_1.View>)}
      
      <CountryPickerModal_1.CountryPickerModal visible={modalVisible} onClose={function () { return setModalVisible(false); }} searchQuery={searchQuery} onSearchChange={setSearchQuery} countries={filteredCountries} onSelectCountry={handleCountrySelect} modalConfig={modalConfig} countryListConfig={countryListConfig}/>
    </react_native_1.View>);
};
exports.PhoneInput = PhoneInput;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});
