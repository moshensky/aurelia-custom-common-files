'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var excludeProps = ['router', 'http', 'isInEditMode', 'validation', '_previousValues'];

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
        if (excludeProps.indexOf(prop) === -1) {
          var value = this[prop];

          var isNull = value === null;
          var isUndefined = value === undefined;

          var isString = !(isNull || isUndefined) && value.constructor === String;
          var isEmptyString = isString && value.trim() === '';
          var isNullString = isString && value === 'null';
          var isUndefinedString = isString && value === 'undefined';

          var hasValue = !(isNull || isUndefined || isEmptyString || isNullString || isUndefinedString);

          if (hasValue) {
            var isNumberString = isString && !isEmptyString && !Number.isNaN(Number(value));
            var isBooleanString = isString && (value === 'true' || value === 'false');

            if (isNumberString) {
              result[prop] = Number(value);
            } else if (isBooleanString) {
              result[prop] = value === 'true' ? true : false;
            } else {
              result[prop] = value;
            }
          } else {
            result[prop] = null;
          }
        }
      }
    }

    return result;
  };

  return BaseModel;
})();

exports.BaseModel = BaseModel;