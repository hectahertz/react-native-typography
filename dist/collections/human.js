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
var _iOSColors = require("../helpers/iOSColors");
var _iOSColors2 = _interopRequireDefault(_iOSColors);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var colors = {
  black: _iOSColors2.default.black,
  white: _iOSColors2.default.white
};
var getStylesForColor = function getStylesForColor(color) {
  return {
    largeTitle: _extends(
      { fontSize: 34, lineHeight: 41 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(34)
            : undefined,
        color: colors[color]
      }
    ),
    title1: _extends(
      { fontSize: 28, lineHeight: 34 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(28)
            : undefined,
        color: colors[color]
      }
    ),
    title2: _extends(
      { fontSize: 22, lineHeight: 28 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(22)
            : undefined,
        color: colors[color]
      }
    ),
    title3: _extends(
      { fontSize: 20, lineHeight: 25 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(20)
            : undefined,
        color: colors[color]
      }
    ),
    headline: _extends(
      { fontSize: 17, lineHeight: 22 },
      _systemWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(17)
            : undefined,
        color: colors[color]
      }
    ),
    body: _extends(
      { fontSize: 17, lineHeight: 22 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(17)
            : undefined,
        color: colors[color]
      }
    ),
    callout: _extends(
      { fontSize: 16, lineHeight: 21 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(16)
            : undefined,
        color: colors[color]
      }
    ),
    subhead: _extends(
      { fontSize: 15, lineHeight: 20 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(15)
            : undefined,
        color: colors[color]
      }
    ),
    footnote: _extends(
      { fontSize: 13, lineHeight: 18 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(13)
            : undefined,
        color: colors[color]
      }
    ),
    caption1: _extends(
      { fontSize: 12, lineHeight: 16 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(12)
            : undefined,
        color: colors[color]
      }
    ),
    caption2: _extends(
      { fontSize: 11, lineHeight: 13 },
      _systemWeights2.default.regular,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(11)
            : undefined,
        color: colors[color]
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
