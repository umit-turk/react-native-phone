"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaceholder = exports.getMaxLength = exports.formatPhoneNumber = void 0;
var formatPhoneNumber = function (text, country, includeDialCode) {
    if (!text)
        return '';
    var mask = country.mask;
    var dialCode = country.dial_code;
    var displayText = text;
    if (includeDialCode && text.startsWith(dialCode.replace('+', ''))) {
        displayText = text.slice(dialCode.replace('+', '').length);
    }
    var numberMask = extractNumberMask(mask, dialCode);
    return applyMask(displayText, numberMask);
};
exports.formatPhoneNumber = formatPhoneNumber;
var getMaxLength = function (country) {
    var mask = country.mask;
    return (mask.match(/#/g) || []).length;
};
exports.getMaxLength = getMaxLength;
var getPlaceholder = function (country) {
    var mask = country.mask;
    var dialCode = country.dial_code;
    var numberMask = extractNumberMask(mask, dialCode);
    return numberMask.replace(/#/g, '0');
};
exports.getPlaceholder = getPlaceholder;
// Yardımcı fonksiyonlar
var extractNumberMask = function (mask, dialCode) {
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
var applyMask = function (text, mask) {
    var formatted = '';
    var textIndex = 0;
    for (var i = 0; i < mask.length && textIndex < text.length; i++) {
        if (mask[i] === '#') {
            formatted += text[textIndex];
            textIndex++;
        }
        else {
            formatted += mask[i];
        }
    }
    formatted = formatted.trim();
    if (formatted.startsWith('-')) {
        formatted = formatted.substring(1);
    }
    return formatted;
};
