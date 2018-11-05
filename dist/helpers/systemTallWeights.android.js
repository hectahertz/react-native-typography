Object.defineProperty(exports, "__esModule", { value: true });
var _notoTallWeights = require("../helpers/notoTallWeights");
var _notoTallWeights2 = _interopRequireDefault(_notoTallWeights);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var systemTallWeights = {
  thin: _notoTallWeights2.default.regular,
  light: _notoTallWeights2.default.regular,
  regular: _notoTallWeights2.default.regular,
  semibold: _notoTallWeights2.default.bold,
  bold: _notoTallWeights2.default.bold
};
exports.default = systemTallWeights;
