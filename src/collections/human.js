import { Platform } from 'react-native';
import CombinedStyleSheet from '../internal/CombinedStyleSheet';
import suffixProperties from '../internal/suffixProperties';
import systemWeights from '../helpers/systemWeights';
import sanFranciscoSpacing from '../helpers/sanFranciscoSpacing';
import iOSColors from '../helpers/iOSColors';

// https://developer.apple.com/ios/human-interface-guidelines/visual-design/typography/

const colors = {
  black: iOSColors.black,
  white: iOSColors.white,
};

const getStylesForColor = color => ({
  largeTitle: {
    fontSize: 34,
    lineHeight: 41,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(34),
    color: colors[color],
  },
  title1: {
    fontSize: 28,
    lineHeight: 34,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(28),
    color: colors[color],
  },
  title2: {
    fontSize: 22,
    lineHeight: 28,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(22),
    color: colors[color],
  },
  title3: {
    fontSize: 20,
    lineHeight: 25,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(20),
    color: colors[color],
  },
  headline: {
    fontSize: 17,
    lineHeight: 22,
    ...systemWeights.semibold,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(17),
    color: colors[color],
  },
  body: {
    fontSize: 17,
    lineHeight: 22,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(17),
    color: colors[color],
  },
  callout: {
    fontSize: 16,
    lineHeight: 21,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(16),
    color: colors[color],
  },
  subhead: {
    fontSize: 15,
    lineHeight: 20,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(15),
    color: colors[color],
  },
  footnote: {
    fontSize: 13,
    lineHeight: 18,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(13),
    color: colors[color],
  },
  caption1: {
    fontSize: 12,
    lineHeight: 16,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(12),
    color: colors[color],
  },
  caption2: {
    fontSize: 11,
    lineHeight: 13,
    ...systemWeights.regular,
    letterSpacing: Platform.OS === 'ios' && sanFranciscoSpacing(11),
    color: colors[color],
  },
});

export default CombinedStyleSheet.create({
  ...getStylesForColor('black'),
  ...suffixProperties(getStylesForColor('white'), 'White'),
});
