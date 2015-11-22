System.register(['moment'], function (_export) {
  'use strict';

  var moment, ShortDateFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      ShortDateFormatValueConverter = (function () {
        function ShortDateFormatValueConverter() {
          _classCallCheck(this, ShortDateFormatValueConverter);
        }

        _createClass(ShortDateFormatValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            if (format) {
              return moment(value).format(format);
            }
            return moment(value).format('L');
          }
        }]);

        return ShortDateFormatValueConverter;
      })();

      _export('ShortDateFormatValueConverter', ShortDateFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2hvcnQtZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2NBRWEsNkJBQTZCOzs7Ozs7Ozs7OztBQUE3QixtQ0FBNkI7aUJBQTdCLDZCQUE2QjtnQ0FBN0IsNkJBQTZCOzs7cUJBQTdCLDZCQUE2Qjs7aUJBQ2xDLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsZ0JBQUksTUFBTSxFQUFFO0FBQ1YscUJBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztBQUNELG1CQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7V0FDbEM7OztlQU5VLDZCQUE2Qjs7OytDQUE3Qiw2QkFBNkIiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9zaG9ydC1kYXRlLWZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIFNob3J0RGF0ZUZvcm1hdFZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbHVlLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0KSB7XG4gICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KCdMJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==