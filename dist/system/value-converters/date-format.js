System.register(['moment'], function (_export) {
  'use strict';

  var moment, DateFormatValueConverter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        DateFormatValueConverter.prototype.toView = function toView(value, format) {
          if (format) {
            return moment(value).format(format);
          }
          return moment(value).format('LL');
        };

        return DateFormatValueConverter;
      })();

      _export('DateFormatValueConverter', DateFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2NBRWEsd0JBQXdCOzs7Ozs7Ozs7QUFBeEIsOEJBQXdCO2lCQUF4Qix3QkFBd0I7Z0NBQXhCLHdCQUF3Qjs7O0FBQXhCLGdDQUF3QixXQUNuQyxNQUFNLEdBQUEsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixjQUFJLE1BQU0sRUFBRTtBQUNWLG1CQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDckM7QUFDRCxpQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DOztlQU5VLHdCQUF3Qjs7OzBDQUF4Qix3QkFBd0IiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9kYXRlLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgfVxuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdCgnTEwnKTtcbiAgfVxufVxuIl19