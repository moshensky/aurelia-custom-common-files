define(['exports', './config', './utils/table-validation-view-strategy', './utils/timespan', './utils/base-model'], function (exports, _config, _utilsTableValidationViewStrategy, _utilsTimespan, _utilsBaseModel) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;
  exports.TableValidationViewStrategy = _utilsTableValidationViewStrategy.TableValidationViewStrategy;
  exports.Timespan = _utilsTimespan.Timespan;
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
});