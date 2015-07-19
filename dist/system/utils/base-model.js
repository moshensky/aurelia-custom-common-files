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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Jhc2UtbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BR2EsU0FBUzs7Ozs7OztBQUFULGVBQVM7QUFDVCxpQkFEQSxTQUFTLEdBQ047Z0NBREgsU0FBUzs7QUFFbEIsY0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDMUIsY0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7QUFDNUIsY0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDM0I7O0FBTFUsaUJBQVMsV0FPcEIsV0FBVyxHQUFBLHFCQUFDLElBQUksRUFBRTtBQUNoQixjQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7QUFFekIsY0FBSSxJQUFJLEVBQUU7QUFDUixnQkFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztXQUNoRCxNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1dBQzNCO1NBQ0Y7O0FBZlUsaUJBQVMsV0FpQnBCLGFBQWEsR0FBQSx5QkFBRztBQUNkLGNBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNyQixrQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLGdCQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ3pCO1NBQ0Y7O0FBdEJVLGlCQUFTLFdBd0JwQixnQkFBZ0IsR0FBQSw0QkFBRztBQUNqQixjQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsZUFBSyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDckIsZ0JBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM3QixvQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtXQUNGOztBQUVELGlCQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDM0IsaUJBQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUN6QixpQkFBTyxNQUFNLENBQUMsZUFBZSxDQUFDOztBQUU5QixpQkFBTyxNQUFNLENBQUM7U0FDZjs7ZUFyQ1UsU0FBUzs7OzJCQUFULFNBQVMiLCJmaWxlIjoidXRpbHMvYmFzZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtb3NoZW5za3kgb24gNS8yNS8xNS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNJbkVkaXRNb2RlID0gZmFsc2U7XG4gICAgdGhpcy52YWxpZGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0ge307XG4gIH1cblxuICBzZXRFZGl0TW9kZShlZGl0KSB7XG4gICAgdGhpcy5pc0luRWRpdE1vZGUgPSBlZGl0O1xuXG4gICAgaWYgKGVkaXQpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0gdGhpcy5nZXRPd25Qcm9wZXJ0aWVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0ge307XG4gICAgfVxuICB9XG5cbiAgcmV2ZXJ0Q2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5pc0luRWRpdE1vZGUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fcHJldmlvdXNWYWx1ZXMpXG4gICAgICB0aGlzLnNldEVkaXRNb2RlKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBnZXRPd25Qcm9wZXJ0aWVzKCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHJlc3VsdFtwcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlIHJlc3VsdC5pc0luRWRpdE1vZGU7XG4gICAgZGVsZXRlIHJlc3VsdC52YWxpZGF0aW9uO1xuICAgIGRlbGV0ZSByZXN1bHQuX3ByZXZpb3VzVmFsdWVzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4iXX0=