import React, { useState, useCallback } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { PhoneInput } from './src/components/PhoneInput';
import { Country } from './src/data/countries';
import { DEFAULT_COLORS } from './src/constants/styles';

export default function App() {
  // State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [error, setError] = useState<string>('');

  // Event handlers
  const handlePhoneChange = useCallback((value: string, country: Country) => {
    setPhoneNumber(value);
    setSelectedCountry(country);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <PhoneInput
          // Temel özellikler
          value={phoneNumber}
          onChange={handlePhoneChange}
          defaultCountry="US"
          includeDialCode={true}
          label="Phone Number"
          error={error}
          isError={!!error}
          styles={{
            containerStyle: {
              borderRadius: 12,
              height: 46,
            },
            labelStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              color: DEFAULT_COLORS.text,
            },
            inputStyle: {
              fontSize: 16,
              color: DEFAULT_COLORS.text,
            },
          }}
          errorStyles={{
            errorBorderColor: DEFAULT_COLORS.error,
            errorTextColor: DEFAULT_COLORS.error,
            errorStyle: {
              fontSize: 14,
              fontStyle: 'italic',
            },
            errorContainerStyle: {
              backgroundColor: '#fff3f3',
              padding: 8,
              borderRadius: 4,
              marginTop: 8,
            },
          }}
          modalConfig={{
            searchPlaceholder: "Search Country or Code",
            closeButtonText: "Close",
            modalStyle: { backgroundColor: DEFAULT_COLORS.background },
            searchInputStyle: {
              borderRadius: 12,
              height: 48,
            },
          }}
          countryListConfig={{
            showSeparator: true,
            itemStyle: { 
              padding: 16,
              backgroundColor: DEFAULT_COLORS.background,
            },
            nameStyle: { 
              fontSize: 16,
              color: DEFAULT_COLORS.text,
            },
            dialCodeStyle: {
              color: DEFAULT_COLORS.primary,
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_COLORS.background,
  },
  content: {
    padding: 20,
  },
});
