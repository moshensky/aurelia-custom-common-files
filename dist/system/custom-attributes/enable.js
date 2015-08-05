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

        Enable.prototype.valueChanged = function valueChanged(newValue) {
          if (newValue) {
            this.element.disabled = '';
          } else {
            this.element.disabled = 'disabled';
          }
        };

        var _Enable = Enable;
        Enable = inject(Element)(Enable) || Enable;
        Enable = customAttribute('enable')(Enable) || Enable;
        return Enable;
      })();

      _export('Enable', Enable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBT2EsTUFBTTs7Ozs7O2lDQUpYLE1BQU07MENBQUUsZUFBZTs7O0FBSWxCLFlBQU07QUFDTixpQkFEQSxNQUFNLENBQ0wsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O0FBSFUsY0FBTSxXQUtqQixZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFO0FBQ3JCLGNBQUksUUFBUSxFQUFFO0FBQ1osZ0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQTtXQUN6QixNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFDLFVBQVUsQ0FBQTtXQUNqQztTQUNGOztzQkFYVSxNQUFNO0FBQU4sY0FBTSxHQURsQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsTUFBTSxLQUFOLE1BQU07QUFBTixjQUFNLEdBRmxCLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FFYixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoiY3VzdG9tLWF0dHJpYnV0ZXMvZW5hYmxlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW9zaGVuc2t5IG9uIDUvMjQvMTUuXHJcbiAqL1xyXG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKCdlbmFibGUnKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBFbmFibGUge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUpIHtcclxuICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQ9JydcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZD0nZGlzYWJsZWQnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==