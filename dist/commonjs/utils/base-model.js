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