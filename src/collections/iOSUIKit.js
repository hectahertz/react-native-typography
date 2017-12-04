import { Platform } from 'react-native';
import CombinedStyleSheet from '../internal/CombinedStyleSheet';
import suffixProperties from '../internal/suffixProperties';
import human from './human';
import systemWeights from '../helpers/systemWeights';

// Extracted from the sketch file
// https://developer.apple.com/design/resources/
// These are the textStyles that fall under the category of iOS UIKit

const getStylesForColor = color => {
  const colorSuffix = color === 'white' ? 'White' : '';
  return {
    largeTitleEmphasized: {
      ...human[`largeTitle${colorSuffix}Object`],
      ...systemWeights.bold,
      letterSpacing: Platform.OS === 'ios' && 0.41,
    },
    title3: human[`title3${colorSuffix}Object`],
    title3Emphasized: {
      ...human[`title3${colorSuffix}Object`],
      ...systemWeights.semibold,
      letterSpacing: Platform.OS === 'ios' && 0.75,
    },
    body: human[`body${colorSuffix}Object`],
    bodyEmphasized: {
      ...human[`body${colorSuffix}Object`],
      ...systemWeights.semibold,
      letterSpacing: Platform.OS === 'ios' && -0.41,
    },
    subhead: human[`subhead${colorSuffix}Object`],
    subheadShort: {
      ...human[`subhead${colorSuffix}Object`],
      lineHeight: 18,
    },
    subheadEmphasized: {
      ...human[`subhead${colorSuffix}Object`],
      ...systemWeights.semibold,
      letterSpacing: Platform.OS === 'ios' && -0.24,
    },
    callout: human[`callout${colorSuffix}Object`],
    footnote: human[`footnote${colorSuffix}Object`],
    footnoteEmphasized: {
      ...human[`footnote${colorSuffix}Object`],
      ...systemWeights.semibold,
      letterSpacing: Platform.OS === 'ios' && -0.08,
    },
    caption2: human[`caption2${colorSuffix}Object`],
    caption2Emphasized: {
      ...human[`caption2${colorSuffix}Object`],
      ...systemWeights.semibold,
      letterSpacing: Platform.OS === 'ios' && 0.06,
    },
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor('black'),
  ...suffixProperties(getStylesForColor('white'), 'White'),
});
