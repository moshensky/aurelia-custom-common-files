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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3VCQU1nQixTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBQ2pELFFBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7O0FBRTVCLFdBQU8sQ0FBQyxlQUFlLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNuRSxXQUFPLENBQUMsZUFBZSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDbkUsV0FBTyxDQUFDLGVBQWUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQzNFLFdBQU8sQ0FBQyxlQUFlLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUM3RCxXQUFPLENBQUMsZUFBZSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7O0FBRXZFLFdBQU8sQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFdEQsV0FBTyxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOztBQUUxRCxRQUFHLGNBQWMsS0FBSyxTQUFTLElBQUksT0FBTyxjQUFjLEFBQUMsS0FBSyxVQUFVLEVBQ3hFO0FBQ0Usb0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4Qjs7QUFJRCxXQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUN4Qjs7Ozt1QkEzQk8sTUFBTTs7K0VBRU4sMkJBQTJCOzt5Q0FDM0IsUUFBUTs7MkNBQ1IsU0FBUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCB7VGFibGVWYWxpZGF0aW9uVmlld1N0cmF0ZWd5fSBmcm9tICcuL3V0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneSdcbmV4cG9ydCB7VGltZXNwYW59IGZyb20gJy4vdXRpbHMvdGltZXNwYW4nXG5leHBvcnQge0Jhc2VNb2RlbH0gZnJvbSAnLi91dGlscy9iYXNlLW1vZGVsJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEsIGNvbmZpZ0NhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWcoKTtcblxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvdGltZXBpY2tlci90aW1lcGlja2VyJyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXInKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyJyk7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDInKTtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDItYWpheC9zZWxlY3QyLWFqYXgnKTtcblxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tYXR0cmlidXRlcy9lbmFibGUnKTtcblxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi92YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0Jyk7XG5cbiAgaWYoY29uZmlnQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YoY29uZmlnQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKVxuICB7XG4gICAgY29uZmlnQ2FsbGJhY2soY29uZmlnKTtcbiAgfVxuXG4gIC8vYXVyZWxpYS53aXRoU2luZ2xldG9uKENvbmZpZywgY29uZmlnKTtcblxuICByZXR1cm4gY29uZmlnLmxvY2FsZSgpO1xufVxuIl19