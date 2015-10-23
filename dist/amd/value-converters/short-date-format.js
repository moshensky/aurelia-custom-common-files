define(['exports', 'moment'], function (exports, _moment) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _moment2 = _interopRequireDefault(_moment);

  var ShortDateFormatValueConverter = (function () {
    function ShortDateFormatValueConverter() {
      _classCallCheck(this, ShortDateFormatValueConverter);
    }

    ShortDateFormatValueConverter.prototype.toView = function toView(value, format) {
      if (format) {
        return _moment2['default'](value).format(format);
      }
      return _moment2['default'](value).format('L');
    };

    return ShortDateFormatValueConverter;
  })();

  exports.ShortDateFormatValueConverter = ShortDateFormatValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2hvcnQtZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFFYSw2QkFBNkI7YUFBN0IsNkJBQTZCOzRCQUE3Qiw2QkFBNkI7OztBQUE3QixpQ0FBNkIsV0FDeEMsTUFBTSxHQUFBLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsVUFBSSxNQUFNLEVBQUU7QUFDVixlQUFPLG9CQUFPLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUNyQztBQUNELGFBQU8sb0JBQU8sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDOztXQU5VLDZCQUE2Qjs7O1VBQTdCLDZCQUE2QixHQUE3Qiw2QkFBNkIiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9zaG9ydC1kYXRlLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIFNob3J0RGF0ZUZvcm1hdFZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbHVlLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0KSB7XG4gICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KCdMJyk7XG4gIH1cbn1cbiJdfQ==