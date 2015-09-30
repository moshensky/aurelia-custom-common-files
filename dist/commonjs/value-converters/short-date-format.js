'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var ShortDateFormatValueConverter = (function () {
  function ShortDateFormatValueConverter() {
    _classCallCheck(this, ShortDateFormatValueConverter);
  }

  ShortDateFormatValueConverter.prototype.toView = function toView(value, format) {
    if (format) {
      return (0, _moment2['default'])(value).format(format);
    }
    return (0, _moment2['default'])(value).format('L');
  };

  return ShortDateFormatValueConverter;
})();

exports.ShortDateFormatValueConverter = ShortDateFormatValueConverter;