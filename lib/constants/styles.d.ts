import { ErrorStyles, PhoneInputStyles } from '../types';
export declare const DEFAULT_COLORS: {
    primary: string;
    border: string;
    text: string;
    error: string;
    placeholder: string;
    background: string;
    separator: string;
};
export declare const DEFAULT_ERROR_STYLES: ErrorStyles;
export declare const DEFAULT_STYLES: PhoneInputStyles;
export declare const styles: {
    container: {
        flexDirection: "row";
        alignItems: "center";
        paddingHorizontal: number;
    };
    modalContainer: {
        flex: number;
        backgroundColor: string;
    };
    modalHeader: {
        flexDirection: "row";
        alignItems: "center";
        padding: number;
        borderBottomWidth: number;
        borderBottomColor: string;
    };
    searchInput: {
        flex: number;
        height: number;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        paddingHorizontal: number;
        marginRight: number;
    };
    closeButton: {
        padding: number;
    };
    closeButtonText: {
        color: string;
        fontSize: number;
    };
    countryItem: {
        flexDirection: "row";
        alignItems: "center";
        padding: number;
    };
    countryEmoji: {
        fontSize: number;
        marginRight: number;
    };
    countryName: {
        flex: number;
        fontSize: number;
    };
    countryDialCode: {
        fontSize: number;
        color: string;
    };
    separator: {
        height: number;
        backgroundColor: string;
    };
};
