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
//# sourceMappingURL=data:application/json;base64,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LGdCQUFnQixDQUFDLENBQUM7QUFDMUMsY0FBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDMUQsZUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekMscUJBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1dBQ2hCO0FBQ0QsaUJBQU8sSUFBSSxDQUFDO1NBQ2I7O0FBckRVLGNBQU0sV0F1RGpCLE1BQU0sR0FBQSxrQkFBRztBQUNQLGlCQUFPLE1BQU0sQ0FBQyxVQUFVLENBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1NBQ3BFOztlQTFEVSxNQUFNOzs7d0JBQU4sTUFBTTs7QUE2RG5CLFlBQU0sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA2LzE3LzE1LlxuICovXG5pbXBvcnQge0xvY2FsZX0gZnJvbSAnLi9sb2NhbGUnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnRGVmYXVsdHMge1xufVxuXG5Db25maWdEZWZhdWx0cy5fZGVmYXVsdHMgPSB7XG4gIGxvY2FsZTogJ2VuLVVTJyxcbiAgbG9jYWxlUmVzb3VyY2VzOiAnYXVyZWxpYS1jdXN0b20tY29tbW9uLWZpbGVzL3Jlc291cmNlcy8nXG59O1xuXG5Db25maWdEZWZhdWx0cy5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlZmF1bHRzID0ge307XG4gIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIENvbmZpZ0RlZmF1bHRzLl9kZWZhdWx0cyk7XG4gIHJldHVybiBkZWZhdWx0cztcbn07XG5cbmV4cG9ydCBjbGFzcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihpbm5lckNvbmZpZykge1xuICAgIHRoaXMuaW5uZXJDb25maWcgPSBpbm5lckNvbmZpZztcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuaW5uZXJDb25maWcgPyB7fSA6IENvbmZpZ0RlZmF1bHRzLmRlZmF1bHRzKCk7XG4gICAgdGhpcy5jaGFuZ2VkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXRWYWx1ZShpZGVudGlmaWVyKSB7XG4gICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGlkZW50aWZpZXIpICE9PSBudWxsICYmIHRoaXMudmFsdWVzW2lkZW50aWZpZXJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpZGVudGlmaWVyXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5uZXJDb25maWcgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyQ29uZmlnLmdldFZhbHVlKGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcignQ29uZmlnIG5vdCBmb3VuZDogJyArIGlkZW50aWZpZXIpO1xuICB9XG5cbiAgc2V0VmFsdWUoaWRlbnRpZmllciwgdmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlc1tpZGVudGlmaWVyXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzOyAvL2ZsdWVudCBBUElcbiAgfVxuXG4gIG9uTG9jYWxlQ2hhbmdlZChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmlubmVyQ29uZmlnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyQ29uZmlnLm9uTG9jYWxlQ2hhbmdlZChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpZCA9ICsrVmFsaWRhdGlvbkNvbmZpZy51bmlxdWVMaXN0ZW5lcklkO1xuICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlcnMuc2V0KGlkLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWRIYW5kbGVycy5kZWxldGUoaWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ2RlcGVuZGVuY2llcycpO1xuICB9XG5cbiAgc2V0SHR0cFNlcnZpY2UoaHR0cE9wdHMpIHtcbiAgICBDb25maWcuaHR0cE9wdHMgPSBodHRwT3B0cztcbiAgfVxuXG4gIHJvdXRlckF1dGhTdGVwKG9wdHMpIHtcbiAgICBDb25maWcucm91dGVyQXV0aFN0ZXBPcHRzID0gb3B0cztcbiAgfVxuXG4gIHVzZUxvY2FsZShsb2NhbGVJZGVudGlmaWVyKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSgnbG9jYWxlJywgbG9jYWxlSWRlbnRpZmllcik7XG4gICAgdmFyIGNhbGxiYWNrcyA9IEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSGFuZGxlcnMudmFsdWVzKCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFja3NbaV0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIExvY2FsZS5SZXBvc2l0b3J5XG4gICAgICAubG9hZCh0aGlzLmdldFZhbHVlKCdsb2NhbGUnKSwgdGhpcy5nZXRWYWx1ZSgnbG9jYWxlUmVzb3VyY2VzJykpO1xuICB9XG59XG5cbkNvbmZpZy51bmlxdWVMaXN0ZW5lcklkID0gMDtcbiJdfQ==