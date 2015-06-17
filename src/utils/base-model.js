/**
 * Created by moshensky on 5/25/15.
 */
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
    var result = {};
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        result[prop] = this[prop];
      }
    }

    delete result.isInEditMode;
    delete result.validation;
    delete result._previousValues;

    return result;
  }
}
