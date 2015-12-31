System.register(['./config', './utils/table-validation-view-strategy', './utils/timespan', './utils/base-model'], function (_export) {
  'use strict';

  var Config;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var config = new Config();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3VCQU9nQixTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBQ2pELFFBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7O0FBRTVCLFdBQU8sQ0FBQyxlQUFlLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNuRSxXQUFPLENBQUMsZUFBZSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDbkUsV0FBTyxDQUFDLGVBQWUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQzNFLFdBQU8sQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFdEQsV0FBTyxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzFELFdBQU8sQ0FBQyxlQUFlLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7QUFFaEUsUUFBRyxjQUFjLEtBQUssU0FBUyxJQUFJLE9BQU8sY0FBYyxBQUFDLEtBQUssVUFBVSxFQUN4RTtBQUNFLG9CQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEI7O0FBRUQsV0FBTyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDeEI7Ozs7dUJBeEJPLE1BQU07OytFQUVOLDJCQUEyQjs7eUNBQzNCLFFBQVE7OzJDQUNSLFNBQVMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQge1RhYmxlVmFsaWRhdGlvblZpZXdTdHJhdGVneX0gZnJvbSAnLi91dGlscy90YWJsZS12YWxpZGF0aW9uLXZpZXctc3RyYXRlZ3knXG5leHBvcnQge1RpbWVzcGFufSBmcm9tICcuL3V0aWxzL3RpbWVzcGFuJ1xuZXhwb3J0IHtCYXNlTW9kZWx9IGZyb20gJy4vdXRpbHMvYmFzZS1tb2RlbCdcblxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEsIGNvbmZpZ0NhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWcoKTtcblxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvdGltZXBpY2tlci90aW1lcGlja2VyJyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXInKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyJyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZScpO1xuXG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL3ZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQnKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vdmFsdWUtY29udmVydGVycy9zaG9ydC1kYXRlLWZvcm1hdCcpO1xuXG4gIGlmKGNvbmZpZ0NhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mKGNvbmZpZ0NhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJylcbiAge1xuICAgIGNvbmZpZ0NhbGxiYWNrKGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmxvY2FsZSgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9