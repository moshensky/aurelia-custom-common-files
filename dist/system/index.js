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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBQ2pELFFBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7O0FBRTVCLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3RFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3RFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQzlFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ2hFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDOztBQUUxRSxXQUFPLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFekQsV0FBTyxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7O0FBRTdELFFBQUcsY0FBYyxLQUFLLFNBQVMsSUFBSSxPQUFPLGNBQWMsQUFBQyxLQUFLLFVBQVUsRUFDeEU7QUFDRSxvQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hCOztBQUlELFdBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ3hCOzs7O3VCQTNCTyxNQUFNOzsrRUFFTiwyQkFBMkI7O3lDQUMzQixRQUFROzsyQ0FDUixTQUFTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25maWd9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmV4cG9ydCB7VGFibGVWYWxpZGF0aW9uVmlld1N0cmF0ZWd5fSBmcm9tICcuL3V0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneSdcclxuZXhwb3J0IHtUaW1lc3Bhbn0gZnJvbSAnLi91dGlscy90aW1lc3BhbidcclxuZXhwb3J0IHtCYXNlTW9kZWx9IGZyb20gJy4vdXRpbHMvYmFzZS1tb2RlbCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSwgY29uZmlnQ2FsbGJhY2spIHtcclxuICBjb25zdCBjb25maWcgPSBuZXcgQ29uZmlnKCk7XHJcblxyXG4gIGF1cmVsaWEuZ2xvYmFsaXplUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXInKTtcclxuICBhdXJlbGlhLmdsb2JhbGl6ZVJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyJyk7XHJcbiAgYXVyZWxpYS5nbG9iYWxpemVSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyJyk7XHJcbiAgYXVyZWxpYS5nbG9iYWxpemVSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDIvc2VsZWN0MicpO1xyXG4gIGF1cmVsaWEuZ2xvYmFsaXplUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4Jyk7XHJcblxyXG4gIGF1cmVsaWEuZ2xvYmFsaXplUmVzb3VyY2VzKCcuL2N1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZScpO1xyXG5cclxuICBhdXJlbGlhLmdsb2JhbGl6ZVJlc291cmNlcygnLi92YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0Jyk7XHJcblxyXG4gIGlmKGNvbmZpZ0NhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mKGNvbmZpZ0NhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJylcclxuICB7XHJcbiAgICBjb25maWdDYWxsYmFjayhjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLy9hdXJlbGlhLndpdGhTaW5nbGV0b24oQ29uZmlnLCBjb25maWcpO1xyXG5cclxuICByZXR1cm4gY29uZmlnLmxvY2FsZSgpO1xyXG59XHJcbiJdfQ==