define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Locale = (function () {
    function Locale(defaults, data) {
      _classCallCheck(this, Locale);

      this.defaults = defaults;
      this.currentLocale = data;
    }

    Locale.prototype.getValueFor = function getValueFor(identifier, category) {
      if (this.currentLocale && this.currentLocale[category]) {
        var currentLocaleSetting = this.currentLocale[category][identifier];
        if (currentLocaleSetting !== undefined && currentLocaleSetting !== null) return currentLocaleSetting;
      }
      if (this.defaults[category]) {
        var defaultSetting = this.defaults[category][identifier];
        if (defaultSetting !== undefined && defaultSetting !== null) return defaultSetting;
      }
      throw 'validation: I18N: Could not find: ' + identifier + ' in category: ' + category;
    };

    Locale.prototype.setting = function setting(settingIdentifier) {
      return this.getValueFor(settingIdentifier, 'settings');
    };

    Locale.prototype.translate = function translate(translationIdentifier, newValue, threshold) {
      var translation = this.getValueFor(translationIdentifier, 'messages');
      if (typeof translation === 'function') {
        return translation(newValue, threshold);
      }
      if (typeof translation === 'string') {
        return translation;
      }
      throw 'Validation message for ' + translationIdentifier + 'was in an unsupported format';
    };

    return Locale;
  })();

  exports.Locale = Locale;

  var LocaleRepository = (function () {
    function LocaleRepository() {
      _classCallCheck(this, LocaleRepository);

      this['default'] = null;
      this.instances = new Map();
      this.defaults = {
        settings: {},
        messages: {}
      };
    }

    LocaleRepository.prototype.load = function load(localeIdentifier, basePath) {
      var _this = this;

      if (!basePath) basePath = 'aurelia-custom-app-common-files/resources/';

      return new Promise(function (resolve, reject) {
        if (_this.instances.has(localeIdentifier)) {
          var locale = _this.instances.get(localeIdentifier);
          resolve(locale);
        } else {
          System['import'](basePath + localeIdentifier).then(function (resource) {
            var locale = _this.addLocale(localeIdentifier, resource.data);
            resolve(locale);
          });
        }
      });
    };

    LocaleRepository.prototype.addLocale = function addLocale(localeIdentifier, data) {
      var instance = new Locale(this.defaults, data);
      this.instances.set(localeIdentifier, instance);
      if (this['default'] === null) this['default'] = instance;
      return instance;
    };

    return LocaleRepository;
  })();

  Locale.Repository = new LocaleRepository();
});
//# sourceMappingURL=data:application/json;base64,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QUFRLEVBQUs7QUFDNUQsZ0JBQUksTUFBTSxHQUFHLE1BQUssU0FBUyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3RCxtQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQ2pCLENBQUMsQ0FBQztTQUNKO09BQ0YsQ0FBQyxDQUFDO0tBQ0o7O0FBeEJHLG9CQUFnQixXQTBCcEIsU0FBUyxHQUFBLG1CQUFDLGdCQUFnQixFQUFFLElBQUksRUFDaEM7QUFDRSxVQUFJLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLFVBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLFVBQUcsSUFBSSxXQUFRLEtBQUssSUFBSSxFQUN0QixJQUFJLFdBQVEsR0FBRyxRQUFRLENBQUM7QUFDMUIsYUFBTyxRQUFRLENBQUM7S0FDakI7O1dBakNHLGdCQUFnQjs7O0FBb0N0QixRQUFNLENBQUMsVUFBVSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyIsImZpbGUiOiJsb2NhbGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbW9zaGVuc2t5IG9uIDYvMTcvMTUuXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2NhbGV7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzLCBkYXRhKVxuICB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgIHRoaXMuY3VycmVudExvY2FsZSA9IGRhdGE7XG4gIH1cblxuICBnZXRWYWx1ZUZvcihpZGVudGlmaWVyLCBjYXRlZ29yeSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRMb2NhbGUgJiYgdGhpcy5jdXJyZW50TG9jYWxlW2NhdGVnb3J5XSkge1xuICAgICAgdmFyIGN1cnJlbnRMb2NhbGVTZXR0aW5nID0gdGhpcy5jdXJyZW50TG9jYWxlW2NhdGVnb3J5XVtpZGVudGlmaWVyXTtcbiAgICAgIGlmIChjdXJyZW50TG9jYWxlU2V0dGluZyAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRMb2NhbGVTZXR0aW5nICE9PSBudWxsKVxuICAgICAgICByZXR1cm4gY3VycmVudExvY2FsZVNldHRpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLmRlZmF1bHRzW2NhdGVnb3J5XSkge1xuICAgICAgdmFyIGRlZmF1bHRTZXR0aW5nID0gdGhpcy5kZWZhdWx0c1tjYXRlZ29yeV1baWRlbnRpZmllcl07XG4gICAgICBpZiAoZGVmYXVsdFNldHRpbmcgIT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0U2V0dGluZyAhPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5nO1xuICAgIH1cbiAgICB0aHJvdyAndmFsaWRhdGlvbjogSTE4TjogQ291bGQgbm90IGZpbmQ6ICcgKyBpZGVudGlmaWVyICsgJyBpbiBjYXRlZ29yeTogJyArIGNhdGVnb3J5O1xuICB9XG5cbiAgc2V0dGluZyhzZXR0aW5nSWRlbnRpZmllcikge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlRm9yKHNldHRpbmdJZGVudGlmaWVyLCAnc2V0dGluZ3MnKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbklkZW50aWZpZXIsIG5ld1ZhbHVlLCB0aHJlc2hvbGQpIHtcbiAgICB2YXIgdHJhbnNsYXRpb24gPSB0aGlzLmdldFZhbHVlRm9yKHRyYW5zbGF0aW9uSWRlbnRpZmllciwgJ21lc3NhZ2VzJyk7XG4gICAgaWYgKHR5cGVvZiB0cmFuc2xhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uKG5ld1ZhbHVlLCB0aHJlc2hvbGQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRyYW5zbGF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICAgIH1cbiAgICB0aHJvdyAnVmFsaWRhdGlvbiBtZXNzYWdlIGZvciAnICsgdHJhbnNsYXRpb25JZGVudGlmaWVyICsgJ3dhcyBpbiBhbiB1bnN1cHBvcnRlZCBmb3JtYXQnO1xuICB9XG59XG5cbmNsYXNzIExvY2FsZVJlcG9zaXRvcnkgIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmRlZmF1bHQgPSBudWxsO1xuICAgIHRoaXMuaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzZXR0aW5nczoge30sXG4gICAgICBtZXNzYWdlczoge31cbiAgICB9O1xuICB9XG5cbiAgbG9hZChsb2NhbGVJZGVudGlmaWVyLCBiYXNlUGF0aCkge1xuICAgIGlmKCFiYXNlUGF0aCkgYmFzZVBhdGggPSAnYXVyZWxpYS1jdXN0b20tYXBwLWNvbW1vbi1maWxlcy9yZXNvdXJjZXMvJztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZih0aGlzLmluc3RhbmNlcy5oYXMobG9jYWxlSWRlbnRpZmllcikpIHtcbiAgICAgICAgbGV0IGxvY2FsZSA9IHRoaXMuaW5zdGFuY2VzLmdldChsb2NhbGVJZGVudGlmaWVyKTtcbiAgICAgICAgcmVzb2x2ZShsb2NhbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3lzdGVtLmltcG9ydChiYXNlUGF0aCArIGxvY2FsZUlkZW50aWZpZXIpLnRoZW4oKHJlc291cmNlKSA9PiB7XG4gICAgICAgICAgbGV0IGxvY2FsZSA9IHRoaXMuYWRkTG9jYWxlKGxvY2FsZUlkZW50aWZpZXIsIHJlc291cmNlLmRhdGEpO1xuICAgICAgICAgIHJlc29sdmUobG9jYWxlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRMb2NhbGUobG9jYWxlSWRlbnRpZmllciwgZGF0YSlcbiAge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBMb2NhbGUodGhpcy5kZWZhdWx0cywgZGF0YSk7XG4gICAgdGhpcy5pbnN0YW5jZXMuc2V0KGxvY2FsZUlkZW50aWZpZXIsIGluc3RhbmNlKTtcbiAgICBpZih0aGlzLmRlZmF1bHQgPT09IG51bGwpXG4gICAgICB0aGlzLmRlZmF1bHQgPSBpbnN0YW5jZTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbn1cblxuTG9jYWxlLlJlcG9zaXRvcnkgPSBuZXcgTG9jYWxlUmVwb3NpdG9yeSgpO1xuIl19