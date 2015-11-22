define(['exports', './config', './utils/table-validation-view-strategy', './utils/timespan', './utils/base-model'], function (exports, _config, _utilsTableValidationViewStrategy, _utilsTimespan, _utilsBaseModel) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  Object.defineProperty(exports, 'TableValidationViewStrategy', {
    enumerable: true,
    get: function get() {
      return _utilsTableValidationViewStrategy.TableValidationViewStrategy;
    }
  });
  Object.defineProperty(exports, 'Timespan', {
    enumerable: true,
    get: function get() {
      return _utilsTimespan.Timespan;
    }
  });
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztVQU9nQixTQUFTLEdBQVQsU0FBUzs7OzsrQ0FMakIsMkJBQTJCOzs7Ozs7NEJBQzNCLFFBQVE7Ozs7Ozs2QkFDUixTQUFTOzs7O0FBR1YsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRTtBQUNqRCxRQUFNLE1BQU0sR0FBRyxZQVJULE1BQU0sRUFRZSxDQUFDOztBQUU1QixXQUFPLENBQUMsZUFBZSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDbkUsV0FBTyxDQUFDLGVBQWUsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ25FLFdBQU8sQ0FBQyxlQUFlLENBQUMsaURBQWlELENBQUMsQ0FBQztBQUMzRSxXQUFPLENBQUMsZUFBZSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDN0QsV0FBTyxDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0FBQ3ZFLFdBQU8sQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFdEQsV0FBTyxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzFELFdBQU8sQ0FBQyxlQUFlLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7QUFFaEUsUUFBRyxjQUFjLEtBQUssU0FBUyxJQUFJLE9BQU8sY0FBYyxBQUFDLEtBQUssVUFBVSxFQUN4RTtBQUNFLG9CQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEI7O0FBRUQsV0FBTyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDeEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQge1RhYmxlVmFsaWRhdGlvblZpZXdTdHJhdGVneX0gZnJvbSAnLi91dGlscy90YWJsZS12YWxpZGF0aW9uLXZpZXctc3RyYXRlZ3knXG5leHBvcnQge1RpbWVzcGFufSBmcm9tICcuL3V0aWxzL3RpbWVzcGFuJ1xuZXhwb3J0IHtCYXNlTW9kZWx9IGZyb20gJy4vdXRpbHMvYmFzZS1tb2RlbCdcblxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEsIGNvbmZpZ0NhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWcoKTtcblxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvdGltZXBpY2tlci90aW1lcGlja2VyJyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXInKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyJyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDInKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDItYWpheC9zZWxlY3QyLWFqYXgnKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWF0dHJpYnV0ZXMvZW5hYmxlJyk7XG5cbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vdmFsdWUtY29udmVydGVycy9kYXRlLWZvcm1hdCcpO1xuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi92YWx1ZS1jb252ZXJ0ZXJzL3Nob3J0LWRhdGUtZm9ybWF0Jyk7XG5cbiAgaWYoY29uZmlnQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YoY29uZmlnQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKVxuICB7XG4gICAgY29uZmlnQ2FsbGJhY2soY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWcubG9jYWxlKCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=