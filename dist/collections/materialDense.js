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
var _material = require("./material");
var _material2 = _interopRequireDefault(_material);
var _systemDenseWeights = require("../helpers/systemDenseWeights");
var _systemDenseWeights2 = _interopRequireDefault(_systemDenseWeights);
var _sanFranciscoSpacing = require("../helpers/sanFranciscoSpacing");
var _sanFranciscoSpacing2 = _interopRequireDefault(_sanFranciscoSpacing);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getStylesForColor = function getStylesForColor(color) {
  var colorSuffix = color === "white" ? "White" : "";
  return {
    display4: _extends(
      {},
      _material2.default["display4" + colorSuffix + "Object"],
      _systemDenseWeights2.default.light,
      { lineHeight: 164 }
    ),
    display3: _extends(
      {},
      _material2.default["display3" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 82 }
    ),
    display2: _extends(
      {},
      _material2.default["display2" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 66 }
    ),
    display1: _extends(
      {},
      _material2.default["display1" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 50 }
    ),
    headline: _extends(
      {},
      _material2.default["headline" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 40 }
    ),
    title: _extends(
      {},
      _material2.default["title" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
      {
        fontSize: 21,
        lineHeight: 36,
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(21)
            : undefined
      }
    ),
    subheading: _extends(
      {},
      _material2.default["subheading" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      {
        fontSize: 17,
        lineHeight: 30,
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(17)
            : undefined
      }
    ),
    body2: _extends(
      {},
      _material2.default["body2" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
      {
        fontSize: 15,
        lineHeight: 30,
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(15)
            : undefined
      }
    ),
    body1: _extends(
      {},
      _material2.default["body1" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      {
        fontSize: 15,
        lineHeight: 26,
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(15)
            : undefined
      }
    ),
    caption: _extends(
      {},
      _material2.default["caption" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      {
        fontSize: 13,
        lineHeight: 20,
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(13)
            : undefined
      }
    ),
    button: _extends(
      {},
      _material2.default["button" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
      {
        fontSize: 15,
        lineHeight: 26,
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios"
            ? (0, _sanFranciscoSpacing2.default)(15)
            : undefined
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
