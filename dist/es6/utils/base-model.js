/**
 * Created by moshensky on 5/25/15.
 */
const excludeProps = ['router', 'http', 'isInEditMode', 'validation', '_previousValues'];

export class BaseModel {
  constructor() {
    this.isInEditMode = false;
    this.validation = undefined;
    this._previousValues = {};
  }

  setEditMode(edit) {
    this.isInEditMode = edit;

    if (edit) {
      this._previousValues = this.getOwnProperties();
    } else {
      this._previousValues = {};
    }
  }

  revertChanges() {
    if (this.isInEditMode) {
      Object.assign(this, this._previousValues)
      this.setEditMode(false);
    }
  }

  getOwnProperties() {
    let result = {};
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        if (excludeProps.indexOf(prop) === -1) {
          let value = this[prop];

          let isNull = value === null;
          let isUndefined = value === undefined;

          let isString =  !(isNull || isUndefined) && value.constructor === String;
          let isEmptyString = isString && value.trim() === '';
          let isNullString = isString && value === 'null';
          let isUndefinedString = isString && value === 'undefined';

          let hasValue = !(isNull || isUndefined || isEmptyString || isNullString || isUndefinedString);

          if (hasValue) {
            let isNumberString = isString && !isEmptyString && !Number.isNaN(Number(value));
            let isBooleanString = isString && (value === 'true' || value === 'false');

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
  }
}
