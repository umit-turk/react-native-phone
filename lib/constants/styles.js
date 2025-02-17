"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = exports.DEFAULT_STYLES = exports.DEFAULT_ERROR_STYLES = exports.DEFAULT_COLORS = void 0;
var react_native_1 = require("react-native");
exports.DEFAULT_COLORS = {
    primary: "#007AFF",
    border: "#E5E5E5",
    text: "#333333",
    error: "#dc3545",
    placeholder: "#999999",
    background: "#FFFFFF",
    separator: "#F5F5F5",
};
exports.DEFAULT_ERROR_STYLES = {
    errorBorderColor: exports.DEFAULT_COLORS.error,
    errorTextColor: exports.DEFAULT_COLORS.error,
    errorStyle: {
        fontSize: 14,
        fontStyle: "italic",
    },
    errorContainerStyle: {
        backgroundColor: "#fff3f3",
        padding: 8,
        borderRadius: 4,
        marginTop: 8,
    },
};
exports.DEFAULT_STYLES = {
    containerStyle: {
        borderRadius: 12,
        height: 40,
        borderWidth: 1,
        borderColor: exports.DEFAULT_COLORS.border,
        backgroundColor: exports.DEFAULT_COLORS.background,
    },
    labelStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: exports.DEFAULT_COLORS.text,
        marginBottom: 8,
    },
    inputStyle: {
        fontSize: 16,
        color: exports.DEFAULT_COLORS.text,
        paddingLeft: 10,
    },
};
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: exports.DEFAULT_COLORS.background,
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: exports.DEFAULT_COLORS.border,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: exports.DEFAULT_COLORS.border,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    closeButton: {
        padding: 10,
    },
    closeButtonText: {
        color: exports.DEFAULT_COLORS.primary,
        fontSize: 16,
    },
    countryItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    countryEmoji: {
        fontSize: 20,
        marginRight: 10,
    },
    countryName: {
        flex: 1,
        fontSize: 16,
    },
    countryDialCode: {
        fontSize: 16,
        color: exports.DEFAULT_COLORS.text,
    },
    separator: {
        height: 1,
        backgroundColor: exports.DEFAULT_COLORS.separator,
    },
});
