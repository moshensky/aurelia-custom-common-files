System.register(['./config', './utils/table-validation-view-strategy', './utils/timespan', './utils/base-model'], function (_export) {
  'use strict';

  var Config;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var config = new Config();

    aurelia.globalizeResources('./custom-elements/timepicker/timepicker');
    aurelia.globalizeResources('./custom-elements/datepicker/datepicker');
    aurelia.globalizeResources('./custom-elements/datetimepicker/datetimepicker');
    aurelia.globalizeResources('./custom-elements/linked-datepicker/linked-datepicker');
    aurelia.globalizeResources('./custom-elements/select2/select2');

    aurelia.globalizeResources('./custom-attributes/enable');

    aurelia.globalizeResources('./value-converters/date-format');

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(config);
    }

    return config.locale();
  }

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_utilsTableValidationViewStrategy) {
      _export('TableValidationViewStrategy', _utilsTableValidationViewStrategy.TableValidationViewStrategy);
    }, function (_utilsTimespan) {
      _export('Timespan', _utilsTimespan.Timespan);
    }, function (_utilsBaseModel) {
      _export('BaseModel', _utilsBaseModel.BaseModel);
    }],
    execute: function () {}
  };
});