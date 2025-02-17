import { StyleSheet } from 'react-native';
import { ErrorStyles, PhoneInputStyles } from '../types';

export const DEFAULT_COLORS = {
  primary: '#007AFF',
  border: '#E5E5E5',
  text: '#333333',
  error: '#dc3545',
  placeholder: '#999999',
  background: '#FFFFFF',
  separator: '#F5F5F5',
};

export const DEFAULT_ERROR_STYLES: ErrorStyles = {
  errorBorderColor: DEFAULT_COLORS.error,
  errorTextColor: DEFAULT_COLORS.error,
  errorStyle: {
    fontSize: 14,
    fontStyle: 'italic' as const,
  },
  errorContainerStyle: {
    backgroundColor: '#fff3f3',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
};

export const DEFAULT_STYLES: PhoneInputStyles = {
  containerStyle: {
    borderRadius: 12,
    height: 40,
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.border,
    backgroundColor: DEFAULT_COLORS.background,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    color: DEFAULT_COLORS.text,
    marginBottom: 8,
  },
  inputStyle: {
    fontSize: 16,
    color: DEFAULT_COLORS.text,
    paddingLeft: 10,
  }
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: DEFAULT_COLORS.background,
  },
  modalHeader: {
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
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  countryEmoji: {
    fontSize: 20,
    marginRight: 10,
  },
  countryName: {
    flex: 1,
    fontSize: 16,
  },
  countryDialCode: {
    fontSize: 16,
    color: DEFAULT_COLORS.text,
  },
  separator: {
    height: 1,
    backgroundColor: DEFAULT_COLORS.separator,
  },
}); 