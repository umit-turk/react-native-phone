import React from 'react';
import { Country } from '../data/countries';
interface CountryPickerButtonProps {
    country: Country;
    isError?: boolean;
    errorTextColor?: string;
    onPress: () => void;
}
export declare const CountryPickerButton: React.FC<CountryPickerButtonProps>;
export {};
