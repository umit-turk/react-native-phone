# React Native Phone Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Components](#components)
4. [Usage](#usage)
5. [Styling](#styling)
6. [Validation](#validation)
7. [Advanced Features](#advanced-features)
8. [API Reference](#api-reference)
9. [Examples](#examples)
10. [Troubleshooting](#troubleshooting)

## Introduction

React Native Phone is a comprehensive phone input solution for React Native applications. It provides a highly customizable phone number input component with international format support and country selection capabilities.

### Key Features
- International phone number formatting
- Country selection with search
- Custom styling support
- Input validation
- Dark mode support
- TypeScript support
- Performance optimized

## Demo

### Video Demo
![Demo Video](videos/demo-ios.mp4)
![Demo Video](videos/demo-android.webm)

The video above demonstrates:
- Phone number input with country selection
- Real-time formatting
- Country search functionality
- Error handling
- Disabled state behavior

The package works seamlessly on both iOS and Android platforms. As shown in the videos above, it features:

- Country selection with flag display
- Country-specific phone number formatting
- Automatic formatting
- Platform-specific keyboard
- Clean and modern interface

## Installation

### Prerequisites
- React Native >= 0.60.0
- React >= 16.8.0

### Install via npm
```bash
npm install react-native-phone
```

### Install via yarn
```bash
yarn add react-native-phone
```

### Basic Usage

```jsx
import React, { useState } from 'react';
import { PhoneInput } from 'react-native-phone';

const PhoneInputExample = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
  };

  return (
    <PhoneInput
      value={phoneNumber}
      onChange={handlePhoneChange}
      defaultCountry="TR"
      includeDialCode={true}
      disabled={false}
    />
  );
};

export default PhoneInputExample;
```

## Components

The package consists of several key components:

### 1. PhoneInput
The main component that integrates all functionality.

```jsx
import React, { useState } from 'react';
import { PhoneInput } from 'react-native-phone';

const PhoneInputExample = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
  };

  return (
    <PhoneInput
      value={phoneNumber}
      onChange={handlePhoneChange}
      defaultCountry="US"
      includeDialCode={true}
    />
  );
};
```
image.png

### 2. CountryPickerModal
A modal component for country selection.

```jsx
// Automatically integrated with PhoneInput
// Customizable through modalConfig
<PhoneInput
  modalConfig={{
    searchPlaceholder: "Search country",
    closeButtonText: "Close"
  }}
/>
```

### 3. CountryListItem
Individual country item component in the selection list.

```jsx
// Customizable through countryListConfig
<PhoneInput
  countryListConfig={{
    showSeparator: true,
    nameStyle: { fontSize: 16 }
  }}
/>
```

## Usage

### Basic Usage

```jsx
import React, { useState } from 'react';
import { PhoneInput } from 'react-native-phone';

const PhoneInputExample = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
  };

  return (
    <PhoneInput
      value={phoneNumber}
      onChange={handlePhoneChange}
      defaultCountry="TR"
      includeDialCode={true}
      disabled={false}
    />
  );
};
```

### Props Configuration

#### Required Props
- `value`: Current phone number value
- `onChange`: Callback function for value changes

#### Optional Props
- `defaultCountry`: Default selected country (ISO 2 code)
- `includeDialCode`: Include country dial code in value
- `label`: Input label text
- `error`: Error message
- `isError`: Error state flag
- `disabled`: When set to true, the input becomes read-only and country picker becomes disabled (default: false)

## Styling

### Basic Styling
```jsx
<PhoneInput
  styles={{
    containerStyle: {
      borderRadius: 12,
      height: 56,
      width: "100%",
    },
    labelStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    inputStyle: {
      fontSize: 16,
      flex: 1,
    },
  }}
/>
```

### Disabled State Styling
```jsx
<PhoneInput
  disabled={true}
  styles={{
    containerStyle: {
      opacity: 0.7,
    },
  }}
/>
```

### Error Styling
```jsx
<PhoneInput
  errorStyles={{
    errorBorderColor: '#dc3545',
    errorTextColor: '#dc3545',
    errorStyle: {
      fontSize: 14,
      fontStyle: 'italic',
    },
    errorContainerStyle: {
      backgroundColor: '#fff3f3',
      padding: 8,
    },
  }}
/>
```

### Theme Support
```jsx
const darkTheme = {
  primary: '#BB86FC',
  border: '#333333',
  text: '#FFFFFF',
  error: '#CF6679',
  placeholder: '#666666',
  background: '#121212',
  separator: '#333333',
};

<PhoneInput
  styles={{
    containerStyle: {
      backgroundColor: darkTheme.background,
      borderColor: darkTheme.border,
    },
    labelStyle: {
      color: darkTheme.text,
    },
  }}
/>
```

## Validation

### Built-in Validation
```jsx
const handlePhoneChange = (value, country) => {
  if (value.length < 10) {
    setError('Phone number must be at least 10 digits');
  } else if (value.length > 15) {
    setError('Phone number cannot be longer than 15 digits');
  } else {
    setError('');
  }
};
```

### Custom Validation
```jsx
const validatePhoneNumber = (value, country) => {
  const numberPattern = new RegExp(country.mask.replace(/#/g, '\\d'));
  return numberPattern.test(value);
};
```

### Form Integration (Formik)
```jsx
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(10, 'Phone number is too short')
    .required('Phone number is required'),
});

const MyForm = () => (
  <Formik
    initialValues={{ phoneNumber: '' }}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
  >
    {({ values, handleChange, errors }) => (
      <PhoneInput
        value={values.phoneNumber}
        onChange={(value) => handleChange('phoneNumber')(value)}
        error={errors.phoneNumber}
        isError={!!errors.phoneNumber}
      />
    )}
  </Formik>
);
```


### Modal Customization
```jsx
<PhoneInput
  modalConfig={{
    searchPlaceholder: "Search country or code",
    closeButtonText: "Close",
    modalStyle: { 
      backgroundColor: '#ffffff',
    },
    searchInputStyle: {
      borderRadius: 12,
      height: 48,
    },
  }}
/>
```

## API Reference

### PhoneInputProps
```typescript
interface PhoneInputProps {
  value: string;
  onChange: (value: string, country: Country) => void;
  defaultCountry?: string;
  includeDialCode?: boolean;
  label?: string;
  error?: string;
  isError?: boolean;
  disabled?: boolean;
  styles?: PhoneInputStyles;
  errorStyles?: ErrorStyles;
  modalConfig?: ModalConfig;
  countryListConfig?: CountryListConfig;
}
```

### Country Interface
```typescript
interface Country {
  name: string;
  dial_code: string;
  emoji: string;
  code: string;
  mask: string;
}
```

### Style Interfaces
```typescript
interface PhoneInputStyles {
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

interface ErrorStyles {
  errorBorderColor?: string;
  errorTextColor?: string;
  errorStyle?: StyleProp<TextStyle>;
  errorContainerStyle?: StyleProp<ViewStyle>;
}
```

## Examples

### Complete Example with All Features
```jsx
import React, { useState } from 'react';
import { PhoneInput } from 'react-native-phone';

const CompleteExample = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
    
    // Validation
    if (value.length < 10) {
      setError('Phone number must be at least 10 digits');
    } else {
      setError('');
    }
  };

  return (
    <PhoneInput
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
          height: 56,
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
      }}
      errorStyles={{
        errorBorderColor: '#dc3545',
        errorTextColor: '#dc3545',
      }}
      modalConfig={{
        searchPlaceholder: "Search country",
        closeButtonText: "Close",
      }}
      countryListConfig={{
        showSeparator: true,
        nameStyle: { fontSize: 16 },
      }}
    />
  );
};
```

## Troubleshooting

### Common Issues

1. **Phone number not formatting correctly**
   - Check if the correct country is selected
   - Verify the mask format for the selected country
   - Ensure `includeDialCode` is set correctly

2. **Country picker modal not showing**
   - Verify that the modal configuration is correct
   - Check for any conflicting modal components

3. **Styling not applying**
   - Ensure styles are properly merged
   - Check style property types
   - Verify style priority order

### Performance Optimization

The component is optimized for performance with:
- Memoized callbacks
- Efficient country list rendering
- Minimal re-renders

```jsx
// Example of optimized usage
const MemoizedPhoneInput = React.memo(PhoneInput);
const handlePhoneChange = useCallback((value, country) => {
  // Handle change
}, []);
```

For more information or support:
- Check the [GitHub repository](https://github.com/umit-turk/react-native-phone)
- Open an [issue](https://github.com/umit-turk/react-native-phone/issues)
- Contact: [umityasarturk@gmail.com] # react-native-phone
# react-native-phone
