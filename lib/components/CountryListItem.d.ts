import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { Country } from "../data/countries";
interface CountryListItemProps {
    item: Country;
    onSelect: (country: Country) => void;
    nameStyle?: StyleProp<TextStyle>;
    dialCodeStyle?: StyleProp<TextStyle>;
}
export declare const CountryListItem: React.FC<CountryListItemProps>;
export {};
