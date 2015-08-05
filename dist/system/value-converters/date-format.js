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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2NBRWEsd0JBQXdCOzs7Ozs7Ozs7QUFBeEIsOEJBQXdCO2lCQUF4Qix3QkFBd0I7Z0NBQXhCLHdCQUF3Qjs7O0FBQXhCLGdDQUF3QixXQUNuQyxNQUFNLEdBQUEsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixjQUFJLE1BQU0sRUFBRTtBQUNWLG1CQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDckM7QUFDRCxpQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DOztlQU5VLHdCQUF3QiIsImZpbGUiOiJ2YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KHZhbHVlLCBmb3JtYXQpIHtcclxuICAgIGlmIChmb3JtYXQpIHtcclxuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoJ0xMJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==