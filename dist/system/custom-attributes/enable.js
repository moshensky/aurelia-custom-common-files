System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, customAttribute, Enable;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

        Enable = inject(Element)(Enable) || Enable;
        Enable = customAttribute('enable')(Enable) || Enable;
        return Enable;
      })();

      _export('Enable', Enable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBT2EsTUFBTTs7Ozs7Ozs7aUNBSlgsTUFBTTswQ0FBRSxlQUFlOzs7QUFJbEIsWUFBTTtBQUNOLGlCQURBLE1BQU0sQ0FDTCxPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7c0JBSFUsTUFBTTs7OztpQkFLTCxzQkFBQyxRQUFRLEVBQUU7QUFDckIsZ0JBQUksUUFBUSxFQUFFO0FBQ1osa0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTthQUMzQixNQUFNO0FBQ0wsa0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQTthQUNuQztXQUNGOzs7QUFYVSxjQUFNLEdBRGxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxNQUFNLEtBQU4sTUFBTTtBQUFOLGNBQU0sR0FGbEIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUViLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiY3VzdG9tLWF0dHJpYnV0ZXMvZW5hYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI0LzE1LlxuICovXG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoJ2VuYWJsZScpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgRW5hYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICdkaXNhYmxlZCdcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==