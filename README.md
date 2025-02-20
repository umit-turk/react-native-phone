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

## Now you can buy me coffee
<a href="https://www.buymeacoffee.com/umityasarturk" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Demo

### Video Demo

https://github.com/user-attachments/assets/f0ad4130-2e80-4438-8302-046566a76ab8

https://github.com/user-attachments/assets/db9ac983-9e61-4ded-b4ba-5ab1d5c5f613

The videos above demonstrate:
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
