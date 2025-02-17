import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Country } from "../data/countries";
import { DEFAULT_COLORS } from "../constants/styles";

interface CountryPickerButtonProps {
  country: Country;
  isError?: boolean;
  errorTextColor?: string;
  onPress: () => void;
  disabled?: boolean;
}

export const CountryPickerButton: React.FC<CountryPickerButtonProps> = ({
  country,
  isError,
  errorTextColor,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.container,
        { borderRightColor: isError ? errorTextColor : DEFAULT_COLORS.border },
        disabled && { opacity: 0.7 }
      ]}
      disabled={disabled}
    >
      <Text style={styles.flag}>{country.emoji}</Text>
      <Text style={[styles.countryCode, isError && { color: errorTextColor }]}>
        {country.dial_code}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: DEFAULT_COLORS.border,
  },
  flag: {
    fontSize: 20,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
    color: DEFAULT_COLORS.text,
  },
});
