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
var _suffixProperties = require("./suffixProperties");
var _suffixProperties2 = _interopRequireDefault(_suffixProperties);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var create = function create(object) {
  return _extends(
    {},
    (0, _suffixProperties2.default)(object, "Object"),
    _reactPrimitives.StyleSheet.create(object)
  );
};
exports.default = { create: create };
