define(['exports', './locale'], function (exports, _locale) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
        return _locale.Locale.Repository.load(this.getValue('locale'), this.getValue('localeResources'));
      }
    }]);

    return Config;
  })();

  exports.Config = Config;

  Config.uniqueListenerId = 0;
});
//# sourceMappingURL=data:application/json;base64,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QUFFLEVBQUU7QUFDekMsbUJBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ2hCO0FBQ0QsZUFBTyxJQUFJLENBQUM7T0FDYjs7O2FBRUssa0JBQUc7QUFDUCxlQUFPLFFBeEVILE1BQU0sQ0F3RUksVUFBVSxDQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztPQUNwRTs7O1dBMURVLE1BQU07OztVQUFOLE1BQU0sR0FBTixNQUFNOztBQTZEbkIsUUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbW9zaGVuc2t5IG9uIDYvMTcvMTUuXG4gKi9cbmltcG9ydCB7TG9jYWxlfSBmcm9tICcuL2xvY2FsZSc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdEZWZhdWx0cyB7XG59XG5cbkNvbmZpZ0RlZmF1bHRzLl9kZWZhdWx0cyA9IHtcbiAgbG9jYWxlOiAnZW4tVVMnLFxuICBsb2NhbGVSZXNvdXJjZXM6ICdhdXJlbGlhLWN1c3RvbS1jb21tb24tZmlsZXMvcmVzb3VyY2VzLydcbn07XG5cbkNvbmZpZ0RlZmF1bHRzLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZGVmYXVsdHMgPSB7fTtcbiAgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgQ29uZmlnRGVmYXVsdHMuX2RlZmF1bHRzKTtcbiAgcmV0dXJuIGRlZmF1bHRzO1xufTtcblxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGlubmVyQ29uZmlnKSB7XG4gICAgdGhpcy5pbm5lckNvbmZpZyA9IGlubmVyQ29uZmlnO1xuICAgIHRoaXMudmFsdWVzID0gdGhpcy5pbm5lckNvbmZpZyA/IHt9IDogQ29uZmlnRGVmYXVsdHMuZGVmYXVsdHMoKTtcbiAgICB0aGlzLmNoYW5nZWRIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGdldFZhbHVlKGlkZW50aWZpZXIpIHtcbiAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoaWRlbnRpZmllcikgIT09IG51bGwgJiYgdGhpcy52YWx1ZXNbaWRlbnRpZmllcl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW2lkZW50aWZpZXJdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbm5lckNvbmZpZyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJDb25maWcuZ2V0VmFsdWUoaWRlbnRpZmllcik7XG4gICAgfVxuICAgIHRocm93IEVycm9yKCdDb25maWcgbm90IGZvdW5kOiAnICsgaWRlbnRpZmllcik7XG4gIH1cblxuICBzZXRWYWx1ZShpZGVudGlmaWVyLCB2YWx1ZSkge1xuICAgIHRoaXMudmFsdWVzW2lkZW50aWZpZXJdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7IC8vZmx1ZW50IEFQSVxuICB9XG5cbiAgb25Mb2NhbGVDaGFuZ2VkKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJDb25maWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJDb25maWcub25Mb2NhbGVDaGFuZ2VkKGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGlkID0gKytWYWxpZGF0aW9uQ29uZmlnLnVuaXF1ZUxpc3RlbmVySWQ7XG4gICAgICB0aGlzLmNoYW5nZWRIYW5kbGVycy5zZXQoaWQsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEhhbmRsZXJzLmRlbGV0ZShpZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnZGVwZW5kZW5jaWVzJyk7XG4gIH1cblxuICBzZXRIdHRwU2VydmljZShodHRwT3B0cykge1xuICAgIENvbmZpZy5odHRwT3B0cyA9IGh0dHBPcHRzO1xuICB9XG5cbiAgcm91dGVyQXV0aFN0ZXAob3B0cykge1xuICAgIENvbmZpZy5yb3V0ZXJBdXRoU3RlcE9wdHMgPSBvcHRzO1xuICB9XG5cbiAgdXNlTG9jYWxlKGxvY2FsZUlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnNldFZhbHVlKCdsb2NhbGUnLCBsb2NhbGVJZGVudGlmaWVyKTtcbiAgICB2YXIgY2FsbGJhY2tzID0gQXJyYXkuZnJvbSh0aGlzLmNoYW5nZWRIYW5kbGVycy52YWx1ZXMoKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrc1tpXSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvY2FsZSgpIHtcbiAgICByZXR1cm4gTG9jYWxlLlJlcG9zaXRvcnlcbiAgICAgIC5sb2FkKHRoaXMuZ2V0VmFsdWUoJ2xvY2FsZScpLCB0aGlzLmdldFZhbHVlKCdsb2NhbGVSZXNvdXJjZXMnKSk7XG4gIH1cbn1cblxuQ29uZmlnLnVuaXF1ZUxpc3RlbmVySWQgPSAwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9