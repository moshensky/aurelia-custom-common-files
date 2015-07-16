import {Config} from './config';

export {TableValidationViewStrategy} from './utils/table-validation-view-strategy'
export {Timespan} from './utils/timespan'
export {BaseModel} from './utils/base-model'

export function configure(aurelia, configCallback) {
  const config = new Config();

  aurelia.globalizeResources('./custom-elements/timepicker/timepicker');
  aurelia.globalizeResources('./custom-elements/datepicker/datepicker');
  aurelia.globalizeResources('./custom-elements/datetimepicker/datetimepicker');
  aurelia.globalizeResources('./custom-elements/select2/select2');
  aurelia.globalizeResources('./custom-elements/select2-ajax/select2-ajax');

  aurelia.globalizeResources('./custom-attributes/enable');

  aurelia.globalizeResources('./value-converters/date-format');

  if(configCallback !== undefined && typeof(configCallback) === 'function')
  {
    configCallback(config);
  }

  //aurelia.withSingleton(Config, config);

  return config.locale();
}
