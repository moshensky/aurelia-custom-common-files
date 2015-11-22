define(['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2hvcnQtZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BRWEsNkJBQTZCO2FBQTdCLDZCQUE2Qjs0QkFBN0IsNkJBQTZCOzs7aUJBQTdCLDZCQUE2Qjs7YUFDbEMsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixZQUFJLE1BQU0sRUFBRTtBQUNWLGlCQUFPLHlCQUFPLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztBQUNELGVBQU8seUJBQU8sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQ2xDOzs7V0FOVSw2QkFBNkI7OztVQUE3Qiw2QkFBNkIsR0FBN0IsNkJBQTZCIiwiZmlsZSI6InZhbHVlLWNvbnZlcnRlcnMvc2hvcnQtZGF0ZS1mb3JtYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBTaG9ydERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgfVxuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdCgnTCcpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=