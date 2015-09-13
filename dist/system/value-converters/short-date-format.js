System.register(['moment'], function (_export) {
  'use strict';

  var moment, ShortDateFormatValueConverter;

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

        ShortDateFormatValueConverter.prototype.toView = function toView(value, format) {
          if (format) {
            return moment(value).format(format);
          }
          return moment(value).format('L');
        };

        return ShortDateFormatValueConverter;
      })();

      _export('ShortDateFormatValueConverter', ShortDateFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2hvcnQtZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2NBRWEsNkJBQTZCOzs7Ozs7Ozs7QUFBN0IsbUNBQTZCO2lCQUE3Qiw2QkFBNkI7Z0NBQTdCLDZCQUE2Qjs7O0FBQTdCLHFDQUE2QixXQUN4QyxNQUFNLEdBQUEsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixjQUFJLE1BQU0sRUFBRTtBQUNWLG1CQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDckM7QUFDRCxpQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDOztlQU5VLDZCQUE2Qjs7OytDQUE3Qiw2QkFBNkIiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9zaG9ydC1kYXRlLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIFNob3J0RGF0ZUZvcm1hdFZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbHVlLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0KSB7XG4gICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KCdMJyk7XG4gIH1cbn1cbiJdfQ==