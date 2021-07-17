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
var _systemDenseWeights = require("../helpers/systemDenseWeights");
var _systemDenseWeights2 = _interopRequireDefault(_systemDenseWeights);
var _human = require("./human");
var _human2 = _interopRequireDefault(_human);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getStylesForColor = function getStylesForColor(color) {
  var colorSuffix = color === "white" ? "White" : "";
  return {
    largeTitle: _extends(
      {},
      _human2.default["largeTitle" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 52 }
    ),
    title1: _extends(
      {},
      _human2.default["title1" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 43 }
    ),
    title2: _extends(
      {},
      _human2.default["title2" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 35 }
    ),
    title3: _extends(
      {},
      _human2.default["title3" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 32 }
    ),
    headline: _extends(
      {},
      _human2.default["headline" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
      { lineHeight: 28 }
    ),
    body: _extends(
      {},
      _human2.default["body" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 28 }
    ),
    callout: _extends(
      {},
      _human2.default["callout" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 26 }
    ),
    subhead: _extends(
      {},
      _human2.default["subhead" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 25 }
    ),
    footnote: _extends(
      {},
      _human2.default["footnote" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 23 }
    ),
    caption1: _extends(
      {},
      _human2.default["caption1" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 20 }
    ),
    caption2: _extends(
      {},
      _human2.default["caption2" + colorSuffix + "Object"],
      _systemDenseWeights2.default.regular,
      { lineHeight: 16 }
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
