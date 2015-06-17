System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, customAttribute, Enable;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }],
    execute: function () {
      Enable = (function () {
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

        Enable = inject(Element)(Enable) || Enable;
        Enable = customAttribute('enable')(Enable) || Enable;
        return Enable;
      })();

      _export('Enable', Enable);
    }
  };
});