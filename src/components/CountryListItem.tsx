import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { Country } from '../data/countries';
import { DEFAULT_COLORS } from '../constants/styles';

interface CountryListItemProps {
  item: Country;
  onSelect: (country: Country) => void;
  nameStyle?: StyleProp<TextStyle>;
  dialCodeStyle?: StyleProp<TextStyle>;
}

export const CountryListItem: React.FC<CountryListItemProps> = ({ 
  item, 
  onSelect,
  nameStyle,
  dialCodeStyle 
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onSelect(item)}
  >
    <Text style={styles.emoji}>{item.emoji}</Text>
    <Text style={[styles.name, nameStyle]}>{item.name}</Text>
    <Text style={[styles.dialCode, dialCodeStyle]}>{item.dial_code}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  dialCode: {
    fontSize: 16,
    color: DEFAULT_COLORS.text,
  },
}); 