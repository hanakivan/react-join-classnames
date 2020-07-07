"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(function (item) {
    if (typeof item === "undefined") {
      return false;
    } else if (item === null) {
      return false;
    } else if ([true, false].includes(item)) {
      return false;
    }

    return item.toString().trim().length > 0;
  }).join(" ");
};

exports.default = _default;