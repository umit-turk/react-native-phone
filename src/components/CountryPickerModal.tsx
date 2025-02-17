import React, { useCallback } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Modal, 
  FlatList, 
  StyleSheet, 
  SafeAreaView, 
  Pressable 
} from 'react-native';
import { Country } from '../data/countries';
import { ModalConfig, CountryListConfig } from '../types';
import { DEFAULT_COLORS } from '../constants/styles';
import { CountryListItem } from './CountryListItem';

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

export const CountryPickerModal: React.FC<CountryPickerModalProps> = ({
  visible,
  onClose,
  searchQuery,
  onSearchChange,
  countries,
  onSelectCountry,
  modalConfig,
  countryListConfig,
}) => {
  const ItemSeparator = useCallback(() => (
    countryListConfig.showSeparator !== false ? (
      <View style={[styles.separator, countryListConfig.separatorStyle]} />
    ) : null
  ), [countryListConfig.showSeparator, countryListConfig.separatorStyle]);

  const keyExtractor = useCallback((item: Country) => 
    `${item.code}-${item.dial_code}`, []);

  const renderItem = useCallback(({ item }: { item: Country }) => (
    <CountryListItem
      item={item}
      onSelect={onSelectCountry}
      nameStyle={countryListConfig.nameStyle}
      dialCodeStyle={countryListConfig.dialCodeStyle}
    />
  ), [onSelectCountry, countryListConfig.nameStyle, countryListConfig.dialCodeStyle]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <SafeAreaView style={[styles.container, modalConfig.modalStyle]}>
        <View style={styles.header}>
          <TextInput
            style={[styles.searchInput, modalConfig.searchInputStyle]}
            value={searchQuery}
            onChangeText={onSearchChange}
            placeholder={modalConfig.searchPlaceholder ?? "Search country or code"}
            placeholderTextColor={DEFAULT_COLORS.placeholder}
          />
          <Pressable 
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>
              {modalConfig.closeButtonText ?? "Close"}
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={countries}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          windowSize={10}
          removeClippedSubviews={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: DEFAULT_COLORS.border,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    color: DEFAULT_COLORS.primary,
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: DEFAULT_COLORS.separator,
  },
  listContent: {
    flexGrow: 1,
  },
}); 