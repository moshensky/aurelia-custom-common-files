'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var Enable = (function () {
  function Enable(element) {
    _classCallCheck(this, _Enable);

    this.element = element;
  }

  var _Enable = Enable;

  _createClass(_Enable, [{
    key: 'valueChanged',
    value: function valueChanged(newValue) {
      if (newValue) {
        this.element.disabled = '';
      } else {
        this.element.disabled = 'disabled';
      }
    }
  }]);

  Enable = (0, _aureliaFramework.inject)(Element)(Enable) || Enable;
  Enable = (0, _aureliaFramework.customAttribute)('enable')(Enable) || Enable;
  return Enable;
})();

exports.Enable = Enable;