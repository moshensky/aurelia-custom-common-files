import {Config} from './config';

export {TableValidationViewStrategy} from './utils/table-validation-view-strategy'
export {Timespan} from './utils/timespan'
export {BaseModel} from './utils/base-model'


export function configure(aurelia, configCallback) {
  const config = new Config();

  aurelia.globalResources('./custom-elements/timepicker/timepicker');
  aurelia.globalResources('./custom-elements/datepicker/datepicker');
  aurelia.globalResources('./custom-elements/datetimepicker/datetimepicker');
  aurelia.globalResources('./custom-elements/select2/select2');
  aurelia.globalResources('./custom-elements/select2-ajax/select2-ajax');
  aurelia.globalResources('./custom-attributes/enable');

  aurelia.globalResources('./value-converters/date-format');
  aurelia.globalResources('./value-converters/short-date-format');

  if(configCallback !== undefined && typeof(configCallback) === 'function')
  {
    configCallback(config);
  }

  return config.locale();
}
