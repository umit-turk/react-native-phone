"use strict";
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
exports.CountryPickerModal = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles_1 = require("../constants/styles");
var CountryListItem_1 = require("./CountryListItem");
var CountryPickerModal = function (_a) {
    var _b, _c;
    var visible = _a.visible, onClose = _a.onClose, searchQuery = _a.searchQuery, onSearchChange = _a.onSearchChange, countries = _a.countries, onSelectCountry = _a.onSelectCountry, modalConfig = _a.modalConfig, countryListConfig = _a.countryListConfig;
    var ItemSeparator = (0, react_1.useCallback)(function () { return (countryListConfig.showSeparator !== false ? (<react_native_1.View style={[styles.separator, countryListConfig.separatorStyle]}/>) : null); }, [countryListConfig.showSeparator, countryListConfig.separatorStyle]);
    var keyExtractor = (0, react_1.useCallback)(function (item) {
        return "".concat(item.code, "-").concat(item.dial_code);
    }, []);
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return (<CountryListItem_1.CountryListItem item={item} onSelect={onSelectCountry} nameStyle={countryListConfig.nameStyle} dialCodeStyle={countryListConfig.dialCodeStyle}/>);
    }, [onSelectCountry, countryListConfig.nameStyle, countryListConfig.dialCodeStyle]);
    return (<react_native_1.Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <react_native_1.SafeAreaView style={[styles.container, modalConfig.modalStyle]}>
        <react_native_1.View style={styles.header}>
          <react_native_1.TextInput style={[styles.searchInput, modalConfig.searchInputStyle]} value={searchQuery} onChangeText={onSearchChange} placeholder={(_b = modalConfig.searchPlaceholder) !== null && _b !== void 0 ? _b : "Search country or code"} placeholderTextColor={styles_1.DEFAULT_COLORS.placeholder}/>
          <react_native_1.Pressable style={styles.closeButton} onPress={onClose}>
            <react_native_1.Text style={styles.closeButtonText}>
              {(_c = modalConfig.closeButtonText) !== null && _c !== void 0 ? _c : "Close"}
            </react_native_1.Text>
          </react_native_1.Pressable>
        </react_native_1.View>

        <react_native_1.FlatList data={countries} keyExtractor={keyExtractor} renderItem={renderItem} ItemSeparatorComponent={ItemSeparator} initialNumToRender={20} maxToRenderPerBatch={20} windowSize={10} removeClippedSubviews={true} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.listContent}/>
      </react_native_1.SafeAreaView>
    </react_native_1.Modal>);
};
exports.CountryPickerModal = CountryPickerModal;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styles_1.DEFAULT_COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: styles_1.DEFAULT_COLORS.border,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: styles_1.DEFAULT_COLORS.border,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    closeButton: {
        padding: 10,
    },
    closeButtonText: {
        color: styles_1.DEFAULT_COLORS.primary,
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: styles_1.DEFAULT_COLORS.separator,
    },
    listContent: {
        flexGrow: 1,
    },
});
