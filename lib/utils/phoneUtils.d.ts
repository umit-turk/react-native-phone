import { Country } from "../data/countries";
export declare const formatPhoneNumber: (text: string, country: Country, includeDialCode: boolean) => string;
export declare const getMaxLength: (country: Country) => number;
export declare const getPlaceholder: (country: Country) => string;
