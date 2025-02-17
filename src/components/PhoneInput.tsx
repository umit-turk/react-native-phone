import React, { useState, useCallback, useMemo } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { countries, Country } from "../data/countries";
import { PhoneInputProps } from "../types";
import {
  DEFAULT_STYLES,
  DEFAULT_ERROR_STYLES,
  DEFAULT_COLORS,
} from "../constants/styles";
import { CountryPickerButton } from "./CountryPickerButton";
import { CountryPickerModal } from "./CountryPickerModal";
import {
  formatPhoneNumber,
  getMaxLength,
  getPlaceholder,
} from "../utils/phoneUtils";

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  defaultCountry = "US",
  includeDialCode = false,
  label,
  error,
  isError = false,
  disabled = false,
  styles: customStyles = {},
  errorStyles: customErrorStyles = {},
  modalConfig = {},
  countryListConfig = {},
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find((c) => c.code === defaultCountry) || countries[0],
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const mergedStyles = {
    container: [
      styles.container,
      DEFAULT_STYLES.containerStyle,
      customStyles.containerStyle,
    ],
    input: [DEFAULT_STYLES.inputStyle, customStyles.inputStyle],
    label: [DEFAULT_STYLES.labelStyle, customStyles.labelStyle],
  };

  const errorStyles = {
    ...DEFAULT_ERROR_STYLES,
    ...customErrorStyles,
  };

  const filteredCountries = useMemo(
    () =>
      countries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.dial_code.includes(searchQuery),
      ),
    [searchQuery],
  );

  const handleCountrySelect = useCallback(
    (country: Country) => {
      setSelectedCountry(country);
      setModalVisible(false);
      onChange("", country);
    },
    [onChange],
  );

  const handleChangeText = useCallback(
    (text: string) => {
      const numericValue = text.replace(/\D/g, "");
      const maxLength = getMaxLength(selectedCountry);
      const truncatedValue = numericValue.slice(0, maxLength);

      if (includeDialCode) {
        const dialCode = selectedCountry.dial_code.replace("+", "");
        onChange(dialCode + truncatedValue, selectedCountry);
      } else {
        onChange(truncatedValue, selectedCountry);
      }
    },
    [selectedCountry, onChange, includeDialCode],
  );

  return (
    <View style={{ width: "100%" }}>
      {label && (
        <Text
          style={[
            mergedStyles.label,
            isError && { color: errorStyles.errorTextColor },
          ]}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          mergedStyles.container,
          isError && { borderColor: errorStyles.errorBorderColor },
          { width: "100%" },
          disabled && { opacity: 0.7 },
        ]}
      >
        <CountryPickerButton
          country={selectedCountry}
          isError={isError}
          errorTextColor={errorStyles.errorTextColor}
          onPress={() => !disabled && setModalVisible(true)}
          disabled={disabled}
        />

        <TextInput
          style={[
            mergedStyles.input,
            isError && { color: errorStyles.errorTextColor },
            { flex: 1 },
          ]}
          value={formatPhoneNumber(value, selectedCountry, includeDialCode)}
          onChangeText={handleChangeText}
          keyboardType="phone-pad"
          placeholder={getPlaceholder(selectedCountry)}
          placeholderTextColor={
            isError ? errorStyles.errorTextColor : DEFAULT_COLORS.placeholder
          }
          maxLength={getMaxLength(selectedCountry) + 10}
          editable={!disabled}
        />
      </View>

      {error && (
        <View style={errorStyles.errorContainerStyle}>
          <Text
            style={[
              { color: errorStyles.errorTextColor },
              errorStyles.errorStyle,
            ]}
          >
            {error}
          </Text>
        </View>
      )}

      <CountryPickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        countries={filteredCountries}
        onSelectCountry={handleCountrySelect}
        modalConfig={modalConfig}
        countryListConfig={countryListConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
  },
});
