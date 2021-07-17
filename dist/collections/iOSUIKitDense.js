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
var _humanDense = require("./humanDense");
var _humanDense2 = _interopRequireDefault(_humanDense);
var _systemDenseWeights = require("../helpers/systemDenseWeights");
var _systemDenseWeights2 = _interopRequireDefault(_systemDenseWeights);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getStylesForColor = function getStylesForColor(color) {
  var colorSuffix = color === "white" ? "White" : "";
  return {
    largeTitleEmphasized: _extends(
      {},
      _humanDense2.default["largeTitle" + colorSuffix + "Object"],
      _systemDenseWeights2.default.bold,
      {
        letterSpacing: _reactPrimitives.Platform.OS === "ios" ? 0.41 : undefined
      }
    ),
    title3: _humanDense2.default["title3" + colorSuffix + "Object"],
    title3Emphasized: _extends(
      {},
      _humanDense2.default["title3" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
      {
        letterSpacing: _reactPrimitives.Platform.OS === "ios" ? 0.75 : undefined
      }
    ),
    body: _humanDense2.default["body" + colorSuffix + "Object"],
    bodyEmphasized: _extends(
      {},
      _humanDense2.default["body" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios" ? -0.41 : undefined
      }
    ),
    subhead: _humanDense2.default["subhead" + colorSuffix + "Object"],
    subheadShort: _extends(
      {},
      _humanDense2.default["subhead" + colorSuffix + "Object"],
      { lineHeight: 23 }
    ),
    subheadEmphasized: _extends(
      {},
      _humanDense2.default["subhead" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios" ? -0.24 : undefined
      }
    ),
    callout: _humanDense2.default["callout" + colorSuffix + "Object"],
    footnote: _humanDense2.default["footnote" + colorSuffix + "Object"],
    footnoteEmphasized: _extends(
      {},
      _humanDense2.default["footnote" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
      {
        letterSpacing:
          _reactPrimitives.Platform.OS === "ios" ? -0.08 : undefined
      }
    ),
    caption2: _humanDense2.default["caption2" + colorSuffix + "Object"],
    caption2Emphasized: _extends(
      {},
      _humanDense2.default["caption2" + colorSuffix + "Object"],
      _systemDenseWeights2.default.semibold,
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
