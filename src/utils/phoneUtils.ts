import { Country } from '../data/countries';

export const formatPhoneNumber = (text: string, country: Country, includeDialCode: boolean): string => {
  if (!text) return '';
  
  const mask = country.mask;
  const dialCode = country.dial_code;
  
  let displayText = text;
  if (includeDialCode && text.startsWith(dialCode.replace('+', ''))) {
    displayText = text.slice(dialCode.replace('+', '').length);
  }
  
  let numberMask = extractNumberMask(mask, dialCode);
  return applyMask(displayText, numberMask);
};

export const getMaxLength = (country: Country): number => {
  const mask = country.mask;
  return (mask.match(/#/g) || []).length;
};

export const getPlaceholder = (country: Country): string => {
  const mask = country.mask;
  const dialCode = country.dial_code;
  
  const numberMask = extractNumberMask(mask, dialCode);
  return numberMask.replace(/#/g, '0');
};

// Yardımcı fonksiyonlar
const extractNumberMask = (mask: string, dialCode: string): string => {
  if (dialCode.startsWith('+1') && dialCode.length === 5) {
    return mask.substring(mask.indexOf(')') + 1);
  }
  
  if (mask.includes('(')) {
    return mask.substring(mask.indexOf('('));
  }
  
  if (mask.includes('-')) {
    return mask.substring(mask.indexOf('-'));
  }
  
  return mask.substring(dialCode.length);
};

const applyMask = (text: string, mask: string): string => {
  let formatted = '';
  let textIndex = 0;

  for (let i = 0; i < mask.length && textIndex < text.length; i++) {
    if (mask[i] === '#') {
      formatted += text[textIndex];
      textIndex++;
    } else {
      formatted += mask[i];
    }
  }

  formatted = formatted.trim();
  if (formatted.startsWith('-')) {
    formatted = formatted.substring(1);
  }

  return formatted;
}; 