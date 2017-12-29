import { Platform } from "react-native";
import sanFranciscoWeights from "../helpers/sanFranciscoWeights";
import notoCJKWeights from "../helpers/notoCJKWeights";
import webWeights from "../helpers/webWeights";

// For now these weights are really restricted on Android, even though San Francisco
// has many steps defined for some dense languages, Noto Sans CJK only has regular
// and bold shipped with Android

// San Francisco falls back from regular to bold starting from semibold for the scripts
// for which it doesn't have so many weight steps, so let's do the same for Noto CJK.

const systemDenseWeights = {
  thin: Platform.select({
    android: notoCJKWeights.regular,
    ios: sanFranciscoWeights.thin,
    web: webWeights.thin
  }),
  light: Platform.select({
    android: notoCJKWeights.regular,
    ios: sanFranciscoWeights.light,
    web: webWeights.light
  }),
  regular: Platform.select({
    android: notoCJKWeights.regular,
    ios: sanFranciscoWeights.regular,
    web: webWeights.regular
  }),
  semibold: Platform.select({
    android: notoCJKWeights.bold,
    ios: sanFranciscoWeights.semibold,
    web: webWeights.semibold
  }),
  bold: Platform.select({
    android: notoCJKWeights.bold,
    ios: sanFranciscoWeights.bold,
    web: webWeights.bold
  })
};

export default systemDenseWeights;
