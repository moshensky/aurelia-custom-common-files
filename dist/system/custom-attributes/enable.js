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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBT2EsTUFBTTs7Ozs7O2lDQUpYLE1BQU07MENBQUUsZUFBZTs7O0FBSWxCLFlBQU07QUFDTixpQkFEQSxNQUFNLENBQ0wsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3NCQUhVLE1BQU07OzBCQUtqQixZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFO0FBQ3JCLGNBQUksUUFBUSxFQUFFO0FBQ1osZ0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtXQUMzQixNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQTtXQUNuQztTQUNGOztBQVhVLGNBQU0sR0FEbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILE1BQU0sS0FBTixNQUFNO0FBQU4sY0FBTSxHQUZsQixlQUFlLENBQUMsUUFBUSxDQUFDLENBRWIsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJjdXN0b20tYXR0cmlidXRlcy9lbmFibGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbW9zaGVuc2t5IG9uIDUvMjQvMTUuXG4gKi9cbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSgnZW5hYmxlJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBFbmFibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gJ2Rpc2FibGVkJ1xuICAgIH1cbiAgfVxufVxuIl19