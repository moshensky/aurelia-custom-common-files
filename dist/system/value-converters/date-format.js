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