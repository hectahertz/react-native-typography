import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import systemWeights from "../helpers/systemWeights";
import sanFranciscoSpacing from "../helpers/sanFranciscoSpacing";
import materialColors from "../helpers/materialColors";

// https://material.io/guidelines/style/typography.html#typography-styles

const colors = {
  black: {
    primary: materialColors.blackPrimary,
    secondary: materialColors.blackSecondary,
    tertiary: materialColors.blackTertiary
  },
  white: {
    primary: materialColors.whitePrimary,
    secondary: materialColors.whiteSecondary,
    tertiary: materialColors.whiteTertiary
  }
};

const getStylesForColor = color => ({
  display4: {
    fontSize: 112,
    lineHeight: 128,
    ...systemWeights.light,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(112) : undefined,
    color: colors[color].secondary
  },
  display3: {
    fontSize: 56,
    lineHeight: 64,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(56) : undefined,
    color: colors[color].secondary
  },
  display2: {
    fontSize: 45,
    lineHeight: 52,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(45) : undefined,
    color: colors[color].secondary
  },
  display1: {
    fontSize: 34,
    lineHeight: 40,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(34) : undefined,
    color: colors[color].secondary
  },
  headline: {
    fontSize: 24,
    lineHeight: 32,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(24) : undefined,
    color: colors[color].primary
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    ...systemWeights.semibold,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(20) : undefined,
    color: colors[color].primary
  },
  subheading: {
    fontSize: 16,
    lineHeight: 24,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(16) : undefined,
    color: colors[color].primary
  },
  body2: {
    fontSize: 14,
    lineHeight: 24,
    ...systemWeights.semibold,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(14) : undefined,
    color: colors[color].primary
  },
  body1: {
    fontSize: 14,
    lineHeight: 20,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(14) : undefined,
    color: colors[color].primary
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(12) : undefined,
    color: colors[color].secondary
  },
  button: {
    fontSize: 14,
    lineHeight: 20,
    ...systemWeights.semibold,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(14) : undefined,
    color: colors[color].primary
  }
});

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
