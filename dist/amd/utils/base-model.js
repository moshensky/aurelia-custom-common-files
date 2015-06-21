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