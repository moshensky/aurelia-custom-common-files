'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _config = require('./config');

var _utilsTableValidationViewStrategy = require('./utils/table-validation-view-strategy');

Object.defineProperty(exports, 'TableValidationViewStrategy', {
  enumerable: true,
  get: function get() {
    return _utilsTableValidationViewStrategy.TableValidationViewStrategy;
  }
});

var _utilsTimespan = require('./utils/timespan');

Object.defineProperty(exports, 'Timespan', {
  enumerable: true,
  get: function get() {
    return _utilsTimespan.Timespan;
  }
});

var _utilsBaseModel = require('./utils/base-model');

Object.defineProperty(exports, 'BaseModel', {
  enumerable: true,
  get: function get() {
    return _utilsBaseModel.BaseModel;
  }
});

function configure(aurelia, configCallback) {
  var config = new _config.Config();

  aurelia.globalResources('./custom-elements/timepicker/timepicker');
  aurelia.globalResources('./custom-elements/datepicker/datepicker');
  aurelia.globalResources('./custom-elements/datetimepicker/datetimepicker');
  aurelia.globalResources('./custom-attributes/enable');

  aurelia.globalResources('./value-converters/date-format');
  aurelia.globalResources('./value-converters/short-date-format');

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(config);
  }

  return config.locale();
}