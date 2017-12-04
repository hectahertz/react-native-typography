import { Platform } from 'react-native';
import sanFranciscoWeights from '../helpers/sanFranciscoWeights';
import robotoWeights from '../helpers/robotoWeights';

// Visually mapped San Francisco–Roboto weights
// Follows the San Francisco naming convention, as it has more steps
// which makes it more flexible in the case of future changes.

const systemWeights = {
  thin: Platform.select({
    android: robotoWeights.thin,
    ios: sanFranciscoWeights.thin,
  }),
  light: Platform.select({
    android: robotoWeights.light,
    ios: sanFranciscoWeights.light,
  }),
  regular: Platform.select({
    android: robotoWeights.regular,
    ios: sanFranciscoWeights.regular,
  }),
  semibold: Platform.select({
    android: robotoWeights.medium,
    ios: sanFranciscoWeights.semibold,
  }),
  bold: Platform.select({
    android: robotoWeights.bold,
    ios: sanFranciscoWeights.bold,
  }),
};

export default systemWeights;
