'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var Enable = (function () {
  function Enable(element) {
    _classCallCheck(this, _Enable);

    this.element = element;
  }

  Enable.prototype.valueChanged = function valueChanged(newValue) {
    if (newValue) {
      this.element.disabled = '';
    } else {
      this.element.disabled = 'disabled';
    }
  };

  var _Enable = Enable;
  Enable = _aureliaFramework.inject(Element)(Enable) || Enable;
  Enable = _aureliaFramework.customAttribute('enable')(Enable) || Enable;
  return Enable;
})();

exports.Enable = Enable;