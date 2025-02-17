import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Country } from "../data/countries";
export interface ModalConfig {
    searchPlaceholder?: string;
    closeButtonText?: string;
    modalStyle?: StyleProp<ViewStyle>;
    searchInputStyle?: StyleProp<ViewStyle>;
}
export interface CountryListConfig {
    showSeparator?: boolean;
    itemStyle?: StyleProp<ViewStyle>;
    nameStyle?: StyleProp<TextStyle>;
    dialCodeStyle?: StyleProp<TextStyle>;
    separatorStyle?: StyleProp<ViewStyle>;
}
export interface ErrorStyles {
    errorBorderColor?: string;
    errorTextColor?: string;
    errorStyle?: StyleProp<TextStyle>;
    errorContainerStyle?: StyleProp<ViewStyle>;
}
export interface PhoneInputStyles {
    containerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<TextStyle>;
}
export interface PhoneInputProps {
    value: string;
    onChange: (value: string, country: Country) => void;
    defaultCountry?: string;
    includeDialCode?: boolean;
    label?: string;
    error?: string;
    isError?: boolean;
    styles?: PhoneInputStyles;
    errorStyles?: ErrorStyles;
    modalConfig?: ModalConfig;
    countryListConfig?: CountryListConfig;
}
