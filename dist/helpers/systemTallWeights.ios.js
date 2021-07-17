Object.defineProperty(exports, "__esModule", { value: true });
var _sanFranciscoWeights = require("../helpers/sanFranciscoWeights");
var _sanFranciscoWeights2 = _interopRequireDefault(_sanFranciscoWeights);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var systemTallWeights = {
  thin: _sanFranciscoWeights2.default.thin,
  light: _sanFranciscoWeights2.default.light,
  regular: _sanFranciscoWeights2.default.regular,
  semibold: _sanFranciscoWeights2.default.semibold,
  bold: _sanFranciscoWeights2.default.bold
};
exports.default = systemTallWeights;
