import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import systemDenseWeights from "../helpers/systemDenseWeights";
import human from "./human";

// https://developer.apple.com/videos/play/wwdc2016/801/

const getStylesForColor = color => {
  const colorSuffix = color === "white" ? "White" : "";
  return {
    largeTitle: {
      ...human[`largeTitle${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 52
    },
    title1: {
      ...human[`title1${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 43
    },
    title2: {
      ...human[`title2${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 35
    },
    title3: {
      ...human[`title3${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 32
    },
    headline: {
      ...human[`headline${colorSuffix}Object`],
      ...systemDenseWeights.semibold,
      lineHeight: 28
    },
    body: {
      ...human[`body${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 28
    },
    callout: {
      ...human[`callout${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 26
    },
    subhead: {
      ...human[`subhead${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 25
    },
    footnote: {
      ...human[`footnote${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 23
    },
    caption1: {
      ...human[`caption1${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 20
    },
    caption2: {
      ...human[`caption2${colorSuffix}Object`],
      ...systemDenseWeights.regular,
      lineHeight: 16
    }
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
