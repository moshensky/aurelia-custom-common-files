System.register(['./locale'], function (_export) {
  'use strict';

  var Locale, ConfigDefaults, Config;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_locale) {
      Locale = _locale.Locale;
    }],
    execute: function () {
      ConfigDefaults = function ConfigDefaults() {
        _classCallCheck(this, ConfigDefaults);
      };

      _export('ConfigDefaults', ConfigDefaults);

      ConfigDefaults._defaults = {
        locale: 'en-US',
        localeResources: 'aurelia-custom-common-files/resources/'
      };

      ConfigDefaults.defaults = function () {
        var defaults = {};
        Object.assign(defaults, ConfigDefaults._defaults);
        return defaults;
      };

      Config = (function () {
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
          return Locale.Repository.load(this.getValue('locale'), this.getValue('localeResources'));
        };

        return Config;
      })();

      _export('Config', Config);

      Config.uniqueListenerId = 0;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUMsQ0FBQztBQUMxQyxjQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUMxRCxlQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxxQkFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7V0FDaEI7QUFDRCxpQkFBTyxJQUFJLENBQUM7U0FDYjs7QUFyRFUsY0FBTSxXQXVEakIsTUFBTSxHQUFBLGtCQUFHO0FBQ1AsaUJBQU8sTUFBTSxDQUFDLFVBQVUsQ0FDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7U0FDcEU7O2VBMURVLE1BQU07Ozs7O0FBNkRuQixZQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA2LzE3LzE1LlxyXG4gKi9cclxuaW1wb3J0IHtMb2NhbGV9IGZyb20gJy4vbG9jYWxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdEZWZhdWx0cyB7XHJcbn1cclxuXHJcbkNvbmZpZ0RlZmF1bHRzLl9kZWZhdWx0cyA9IHtcclxuICBsb2NhbGU6ICdlbi1VUycsXHJcbiAgbG9jYWxlUmVzb3VyY2VzOiAnYXVyZWxpYS1jdXN0b20tY29tbW9uLWZpbGVzL3Jlc291cmNlcy8nXHJcbn07XHJcblxyXG5Db25maWdEZWZhdWx0cy5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZGVmYXVsdHMgPSB7fTtcclxuICBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBDb25maWdEZWZhdWx0cy5fZGVmYXVsdHMpO1xyXG4gIHJldHVybiBkZWZhdWx0cztcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gIGNvbnN0cnVjdG9yKGlubmVyQ29uZmlnKSB7XHJcbiAgICB0aGlzLmlubmVyQ29uZmlnID0gaW5uZXJDb25maWc7XHJcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuaW5uZXJDb25maWcgPyB7fSA6IENvbmZpZ0RlZmF1bHRzLmRlZmF1bHRzKCk7XHJcbiAgICB0aGlzLmNoYW5nZWRIYW5kbGVycyA9IG5ldyBNYXAoKTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKGlkZW50aWZpZXIpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShpZGVudGlmaWVyKSAhPT0gbnVsbCAmJiB0aGlzLnZhbHVlc1tpZGVudGlmaWVyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpZGVudGlmaWVyXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ29uZmlnICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlubmVyQ29uZmlnLmdldFZhbHVlKGlkZW50aWZpZXIpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgRXJyb3IoJ0NvbmZpZyBub3QgZm91bmQ6ICcgKyBpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKGlkZW50aWZpZXIsIHZhbHVlKSB7XHJcbiAgICB0aGlzLnZhbHVlc1tpZGVudGlmaWVyXSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7IC8vZmx1ZW50IEFQSVxyXG4gIH1cclxuXHJcbiAgb25Mb2NhbGVDaGFuZ2VkKGNhbGxiYWNrKSB7XHJcbiAgICBpZiAodGhpcy5pbm5lckNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlubmVyQ29uZmlnLm9uTG9jYWxlQ2hhbmdlZChjYWxsYmFjayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgaWQgPSArK1ZhbGlkYXRpb25Db25maWcudW5pcXVlTGlzdGVuZXJJZDtcclxuICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlcnMuc2V0KGlkLCBjYWxsYmFjayk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlcnMuZGVsZXRlKGlkKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldERlcGVuZGVuY2llcygpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdkZXBlbmRlbmNpZXMnKTtcclxuICB9XHJcblxyXG4gIHNldEh0dHBTZXJ2aWNlKGh0dHBPcHRzKSB7XHJcbiAgICBDb25maWcuaHR0cE9wdHMgPSBodHRwT3B0cztcclxuICB9XHJcblxyXG4gIHJvdXRlckF1dGhTdGVwKG9wdHMpIHtcclxuICAgIENvbmZpZy5yb3V0ZXJBdXRoU3RlcE9wdHMgPSBvcHRzO1xyXG4gIH1cclxuXHJcbiAgdXNlTG9jYWxlKGxvY2FsZUlkZW50aWZpZXIpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUoJ2xvY2FsZScsIGxvY2FsZUlkZW50aWZpZXIpO1xyXG4gICAgdmFyIGNhbGxiYWNrcyA9IEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSGFuZGxlcnMudmFsdWVzKCkpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2FsbGJhY2tzW2ldKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGxvY2FsZSgpIHtcclxuICAgIHJldHVybiBMb2NhbGUuUmVwb3NpdG9yeVxyXG4gICAgICAubG9hZCh0aGlzLmdldFZhbHVlKCdsb2NhbGUnKSwgdGhpcy5nZXRWYWx1ZSgnbG9jYWxlUmVzb3VyY2VzJykpO1xyXG4gIH1cclxufVxyXG5cclxuQ29uZmlnLnVuaXF1ZUxpc3RlbmVySWQgPSAwO1xyXG4iXX0=