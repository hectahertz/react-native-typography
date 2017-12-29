import { Platform } from "react-native";
import sanFranciscoWeights from "../helpers/sanFranciscoWeights";
import notoTallWeights from "../helpers/notoTallWeights";
import webWeights from "../helpers/webWeights";

// San Francisco falls back from regular to bold starting from semibold for the scripts
// for which it doesn't have so many weight steps, so let's do the same for Noto.

const systemTallWeights = {
  thin: Platform.select({
    android: notoTallWeights.regular,
    ios: sanFranciscoWeights.thin,
    web: webWeights.thin
  }),
  light: Platform.select({
    android: notoTallWeights.regular,
    ios: sanFranciscoWeights.light,
    web: webWeights.light
  }),
  regular: Platform.select({
    android: notoTallWeights.regular,
    ios: sanFranciscoWeights.regular,
    web: webWeights.regular
  }),
  semibold: Platform.select({
    android: notoTallWeights.bold,
    ios: sanFranciscoWeights.semibold,
    web: webWeights.semibold
  }),
  bold: Platform.select({
    android: notoTallWeights.bold,
    ios: sanFranciscoWeights.bold,
    web: webWeights.bold
  })
};

export default systemTallWeights;
