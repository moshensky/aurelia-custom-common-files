System.register(['moment'], function (_export) {
  'use strict';

  var moment, DateFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

        _createClass(DateFormatValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            if (format) {
              return moment(value).format(format);
            }
            return moment(value).format('LL');
          }
        }]);

        return DateFormatValueConverter;
      })();

      _export('DateFormatValueConverter', DateFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2NBRWEsd0JBQXdCOzs7Ozs7Ozs7OztBQUF4Qiw4QkFBd0I7aUJBQXhCLHdCQUF3QjtnQ0FBeEIsd0JBQXdCOzs7cUJBQXhCLHdCQUF3Qjs7aUJBQzdCLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsZ0JBQUksTUFBTSxFQUFFO0FBQ1YscUJBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztBQUNELG1CQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDbkM7OztlQU5VLHdCQUF3Qjs7OzBDQUF4Qix3QkFBd0IiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9kYXRlLWZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgfVxuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdCgnTEwnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9