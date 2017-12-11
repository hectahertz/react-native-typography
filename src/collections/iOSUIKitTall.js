import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import humanTall from "./humanTall";
import systemTallWeights from "../helpers/systemTallWeights";

// Extracted from the sketch file
// https://developer.apple.com/design/resources/
// These are the textStyles that fall under the category of iOS UIKit

const getStylesForColor = color => {
  const colorSuffix = color === "white" ? "White" : "";
  return {
    largeTitleEmphasized: {
      ...humanTall[`largeTitle${colorSuffix}Object`],
      ...systemTallWeights.bold,
      letterSpacing: Platform.OS === "ios" ? 0.41 : undefined
    },
    title3: humanTall[`title3${colorSuffix}Object`],
    title3Emphasized: {
      ...humanTall[`title3${colorSuffix}Object`],
      ...systemTallWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? 0.75 : undefined
    },
    body: humanTall[`body${colorSuffix}Object`],
    bodyEmphasized: {
      ...humanTall[`body${colorSuffix}Object`],
      ...systemTallWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? -0.41 : undefined
    },
    subhead: humanTall[`subhead${colorSuffix}Object`],
    subheadShort: {
      ...humanTall[`subhead${colorSuffix}Object`],
      lineHeight: 23
    },
    subheadEmphasized: {
      ...humanTall[`subhead${colorSuffix}Object`],
      ...systemTallWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? -0.24 : undefined
    },
    callout: humanTall[`callout${colorSuffix}Object`],
    footnote: humanTall[`footnote${colorSuffix}Object`],
    footnoteEmphasized: {
      ...humanTall[`footnote${colorSuffix}Object`],
      ...systemTallWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? -0.08 : undefined
    },
    caption2: humanTall[`caption2${colorSuffix}Object`],
    caption2Emphasized: {
      ...humanTall[`caption2${colorSuffix}Object`],
      ...systemTallWeights.semibold,
      letterSpacing: Platform.OS === "ios" ? 0.06 : undefined
    }
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
