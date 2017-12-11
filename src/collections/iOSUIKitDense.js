import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import humanDense from "./humanDense";
import systemDenseWeights from "../helpers/systemDenseWeights";

// Extracted from the sketch file
// https://developer.apple.com/design/resources/
// These are the textStyles that fall under the category of iOS UIKit

const getStylesForColor = color => {
  const colorSuffix = color === "white" ? "White" : "";
  return {
    largeTitleEmphasized: {
      ...humanDense[`largeTitle${colorSuffix}Object`],
      ...systemDenseWeights.bold,
      letterSpacing: Platform.OS === "ios" ? 0.41 : undefined
    },
    title3: humanDense[`title3${colorSuffix}Object`],
    title3Emphasized: {
      ...humanDense[`title3${colorSuffix}Object`],
      ...systemDenseWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? 0.75 : undefined
    },
    body: humanDense[`body${colorSuffix}Object`],
    bodyEmphasized: {
      ...humanDense[`body${colorSuffix}Object`],
      ...systemDenseWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? -0.41 : undefined
    },
    subhead: humanDense[`subhead${colorSuffix}Object`],
    subheadShort: {
      ...humanDense[`subhead${colorSuffix}Object`],
      lineHeight: 23
    },
    subheadEmphasized: {
      ...humanDense[`subhead${colorSuffix}Object`],
      ...systemDenseWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? -0.24 : undefined
    },
    callout: humanDense[`callout${colorSuffix}Object`],
    footnote: humanDense[`footnote${colorSuffix}Object`],
    footnoteEmphasized: {
      ...humanDense[`footnote${colorSuffix}Object`],
      ...systemDenseWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? -0.08 : undefined
    },
    caption2: humanDense[`caption2${colorSuffix}Object`],
    caption2Emphasized: {
      ...humanDense[`caption2${colorSuffix}Object`],
      ...systemDenseWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? 0.06 : undefined
    }
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
