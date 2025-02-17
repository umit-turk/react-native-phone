import { registerRootComponent } from 'expo';

import App from '../App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// Components
export { PhoneInput } from './components/PhoneInput';

// Types
export { Country } from './data/countries';
export type { PhoneInputProps } from './types';

// Utils
export { formatPhoneNumber, getMaxLength, getPlaceholder } from './utils/phoneUtils';
