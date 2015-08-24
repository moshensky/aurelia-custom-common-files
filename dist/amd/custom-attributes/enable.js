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

    Enable = _aureliaFramework.inject(Element)(Enable) || Enable;
    Enable = _aureliaFramework.customAttribute('enable')(Enable) || Enable;
    return Enable;
  })();

  exports.Enable = Enable;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O01BT2EsTUFBTTtBQUNOLGFBREEsTUFBTSxDQUNMLE9BQU8sRUFBRTs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztrQkFIVSxNQUFNOztzQkFLakIsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRTtBQUNyQixVQUFJLFFBQVEsRUFBRTtBQUNaLFlBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQTtPQUN6QixNQUFNO0FBQ0wsWUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUMsVUFBVSxDQUFBO09BQ2pDO0tBQ0Y7O0FBWFUsVUFBTSxHQURsQixrQkFITyxNQUFNLENBR04sT0FBTyxDQUFDLENBQ0gsTUFBTSxLQUFOLE1BQU07QUFBTixVQUFNLEdBRmxCLGtCQUZlLGVBQWUsQ0FFZCxRQUFRLENBQUMsQ0FFYixNQUFNLEtBQU4sTUFBTTtXQUFOLE1BQU07OztVQUFOLE1BQU0sR0FBTixNQUFNIiwiZmlsZSI6ImN1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtb3NoZW5za3kgb24gNS8yNC8xNS5cbiAqL1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCdlbmFibGUnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEVuYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQ9JydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkPSdkaXNhYmxlZCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==