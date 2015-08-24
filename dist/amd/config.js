define(['exports', './locale'], function (exports, _locale) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ConfigDefaults = function ConfigDefaults() {
    _classCallCheck(this, ConfigDefaults);
  };

  exports.ConfigDefaults = ConfigDefaults;

  ConfigDefaults._defaults = {
    locale: 'en-US',
    localeResources: 'aurelia-custom-common-files/resources/'
  };

  ConfigDefaults.defaults = function () {
    var defaults = {};
    Object.assign(defaults, ConfigDefaults._defaults);
    return defaults;
  };

  var Config = (function () {
    function Config(innerConfig) {
      _classCallCheck(this, Config);

      this.innerConfig = innerConfig;
      this.values = this.innerConfig ? {} : ConfigDefaults.defaults();
      this.changedHandlers = new Map();
    }

    Config.prototype.getValue = function getValue(identifier) {
      if (this.values.hasOwnProperty(identifier) !== null && this.values[identifier] !== undefined) {
        return this.values[identifier];
      }
      if (this.innerConfig !== null) {
        return this.innerConfig.getValue(identifier);
      }
      throw Error('Config not found: ' + identifier);
    };

    Config.prototype.setValue = function setValue(identifier, value) {
      this.values[identifier] = value;
      return this;
    };

    Config.prototype.onLocaleChanged = function onLocaleChanged(callback) {
      var _this = this;

      if (this.innerConfig !== undefined) {
        return this.innerConfig.onLocaleChanged(callback);
      } else {
        var _ret = (function () {
          var id = ++ValidationConfig.uniqueListenerId;
          _this.changedHandlers.set(id, callback);
          return {
            v: function () {
              _this.changedHandlers['delete'](id);
            }
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      }
    };

    Config.prototype.getDependencies = function getDependencies() {
      return this.getValue('dependencies');
    };

    Config.prototype.setHttpService = function setHttpService(httpOpts) {
      Config.httpOpts = httpOpts;
    };

    Config.prototype.routerAuthStep = function routerAuthStep(opts) {
      Config.routerAuthStepOpts = opts;
    };

    Config.prototype.useLocale = function useLocale(localeIdentifier) {
      this.setValue('locale', localeIdentifier);
      var callbacks = Array.from(this.changedHandlers.values());
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i]();
      }
      return this;
    };

    Config.prototype.locale = function locale() {
      return _locale.Locale.Repository.load(this.getValue('locale'), this.getValue('localeResources'));
    };

    return Config;
  })();

  exports.Config = Config;

  Config.uniqueListenerId = 0;
});
//# sourceMappingURL=data:application/json;base64,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QUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUMxRCxXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxpQkFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7T0FDaEI7QUFDRCxhQUFPLElBQUksQ0FBQztLQUNiOztBQXJEVSxVQUFNLFdBdURqQixNQUFNLEdBQUEsa0JBQUc7QUFDUCxhQUFPLFFBeEVILE1BQU0sQ0F3RUksVUFBVSxDQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztLQUNwRTs7V0ExRFUsTUFBTTs7O1VBQU4sTUFBTSxHQUFOLE1BQU07O0FBNkRuQixRQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtb3NoZW5za3kgb24gNi8xNy8xNS5cbiAqL1xuaW1wb3J0IHtMb2NhbGV9IGZyb20gJy4vbG9jYWxlJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ0RlZmF1bHRzIHtcbn1cblxuQ29uZmlnRGVmYXVsdHMuX2RlZmF1bHRzID0ge1xuICBsb2NhbGU6ICdlbi1VUycsXG4gIGxvY2FsZVJlc291cmNlczogJ2F1cmVsaWEtY3VzdG9tLWNvbW1vbi1maWxlcy9yZXNvdXJjZXMvJ1xufTtcblxuQ29uZmlnRGVmYXVsdHMuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBkZWZhdWx0cyA9IHt9O1xuICBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBDb25maWdEZWZhdWx0cy5fZGVmYXVsdHMpO1xuICByZXR1cm4gZGVmYXVsdHM7XG59O1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoaW5uZXJDb25maWcpIHtcbiAgICB0aGlzLmlubmVyQ29uZmlnID0gaW5uZXJDb25maWc7XG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLmlubmVyQ29uZmlnID8ge30gOiBDb25maWdEZWZhdWx0cy5kZWZhdWx0cygpO1xuICAgIHRoaXMuY2hhbmdlZEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgZ2V0VmFsdWUoaWRlbnRpZmllcikge1xuICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShpZGVudGlmaWVyKSAhPT0gbnVsbCAmJiB0aGlzLnZhbHVlc1tpZGVudGlmaWVyXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbaWRlbnRpZmllcl07XG4gICAgfVxuICAgIGlmICh0aGlzLmlubmVyQ29uZmlnICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lckNvbmZpZy5nZXRWYWx1ZShpZGVudGlmaWVyKTtcbiAgICB9XG4gICAgdGhyb3cgRXJyb3IoJ0NvbmZpZyBub3QgZm91bmQ6ICcgKyBpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHNldFZhbHVlKGlkZW50aWZpZXIsIHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZXNbaWRlbnRpZmllcl0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpczsgLy9mbHVlbnQgQVBJXG4gIH1cblxuICBvbkxvY2FsZUNoYW5nZWQoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5pbm5lckNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lckNvbmZpZy5vbkxvY2FsZUNoYW5nZWQoY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaWQgPSArK1ZhbGlkYXRpb25Db25maWcudW5pcXVlTGlzdGVuZXJJZDtcbiAgICAgIHRoaXMuY2hhbmdlZEhhbmRsZXJzLnNldChpZCwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlcnMuZGVsZXRlKGlkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdkZXBlbmRlbmNpZXMnKTtcbiAgfVxuXG4gIHNldEh0dHBTZXJ2aWNlKGh0dHBPcHRzKSB7XG4gICAgQ29uZmlnLmh0dHBPcHRzID0gaHR0cE9wdHM7XG4gIH1cblxuICByb3V0ZXJBdXRoU3RlcChvcHRzKSB7XG4gICAgQ29uZmlnLnJvdXRlckF1dGhTdGVwT3B0cyA9IG9wdHM7XG4gIH1cblxuICB1c2VMb2NhbGUobG9jYWxlSWRlbnRpZmllcikge1xuICAgIHRoaXMuc2V0VmFsdWUoJ2xvY2FsZScsIGxvY2FsZUlkZW50aWZpZXIpO1xuICAgIHZhciBjYWxsYmFja3MgPSBBcnJheS5mcm9tKHRoaXMuY2hhbmdlZEhhbmRsZXJzLnZhbHVlcygpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2tzW2ldKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9jYWxlKCkge1xuICAgIHJldHVybiBMb2NhbGUuUmVwb3NpdG9yeVxuICAgICAgLmxvYWQodGhpcy5nZXRWYWx1ZSgnbG9jYWxlJyksIHRoaXMuZ2V0VmFsdWUoJ2xvY2FsZVJlc291cmNlcycpKTtcbiAgfVxufVxuXG5Db25maWcudW5pcXVlTGlzdGVuZXJJZCA9IDA7XG4iXX0=