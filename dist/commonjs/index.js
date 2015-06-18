'use strict';

exports.__esModule = true;
exports.configure = configure;

var _config = require('./config');

var _utilsTableValidationViewStrategy = require('./utils/table-validation-view-strategy');

exports.TableValidationViewStrategy = _utilsTableValidationViewStrategy.TableValidationViewStrategy;

var _utilsTimespan = require('./utils/timespan');

exports.Timespan = _utilsTimespan.Timespan;

var _utilsBaseModel = require('./utils/base-model');

exports.BaseModel = _utilsBaseModel.BaseModel;

function configure(aurelia, configCallback) {
  var config = new _config.Config();

  aurelia.globalizeResources('./custom-elements/timepicker/timepicker');
  aurelia.globalizeResources('./custom-elements/datepicker/datepicker');
  aurelia.globalizeResources('./custom-elements/datetimepicker/datetimepicker');
  aurelia.globalizeResources('./custom-elements/select2/select2');
  aurelia.globalizeResources('./value-converters/date-format');

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(config);
  }

  return config.locale();
}