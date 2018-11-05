Object.defineProperty(exports, "__esModule", { value: true });
var _notoCJKWeights = require("../helpers/notoCJKWeights");
var _notoCJKWeights2 = _interopRequireDefault(_notoCJKWeights);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var systemDenseWeights = {
  thin: _notoCJKWeights2.default.regular,
  light: _notoCJKWeights2.default.regular,
  regular: _notoCJKWeights2.default.regular,
  semibold: _notoCJKWeights2.default.bold,
  bold: _notoCJKWeights2.default.bold
};
exports.default = systemDenseWeights;
