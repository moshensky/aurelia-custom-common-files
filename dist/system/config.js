System.register(['./locale'], function (_export) {
  'use strict';

  var Locale, ConfigDefaults, Config;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

        _createClass(Config, [{
          key: 'getValue',
          value: function getValue(identifier) {
            if (this.values.hasOwnProperty(identifier) !== null && this.values[identifier] !== undefined) {
              return this.values[identifier];
            }
            if (this.innerConfig !== null) {
              return this.innerConfig.getValue(identifier);
            }
            throw Error('Config not found: ' + identifier);
          }
        }, {
          key: 'setValue',
          value: function setValue(identifier, value) {
            this.values[identifier] = value;
            return this;
          }
        }, {
          key: 'onLocaleChanged',
          value: function onLocaleChanged(callback) {
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
          }
        }, {
          key: 'getDependencies',
          value: function getDependencies() {
            return this.getValue('dependencies');
          }
        }, {
          key: 'setHttpService',
          value: function setHttpService(httpOpts) {
            Config.httpOpts = httpOpts;
          }
        }, {
          key: 'routerAuthStep',
          value: function routerAuthStep(opts) {
            Config.routerAuthStepOpts = opts;
          }
        }, {
          key: 'useLocale',
          value: function useLocale(localeIdentifier) {
            this.setValue('locale', localeIdentifier);
            var callbacks = Array.from(this.changedHandlers.values());
            for (var i = 0; i < callbacks.length; i++) {
              callbacks[i]();
            }
            return this;
          }
        }, {
          key: 'locale',
          value: function locale() {
            return Locale.Repository.load(this.getValue('locale'), this.getValue('localeResources'));
          }
        }]);

        return Config;
      })();

      _export('Config', Config);

      Config.uniqueListenerId = 0;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6Qyx1QkFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDaEI7QUFDRCxtQkFBTyxJQUFJLENBQUM7V0FDYjs7O2lCQUVLLGtCQUFHO0FBQ1AsbUJBQU8sTUFBTSxDQUFDLFVBQVUsQ0FDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7V0FDcEU7OztlQTFEVSxNQUFNOzs7d0JBQU4sTUFBTTs7QUE2RG5CLFlBQU0sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA2LzE3LzE1LlxuICovXG5pbXBvcnQge0xvY2FsZX0gZnJvbSAnLi9sb2NhbGUnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnRGVmYXVsdHMge1xufVxuXG5Db25maWdEZWZhdWx0cy5fZGVmYXVsdHMgPSB7XG4gIGxvY2FsZTogJ2VuLVVTJyxcbiAgbG9jYWxlUmVzb3VyY2VzOiAnYXVyZWxpYS1jdXN0b20tY29tbW9uLWZpbGVzL3Jlc291cmNlcy8nXG59O1xuXG5Db25maWdEZWZhdWx0cy5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlZmF1bHRzID0ge307XG4gIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIENvbmZpZ0RlZmF1bHRzLl9kZWZhdWx0cyk7XG4gIHJldHVybiBkZWZhdWx0cztcbn07XG5cbmV4cG9ydCBjbGFzcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihpbm5lckNvbmZpZykge1xuICAgIHRoaXMuaW5uZXJDb25maWcgPSBpbm5lckNvbmZpZztcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuaW5uZXJDb25maWcgPyB7fSA6IENvbmZpZ0RlZmF1bHRzLmRlZmF1bHRzKCk7XG4gICAgdGhpcy5jaGFuZ2VkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXRWYWx1ZShpZGVudGlmaWVyKSB7XG4gICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGlkZW50aWZpZXIpICE9PSBudWxsICYmIHRoaXMudmFsdWVzW2lkZW50aWZpZXJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpZGVudGlmaWVyXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5uZXJDb25maWcgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyQ29uZmlnLmdldFZhbHVlKGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcignQ29uZmlnIG5vdCBmb3VuZDogJyArIGlkZW50aWZpZXIpO1xuICB9XG5cbiAgc2V0VmFsdWUoaWRlbnRpZmllciwgdmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlc1tpZGVudGlmaWVyXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzOyAvL2ZsdWVudCBBUElcbiAgfVxuXG4gIG9uTG9jYWxlQ2hhbmdlZChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmlubmVyQ29uZmlnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyQ29uZmlnLm9uTG9jYWxlQ2hhbmdlZChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpZCA9ICsrVmFsaWRhdGlvbkNvbmZpZy51bmlxdWVMaXN0ZW5lcklkO1xuICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlcnMuc2V0KGlkLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWRIYW5kbGVycy5kZWxldGUoaWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ2RlcGVuZGVuY2llcycpO1xuICB9XG5cbiAgc2V0SHR0cFNlcnZpY2UoaHR0cE9wdHMpIHtcbiAgICBDb25maWcuaHR0cE9wdHMgPSBodHRwT3B0cztcbiAgfVxuXG4gIHJvdXRlckF1dGhTdGVwKG9wdHMpIHtcbiAgICBDb25maWcucm91dGVyQXV0aFN0ZXBPcHRzID0gb3B0cztcbiAgfVxuXG4gIHVzZUxvY2FsZShsb2NhbGVJZGVudGlmaWVyKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSgnbG9jYWxlJywgbG9jYWxlSWRlbnRpZmllcik7XG4gICAgdmFyIGNhbGxiYWNrcyA9IEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSGFuZGxlcnMudmFsdWVzKCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFja3NbaV0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIExvY2FsZS5SZXBvc2l0b3J5XG4gICAgICAubG9hZCh0aGlzLmdldFZhbHVlKCdsb2NhbGUnKSwgdGhpcy5nZXRWYWx1ZSgnbG9jYWxlUmVzb3VyY2VzJykpO1xuICB9XG59XG5cbkNvbmZpZy51bmlxdWVMaXN0ZW5lcklkID0gMDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==