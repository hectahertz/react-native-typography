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
var _humanTall = require("./humanTall");
var _humanTall2 = _interopRequireDefault(_humanTall);
var _systemTallWeights = require("../helpers/systemTallWeights");
var _systemTallWeights2 = _interopRequireDefault(_systemTallWeights);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getStylesForColor = function getStylesForColor(color) {
  var colorSuffix = color === "white" ? "White" : "";
  return {
    largeTitleEmphasized: _extends(
      {},
      _humanTall2.default["largeTitle" + colorSuffix + "Object"],
      _systemTallWeights2.default.bold,
      {
        letterSpacing: _reactPrimitives.Platform.OS === "ios" ? 0.41 : undefined
      }
    ),
    title3: _humanTall2.default["title3" + colorSuffix + "Object"],
    title3Emphasized: _extends(
      {},
      _humanTall2.default["title3" + colorSuffix + "Object"],
      _systemTallWeights2.default.semibold,
      {
        letterSpacing: _reactPrimitives.Platform.OS === "ios" ? 0.75 : undefined
      }
    ),
    body: _humanTall2.default["body" + colorSuffix + "Object"],
    bodyEmphasized: _extends(
      {},
      _humanTall2.default["body" + colorSuffix + "Object"],
      _systemTallWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios" ? -0.41 : undefined
      }
    ),
    subhead: _humanTall2.default["subhead" + colorSuffix + "Object"],
    subheadShort: _extends(
      {},
      _humanTall2.default["subhead" + colorSuffix + "Object"],
      { lineHeight: 23 }
    ),
    subheadEmphasized: _extends(
      {},
      _humanTall2.default["subhead" + colorSuffix + "Object"],
      _systemTallWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios" ? -0.24 : undefined
      }
    ),
    callout: _humanTall2.default["callout" + colorSuffix + "Object"],
    footnote: _humanTall2.default["footnote" + colorSuffix + "Object"],
    footnoteEmphasized: _extends(
      {},
      _humanTall2.default["footnote" + colorSuffix + "Object"],
      _systemTallWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios" ? -0.08 : undefined
      }
    ),
    caption2: _humanTall2.default["caption2" + colorSuffix + "Object"],
    caption2Emphasized: _extends(
      {},
      _humanTall2.default["caption2" + colorSuffix + "Object"],
      _systemTallWeights2.default.semibold,
      {
        letterSpacing: _reactPrimitives.Platform.OS === "ios" ? 0.06 : undefined
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
