System.register(['./config', './utils/table-validation-view-strategy', './utils/timespan', './utils/base-model'], function (_export) {
  'use strict';

  var Config;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var config = new Config();

    aurelia.globalizeResources('./custom-elements/timepicker/timepicker');
    aurelia.globalizeResources('./custom-elements/datepicker/datepicker');
    aurelia.globalizeResources('./custom-elements/datetimepicker/datetimepicker');
    aurelia.globalizeResources('./custom-elements/select2/select2');
    aurelia.globalizeResources('./custom-elements/select2-ajax/select2-ajax');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3VCQU1nQixTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBQ2pELFFBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7O0FBRTVCLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3RFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3RFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQzlFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ2hFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDOztBQUUxRSxXQUFPLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFekQsV0FBTyxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7O0FBRTdELFFBQUcsY0FBYyxLQUFLLFNBQVMsSUFBSSxPQUFPLGNBQWMsQUFBQyxLQUFLLFVBQVUsRUFDeEU7QUFDRSxvQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hCOztBQUlELFdBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ3hCOzs7O3VCQTNCTyxNQUFNOzsrRUFFTiwyQkFBMkI7O3lDQUMzQixRQUFROzsyQ0FDUixTQUFTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25maWd9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IHtUYWJsZVZhbGlkYXRpb25WaWV3U3RyYXRlZ3l9IGZyb20gJy4vdXRpbHMvdGFibGUtdmFsaWRhdGlvbi12aWV3LXN0cmF0ZWd5J1xuZXhwb3J0IHtUaW1lc3Bhbn0gZnJvbSAnLi91dGlscy90aW1lc3BhbidcbmV4cG9ydCB7QmFzZU1vZGVsfSBmcm9tICcuL3V0aWxzL2Jhc2UtbW9kZWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSwgY29uZmlnQ2FsbGJhY2spIHtcbiAgY29uc3QgY29uZmlnID0gbmV3IENvbmZpZygpO1xuXG4gIGF1cmVsaWEuZ2xvYmFsaXplUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXInKTtcbiAgYXVyZWxpYS5nbG9iYWxpemVSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcicpO1xuICBhdXJlbGlhLmdsb2JhbGl6ZVJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXInKTtcbiAgYXVyZWxpYS5nbG9iYWxpemVSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDIvc2VsZWN0MicpO1xuICBhdXJlbGlhLmdsb2JhbGl6ZVJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvc2VsZWN0Mi1hamF4L3NlbGVjdDItYWpheCcpO1xuXG4gIGF1cmVsaWEuZ2xvYmFsaXplUmVzb3VyY2VzKCcuL2N1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZScpO1xuXG4gIGF1cmVsaWEuZ2xvYmFsaXplUmVzb3VyY2VzKCcuL3ZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQnKTtcblxuICBpZihjb25maWdDYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZihjb25maWdDYWxsYmFjaykgPT09ICdmdW5jdGlvbicpXG4gIHtcbiAgICBjb25maWdDYWxsYmFjayhjb25maWcpO1xuICB9XG5cbiAgLy9hdXJlbGlhLndpdGhTaW5nbGV0b24oQ29uZmlnLCBjb25maWcpO1xuXG4gIHJldHVybiBjb25maWcubG9jYWxlKCk7XG59XG4iXX0=