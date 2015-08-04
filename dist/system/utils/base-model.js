System.register([], function (_export) {
  "use strict";

  var BaseModel;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      BaseModel = (function () {
        function BaseModel() {
          _classCallCheck(this, BaseModel);

          this.isInEditMode = false;
          this.validation = undefined;
          this._previousValues = {};
        }

        BaseModel.prototype.setEditMode = function setEditMode(edit) {
          this.isInEditMode = edit;

          if (edit) {
            this._previousValues = this.getOwnProperties();
          } else {
            this._previousValues = {};
          }
        };

        BaseModel.prototype.revertChanges = function revertChanges() {
          if (this.isInEditMode) {
            Object.assign(this, this._previousValues);
            this.setEditMode(false);
          }
        };

        BaseModel.prototype.getOwnProperties = function getOwnProperties() {
          var result = {};
          for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
              result[prop] = this[prop];
            }
          }

          delete result.isInEditMode;
          delete result.validation;
          delete result._previousValues;

          return result;
        };

        return BaseModel;
      })();

      _export("BaseModel", BaseModel);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Jhc2UtbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BR2EsU0FBUzs7Ozs7OztBQUFULGVBQVM7QUFDVCxpQkFEQSxTQUFTLEdBQ047Z0NBREgsU0FBUzs7QUFFbEIsY0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDMUIsY0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7QUFDNUIsY0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDM0I7O0FBTFUsaUJBQVMsV0FPcEIsV0FBVyxHQUFBLHFCQUFDLElBQUksRUFBRTtBQUNoQixjQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7QUFFekIsY0FBSSxJQUFJLEVBQUU7QUFDUixnQkFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztXQUNoRCxNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1dBQzNCO1NBQ0Y7O0FBZlUsaUJBQVMsV0FpQnBCLGFBQWEsR0FBQSx5QkFBRztBQUNkLGNBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNyQixrQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLGdCQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ3pCO1NBQ0Y7O0FBdEJVLGlCQUFTLFdBd0JwQixnQkFBZ0IsR0FBQSw0QkFBRztBQUNqQixjQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsZUFBSyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDckIsZ0JBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM3QixvQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtXQUNGOztBQUVELGlCQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDM0IsaUJBQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUN6QixpQkFBTyxNQUFNLENBQUMsZUFBZSxDQUFDOztBQUU5QixpQkFBTyxNQUFNLENBQUM7U0FDZjs7ZUFyQ1UsU0FBUyIsImZpbGUiOiJ1dGlscy9iYXNlLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW9zaGVuc2t5IG9uIDUvMjUvMTUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaXNJbkVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9wcmV2aW91c1ZhbHVlcyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgc2V0RWRpdE1vZGUoZWRpdCkge1xyXG4gICAgdGhpcy5pc0luRWRpdE1vZGUgPSBlZGl0O1xyXG5cclxuICAgIGlmIChlZGl0KSB7XHJcbiAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0gdGhpcy5nZXRPd25Qcm9wZXJ0aWVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlcyA9IHt9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV2ZXJ0Q2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmlzSW5FZGl0TW9kZSkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX3ByZXZpb3VzVmFsdWVzKVxyXG4gICAgICB0aGlzLnNldEVkaXRNb2RlKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE93blByb3BlcnRpZXMoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICByZXN1bHRbcHJvcF0gPSB0aGlzW3Byb3BdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlIHJlc3VsdC5pc0luRWRpdE1vZGU7XHJcbiAgICBkZWxldGUgcmVzdWx0LnZhbGlkYXRpb247XHJcbiAgICBkZWxldGUgcmVzdWx0Ll9wcmV2aW91c1ZhbHVlcztcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuIl19