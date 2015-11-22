'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var ShortDateFormatValueConverter = (function () {
  function ShortDateFormatValueConverter() {
    _classCallCheck(this, ShortDateFormatValueConverter);
  }

  _createClass(ShortDateFormatValueConverter, [{
    key: 'toView',
    value: function toView(value, format) {
      if (format) {
        return (0, _moment2['default'])(value).format(format);
      }
      return (0, _moment2['default'])(value).format('L');
    }
  }]);

  return ShortDateFormatValueConverter;
})();

exports.ShortDateFormatValueConverter = ShortDateFormatValueConverter;