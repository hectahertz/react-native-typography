Object.defineProperty(exports, "__esModule", { value: true });
var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
var _reactPrimitives = require("react-primitives");
var _CombinedStyleSheet = require("../internal/CombinedStyleSheet");
var _CombinedStyleSheet2 = _interopRequireDefault(_CombinedStyleSheet);
var _suffixProperties = require("../internal/suffixProperties");
var _suffixProperties2 = _interopRequireDefault(_suffixProperties);
var _systemWeights = require("../helpers/systemWeights");
var _systemWeights2 = _interopRequireDefault(_systemWeights);
var _sanFranciscoSpacing = require("../helpers/sanFranciscoSpacing");
var _sanFranciscoSpacing2 = _interopRequireDefault(_sanFranciscoSpacing);
var _materialColors = require("../helpers/materialColors");
var _materialColors2 = _interopRequireDefault(_materialColors);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var colors = {
  black: {
    primary: _materialColors2.default.blackPrimary,
    secondary: _materialColors2.default.blackSecondary,
    tertiary: _materialColors2.default.blackTertiary
  },
  white: {
    primary: _materialColors2.default.whitePrimary,
    secondary: _materialColors2.default.whiteSecondary,
    tertiary: _materialColors2.default.whiteTertiary
  }
};
var getStylesForColor = function getStylesForColor(color) {
  return {
    display4: _extends(
      { fontSize: 112, lineHeight: 128 },
      _systemWeights2.default.light,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(112)
            : undefined,
        color: colors[color].secondary
      }
    ),
    display3: _extends(
      { fontSize: 56, lineHeight: 64 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(56)
            : undefined,
        color: colors[color].secondary
      }
    ),
    display2: _extends(
      { fontSize: 45, lineHeight: 52 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(45)
            : undefined,
        color: colors[color].secondary
      }
    ),
    display1: _extends(
      { fontSize: 34, lineHeight: 40 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(34)
            : undefined,
        color: colors[color].secondary
      }
    ),
    headline: _extends(
      { fontSize: 24, lineHeight: 32 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(24)
            : undefined,
        color: colors[color].primary
      }
    ),
    title: _extends(
      { fontSize: 20, lineHeight: 28 },
      _systemWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(20)
            : undefined,
        color: colors[color].primary
      }
    ),
    subheading: _extends(
      { fontSize: 16, lineHeight: 24 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(16)
            : undefined,
        color: colors[color].primary
      }
    ),
    body2: _extends(
      { fontSize: 14, lineHeight: 24 },
      _systemWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(14)
            : undefined,
        color: colors[color].primary
      }
    ),
    body1: _extends(
      { fontSize: 14, lineHeight: 20 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(14)
            : undefined,
        color: colors[color].primary
      }
    ),
    caption: _extends(
      { fontSize: 12, lineHeight: 16 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(12)
            : undefined,
        color: colors[color].secondary
      }
    ),
    button: _extends(
      { fontSize: 14, lineHeight: 20 },
      _systemWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(14)
            : undefined,
        color: colors[color].primary
      }
    )
  };
};
exports.default = _CombinedStyleSheet2.default.create(
  _extends(
    {},
    getStylesForColor("black"),
    (0, _suffixProperties2.default)(getStylesForColor("white"), "White")
  )
);
