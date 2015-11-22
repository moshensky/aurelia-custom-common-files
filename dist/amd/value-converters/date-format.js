define(['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _moment2 = _interopRequireDefault(_moment);

  var DateFormatValueConverter = (function () {
    function DateFormatValueConverter() {
      _classCallCheck(this, DateFormatValueConverter);
    }

    _createClass(DateFormatValueConverter, [{
      key: 'toView',
      value: function toView(value, format) {
        if (format) {
          return (0, _moment2['default'])(value).format(format);
        }
        return (0, _moment2['default'])(value).format('LL');
      }
    }]);

    return DateFormatValueConverter;
  })();

  exports.DateFormatValueConverter = DateFormatValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BRWEsd0JBQXdCO2FBQXhCLHdCQUF3Qjs0QkFBeEIsd0JBQXdCOzs7aUJBQXhCLHdCQUF3Qjs7YUFDN0IsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixZQUFJLE1BQU0sRUFBRTtBQUNWLGlCQUFPLHlCQUFPLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztBQUNELGVBQU8seUJBQU8sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ25DOzs7V0FOVSx3QkFBd0I7OztVQUF4Qix3QkFBd0IsR0FBeEIsd0JBQXdCIiwiZmlsZSI6InZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0VmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsdWUsIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQpIHtcbiAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuICAgIH1cbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoJ0xMJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==