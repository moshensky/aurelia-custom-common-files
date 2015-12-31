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
    aurelia.globalResources('./custom-attributes/enable');

    aurelia.globalResources('./value-converters/date-format');
    aurelia.globalResources('./value-converters/short-date-format');

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(config);
    }

    return config.locale();
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztVQU9nQixTQUFTLEdBQVQsU0FBUzs7OzsrQ0FMakIsMkJBQTJCOzs7Ozs7NEJBQzNCLFFBQVE7Ozs7Ozs2QkFDUixTQUFTOzs7O0FBR1YsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRTtBQUNqRCxRQUFNLE1BQU0sR0FBRyxZQVJULE1BQU0sRUFRZSxDQUFDOztBQUU1QixXQUFPLENBQUMsZUFBZSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDbkUsV0FBTyxDQUFDLGVBQWUsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ25FLFdBQU8sQ0FBQyxlQUFlLENBQUMsaURBQWlELENBQUMsQ0FBQztBQUMzRSxXQUFPLENBQUMsZUFBZSxDQUFDLDRCQUE0QixDQUFDLENBQUM7O0FBRXRELFdBQU8sQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUMxRCxXQUFPLENBQUMsZUFBZSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7O0FBRWhFLFFBQUcsY0FBYyxLQUFLLFNBQVMsSUFBSSxPQUFPLGNBQWMsQUFBQyxLQUFLLFVBQVUsRUFDeEU7QUFDRSxvQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hCOztBQUVELFdBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ3hCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25maWd9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IHtUYWJsZVZhbGlkYXRpb25WaWV3U3RyYXRlZ3l9IGZyb20gJy4vdXRpbHMvdGFibGUtdmFsaWRhdGlvbi12aWV3LXN0cmF0ZWd5J1xuZXhwb3J0IHtUaW1lc3Bhbn0gZnJvbSAnLi91dGlscy90aW1lc3BhbidcbmV4cG9ydCB7QmFzZU1vZGVsfSBmcm9tICcuL3V0aWxzL2Jhc2UtbW9kZWwnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhLCBjb25maWdDYWxsYmFjaykge1xuICBjb25zdCBjb25maWcgPSBuZXcgQ29uZmlnKCk7XG5cbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlcicpO1xuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyJyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlcicpO1xuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tYXR0cmlidXRlcy9lbmFibGUnKTtcblxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi92YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0Jyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL3ZhbHVlLWNvbnZlcnRlcnMvc2hvcnQtZGF0ZS1mb3JtYXQnKTtcblxuICBpZihjb25maWdDYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZihjb25maWdDYWxsYmFjaykgPT09ICdmdW5jdGlvbicpXG4gIHtcbiAgICBjb25maWdDYWxsYmFjayhjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5sb2NhbGUoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==