System.register(['./config', './utils/table-validation-view-strategy', './utils/timespan', './utils/base-model'], function (_export) {
  'use strict';

  var Config;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var config = new Config();

    aurelia.globalResources('./custom-elements/timepicker/timepicker');
    aurelia.globalResources('./custom-elements/datepicker/datepicker');
    aurelia.globalResources('./custom-elements/datetimepicker/datetimepicker');
    aurelia.globalResources('./custom-elements/select2/select2');
    aurelia.globalResources('./custom-elements/select2-ajax/select2-ajax');
    aurelia.globalResources('./custom-attributes/enable');

    aurelia.globalResources('./value-converters/date-format');
    aurelia.globalResources('./value-converters/short-date-format');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3VCQU9nQixTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBQ2pELFFBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7O0FBRTVCLFdBQU8sQ0FBQyxlQUFlLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNuRSxXQUFPLENBQUMsZUFBZSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDbkUsV0FBTyxDQUFDLGVBQWUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQzNFLFdBQU8sQ0FBQyxlQUFlLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUM3RCxXQUFPLENBQUMsZUFBZSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7QUFDdkUsV0FBTyxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztBQUV0RCxXQUFPLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDMUQsV0FBTyxDQUFDLGVBQWUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDOztBQUVoRSxRQUFHLGNBQWMsS0FBSyxTQUFTLElBQUksT0FBTyxjQUFjLEFBQUMsS0FBSyxVQUFVLEVBQ3hFO0FBQ0Usb0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4Qjs7QUFFRCxXQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUN4Qjs7Ozt1QkExQk8sTUFBTTs7K0VBRU4sMkJBQTJCOzt5Q0FDM0IsUUFBUTs7MkNBQ1IsU0FBUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCB7VGFibGVWYWxpZGF0aW9uVmlld1N0cmF0ZWd5fSBmcm9tICcuL3V0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneSdcbmV4cG9ydCB7VGltZXNwYW59IGZyb20gJy4vdXRpbHMvdGltZXNwYW4nXG5leHBvcnQge0Jhc2VNb2RlbH0gZnJvbSAnLi91dGlscy9iYXNlLW1vZGVsJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSwgY29uZmlnQ2FsbGJhY2spIHtcbiAgY29uc3QgY29uZmlnID0gbmV3IENvbmZpZygpO1xuXG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXInKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcicpO1xuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXInKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDIvc2VsZWN0MicpO1xuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvc2VsZWN0Mi1hamF4L3NlbGVjdDItYWpheCcpO1xuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tYXR0cmlidXRlcy9lbmFibGUnKTtcblxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi92YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0Jyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL3ZhbHVlLWNvbnZlcnRlcnMvc2hvcnQtZGF0ZS1mb3JtYXQnKTtcblxuICBpZihjb25maWdDYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZihjb25maWdDYWxsYmFjaykgPT09ICdmdW5jdGlvbicpXG4gIHtcbiAgICBjb25maWdDYWxsYmFjayhjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5sb2NhbGUoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==