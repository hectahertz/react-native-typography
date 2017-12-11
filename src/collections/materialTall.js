import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import material from "./material";
import systemTallWeights from "../helpers/systemTallWeights";
import sanFranciscoSpacing from "../helpers/sanFranciscoSpacing";

// https://material.io/guidelines/style/typography.html#typography-styles

const getStylesForColor = color => {
  const colorSuffix = color === "white" ? "White" : "";
  return {
    display4: {
      ...material[`display4${colorSuffix}Object`],
      ...systemTallWeights.light,
      lineHeight: 164
    },
    display3: {
      ...material[`display3${colorSuffix}Object`],
      ...systemTallWeights.regular,
      lineHeight: 82
    },
    display2: {
      ...material[`display2${colorSuffix}Object`],
      ...systemTallWeights.regular,
      lineHeight: 66
    },
    display1: {
      ...material[`display1${colorSuffix}Object`],
      ...systemTallWeights.regular,
      lineHeight: 50
    },
    headline: {
      ...material[`headline${colorSuffix}Object`],
      ...systemTallWeights.regular,
      lineHeight: 40
    },
    title: {
      ...material[`title${colorSuffix}Object`],
      ...systemTallWeights.semibold,
      fontSize: 21,
      lineHeight: 36,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(21) : undefined
    },
    subheading: {
      ...material[`subheading${colorSuffix}Object`],
      ...systemTallWeights.regular,
      fontSize: 17,
      lineHeight: 30,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(17) : undefined
    },
    body2: {
      ...material[`body2${colorSuffix}Object`],
      ...systemTallWeights.semibold,
      fontSize: 15,
      lineHeight: 30,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    },
    body1: {
      ...material[`body1${colorSuffix}Object`],
      ...systemTallWeights.regular,
      fontSize: 15,
      lineHeight: 26,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    },
    caption: {
      ...material[`caption${colorSuffix}Object`],
      ...systemTallWeights.regular,
      fontSize: 13,
      lineHeight: 20,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(13) : undefined
    },
    button: {
      ...material[`button${colorSuffix}Object`],
      ...systemTallWeights.semibold,
      fontSize: 15,
      lineHeight: 26,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    }
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
