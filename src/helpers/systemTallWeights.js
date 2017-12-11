import { Platform } from "react-native";
import sanFranciscoWeights from "../helpers/sanFranciscoWeights";
import notoTallWeights from "../helpers/notoTallWeights";

// San Francisco falls back from regular to bold starting from semibold for the scripts
// for which it doesn't have so many weight steps, so let's do the same for Noto.

const systemTallWeights = {
  thin: Platform.select({
    android: notoTallWeights.regular,
    ios: sanFranciscoWeights.thin
  }),
  light: Platform.select({
    android: notoTallWeights.regular,
    ios: sanFranciscoWeights.light
  }),
  regular: Platform.select({
    android: notoTallWeights.regular,
    ios: sanFranciscoWeights.regular
  }),
  semibold: Platform.select({
    android: notoTallWeights.bold,
    ios: sanFranciscoWeights.semibold
  }),
  bold: Platform.select({
    android: notoTallWeights.bold,
    ios: sanFranciscoWeights.bold
  })
};

export default systemTallWeights;
