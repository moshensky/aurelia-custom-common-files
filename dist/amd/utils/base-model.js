define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var BaseModel = (function () {
    function BaseModel() {
      _classCallCheck(this, BaseModel);

      this.isInEditMode = false;
      this.validation = undefined;
      this._previousValues = {};
    }

    _createClass(BaseModel, [{
      key: "setEditMode",
      value: function setEditMode(edit) {
        this.isInEditMode = edit;

        if (edit) {
          this._previousValues = this.getOwnProperties();
        } else {
          this._previousValues = {};
        }
      }
    }, {
      key: "revertChanges",
      value: function revertChanges() {
        if (this.isInEditMode) {
          Object.assign(this, this._previousValues);
          this.setEditMode(false);
        }
      }
    }, {
      key: "getOwnProperties",
      value: function getOwnProperties() {
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
      }
    }]);

    return BaseModel;
  })();

  exports.BaseModel = BaseModel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Jhc2UtbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFHYSxTQUFTO0FBQ1QsYUFEQSxTQUFTLEdBQ047NEJBREgsU0FBUzs7QUFFbEIsVUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDMUIsVUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7QUFDNUIsVUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7S0FDM0I7O2lCQUxVLFNBQVM7O2FBT1QscUJBQUMsSUFBSSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztBQUV6QixZQUFJLElBQUksRUFBRTtBQUNSLGNBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDaEQsTUFBTTtBQUNMLGNBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQzNCO09BQ0Y7OzthQUVZLHlCQUFHO0FBQ2QsWUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3JCLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDekMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtPQUNGOzs7YUFFZSw0QkFBRztBQUNqQixZQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsYUFBSyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDckIsY0FBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzdCLGtCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1dBQzNCO1NBQ0Y7O0FBRUQsZUFBTyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQzNCLGVBQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUN6QixlQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUM7O0FBRTlCLGVBQU8sTUFBTSxDQUFDO09BQ2Y7OztXQXJDVSxTQUFTOzs7VUFBVCxTQUFTLEdBQVQsU0FBUyIsImZpbGUiOiJ1dGlscy9iYXNlLW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI1LzE1LlxuICovXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0luRWRpdE1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB7fTtcbiAgfVxuXG4gIHNldEVkaXRNb2RlKGVkaXQpIHtcbiAgICB0aGlzLmlzSW5FZGl0TW9kZSA9IGVkaXQ7XG5cbiAgICBpZiAoZWRpdCkge1xuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB0aGlzLmdldE93blByb3BlcnRpZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICByZXZlcnRDaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmlzSW5FZGl0TW9kZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9wcmV2aW91c1ZhbHVlcylcbiAgICAgIHRoaXMuc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldE93blByb3BlcnRpZXMoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgcmVzdWx0W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUgcmVzdWx0LmlzSW5FZGl0TW9kZTtcbiAgICBkZWxldGUgcmVzdWx0LnZhbGlkYXRpb247XG4gICAgZGVsZXRlIHJlc3VsdC5fcHJldmlvdXNWYWx1ZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==