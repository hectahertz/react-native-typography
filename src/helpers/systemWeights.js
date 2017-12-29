import { Platform } from "react-native";
import sanFranciscoWeights from "../helpers/sanFranciscoWeights";
import robotoWeights from "../helpers/robotoWeights";
import webWeights from "../helpers/webWeights";

// Visually mapped San Francisco–Roboto-Web weights
// Follows the San Francisco naming convention, as it has more steps
// which makes it more flexible in the case of future changes.

const systemWeights = {
  thin: Platform.select({
    android: robotoWeights.thin,
    ios: sanFranciscoWeights.thin,
    web: webWeights.thin
  }),
  light: Platform.select({
    android: robotoWeights.light,
    ios: sanFranciscoWeights.light,
    web: webWeights.light
  }),
  regular: Platform.select({
    android: robotoWeights.regular,
    ios: sanFranciscoWeights.regular,
    web: webWeights.regular
  }),
  semibold: Platform.select({
    android: robotoWeights.medium,
    ios: sanFranciscoWeights.semibold,
    web: webWeights.semibold
  }),
  bold: Platform.select({
    android: robotoWeights.bold,
    ios: sanFranciscoWeights.bold,
    web: webWeights.bold
  })
};

export default systemWeights;
