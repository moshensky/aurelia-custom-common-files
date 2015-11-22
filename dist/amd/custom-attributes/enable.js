define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQU9hLE1BQU07QUFDTixhQURBLE1BQU0sQ0FDTCxPQUFPLEVBQUU7OztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7a0JBSFUsTUFBTTs7OzthQUtMLHNCQUFDLFFBQVEsRUFBRTtBQUNyQixZQUFJLFFBQVEsRUFBRTtBQUNaLGNBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtTQUMzQixNQUFNO0FBQ0wsY0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFBO1NBQ25DO09BQ0Y7OztBQVhVLFVBQU0sR0FEbEIsc0JBSE8sTUFBTSxFQUdOLE9BQU8sQ0FBQyxDQUNILE1BQU0sS0FBTixNQUFNO0FBQU4sVUFBTSxHQUZsQixzQkFGZSxlQUFlLEVBRWQsUUFBUSxDQUFDLENBRWIsTUFBTSxLQUFOLE1BQU07V0FBTixNQUFNOzs7VUFBTixNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJjdXN0b20tYXR0cmlidXRlcy9lbmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbW9zaGVuc2t5IG9uIDUvMjQvMTUuXG4gKi9cbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSgnZW5hYmxlJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBFbmFibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gJ2Rpc2FibGVkJ1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9