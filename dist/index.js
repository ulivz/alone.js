(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['src/alone.js', 'src/index.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('src/alone.js'), require('src/index.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.alone, global.index);
    global.index = mod.exports;
  }
})(this, function (_alone, _index) {
  'use strict';

  var _alone2 = _interopRequireDefault(_alone);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _alone2.default)();
  (0, _index2.default)();
});