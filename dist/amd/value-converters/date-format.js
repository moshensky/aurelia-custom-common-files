define(['exports', 'moment'], function (exports, _moment) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _moment2 = _interopRequireDefault(_moment);

  var DateFormatValueConverter = (function () {
    function DateFormatValueConverter() {
      _classCallCheck(this, DateFormatValueConverter);
    }

    DateFormatValueConverter.prototype.toView = function toView(value, format) {
      if (format) {
        return (0, _moment2['default'])(value).format(format);
      }
      return (0, _moment2['default'])(value).format('LL');
    };

    return DateFormatValueConverter;
  })();

  exports.DateFormatValueConverter = DateFormatValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFFYSx3QkFBd0I7YUFBeEIsd0JBQXdCOzRCQUF4Qix3QkFBd0I7OztBQUF4Qiw0QkFBd0IsV0FDbkMsTUFBTSxHQUFBLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsVUFBSSxNQUFNLEVBQUU7QUFDVixlQUFPLHlCQUFPLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUNyQztBQUNELGFBQU8seUJBQU8sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOztXQU5VLHdCQUF3Qjs7O1VBQXhCLHdCQUF3QixHQUF4Qix3QkFBd0IiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9kYXRlLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgfVxuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdCgnTEwnKTtcbiAgfVxufVxuIl19