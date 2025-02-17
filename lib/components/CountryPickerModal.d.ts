import React from 'react';
import { Country } from '../data/countries';
import { ModalConfig, CountryListConfig } from '../types';
interface CountryPickerModalProps {
    visible: boolean;
    onClose: () => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    countries: Country[];
    onSelectCountry: (country: Country) => void;
    modalConfig: ModalConfig;
    countryListConfig: CountryListConfig;
}
export declare const CountryPickerModal: React.FC<CountryPickerModalProps>;
export {};
