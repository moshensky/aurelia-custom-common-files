define(["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var BaseModel = (function () {
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

  exports.BaseModel = BaseModel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Jhc2UtbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztNQUdhLFNBQVM7QUFDVCxhQURBLFNBQVMsR0FDTjs0QkFESCxTQUFTOztBQUVsQixVQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMxQixVQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUM1QixVQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztLQUMzQjs7QUFMVSxhQUFTLFdBT3BCLFdBQVcsR0FBQSxxQkFBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7O0FBRXpCLFVBQUksSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztPQUNoRCxNQUFNO0FBQ0wsWUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7T0FDM0I7S0FDRjs7QUFmVSxhQUFTLFdBaUJwQixhQUFhLEdBQUEseUJBQUc7QUFDZCxVQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDckIsY0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLFlBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDekI7S0FDRjs7QUF0QlUsYUFBUyxXQXdCcEIsZ0JBQWdCLEdBQUEsNEJBQUc7QUFDakIsVUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFdBQUssSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQ3JCLFlBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM3QixnQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtPQUNGOztBQUVELGFBQU8sTUFBTSxDQUFDLFlBQVksQ0FBQztBQUMzQixhQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDekIsYUFBTyxNQUFNLENBQUMsZUFBZSxDQUFDOztBQUU5QixhQUFPLE1BQU0sQ0FBQztLQUNmOztXQXJDVSxTQUFTOzs7VUFBVCxTQUFTLEdBQVQsU0FBUyIsImZpbGUiOiJ1dGlscy9iYXNlLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI1LzE1LlxuICovXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0luRWRpdE1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB7fTtcbiAgfVxuXG4gIHNldEVkaXRNb2RlKGVkaXQpIHtcbiAgICB0aGlzLmlzSW5FZGl0TW9kZSA9IGVkaXQ7XG5cbiAgICBpZiAoZWRpdCkge1xuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB0aGlzLmdldE93blByb3BlcnRpZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICByZXZlcnRDaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmlzSW5FZGl0TW9kZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9wcmV2aW91c1ZhbHVlcylcbiAgICAgIHRoaXMuc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldE93blByb3BlcnRpZXMoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgcmVzdWx0W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUgcmVzdWx0LmlzSW5FZGl0TW9kZTtcbiAgICBkZWxldGUgcmVzdWx0LnZhbGlkYXRpb247XG4gICAgZGVsZXRlIHJlc3VsdC5fcHJldmlvdXNWYWx1ZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbiJdfQ==