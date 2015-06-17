define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Enable = (function () {
    function Enable(element) {
      _classCallCheck(this, _Enable);

      this.element = element;
    }

    var _Enable = Enable;

    _Enable.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.element.disabled = '';
      } else {
        this.element.disabled = 'disabled';
      }
    };

    Enable = (0, _aureliaFramework.inject)(Element)(Enable) || Enable;
    Enable = (0, _aureliaFramework.customAttribute)('enable')(Enable) || Enable;
    return Enable;
  })();

  exports.Enable = Enable;
});