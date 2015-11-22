System.register([], function (_export) {
  "use strict";

  var BaseModel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

      _export("BaseModel", BaseModel);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Jhc2UtbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BR2EsU0FBUzs7Ozs7Ozs7O0FBQVQsZUFBUztBQUNULGlCQURBLFNBQVMsR0FDTjtnQ0FESCxTQUFTOztBQUVsQixjQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMxQixjQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUM1QixjQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztTQUMzQjs7cUJBTFUsU0FBUzs7aUJBT1QscUJBQUMsSUFBSSxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7QUFFekIsZ0JBQUksSUFBSSxFQUFFO0FBQ1Isa0JBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDaEQsTUFBTTtBQUNMLGtCQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQzthQUMzQjtXQUNGOzs7aUJBRVkseUJBQUc7QUFDZCxnQkFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3JCLG9CQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDekMsa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7V0FDRjs7O2lCQUVlLDRCQUFHO0FBQ2pCLGdCQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsaUJBQUssSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQ3JCLGtCQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDN0Isc0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7ZUFDM0I7YUFDRjs7QUFFRCxtQkFBTyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQzNCLG1CQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDekIsbUJBQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQzs7QUFFOUIsbUJBQU8sTUFBTSxDQUFDO1dBQ2Y7OztlQXJDVSxTQUFTOzs7MkJBQVQsU0FBUyIsImZpbGUiOiJ1dGlscy9iYXNlLW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI1LzE1LlxuICovXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0luRWRpdE1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB7fTtcbiAgfVxuXG4gIHNldEVkaXRNb2RlKGVkaXQpIHtcbiAgICB0aGlzLmlzSW5FZGl0TW9kZSA9IGVkaXQ7XG5cbiAgICBpZiAoZWRpdCkge1xuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB0aGlzLmdldE93blByb3BlcnRpZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICByZXZlcnRDaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmlzSW5FZGl0TW9kZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9wcmV2aW91c1ZhbHVlcylcbiAgICAgIHRoaXMuc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldE93blByb3BlcnRpZXMoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgcmVzdWx0W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUgcmVzdWx0LmlzSW5FZGl0TW9kZTtcbiAgICBkZWxldGUgcmVzdWx0LnZhbGlkYXRpb247XG4gICAgZGVsZXRlIHJlc3VsdC5fcHJldmlvdXNWYWx1ZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==