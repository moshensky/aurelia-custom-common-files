System.register(['aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'moment'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, moment, Datepicker;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_EonasdanBootstrapDatetimepicker) {}, function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      Datepicker = (function () {
        var _instanceInitializers = {};

        function Datepicker(element) {
          _classCallCheck(this, _Datepicker);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

          this.element = element;
        }

        var _Datepicker = Datepicker;

        _Datepicker.prototype.bind = function bind() {
          var _this = this;

          var defaultOpts = {
            collapse: false,
            useCurrent: false,
            calendarWeeks: true,
            locale: moment.locale(),
            format: 'L'
          };

          var div = this.element.firstElementChild;
          this.$element = $(div);

          this.options = this.options || {};
          if (this.options.format !== undefined) {
            delete this.options.format;
          }
          this.options = $.extend({}, defaultOpts, this.options);

          this.datepicker = this.$element.datetimepicker(this.options);
          var self = this;

          this.datepicker.on('dp.change', function (event) {
            _this.value = event.date;

            setTimeout(function () {
              self.element.dispatchEvent(new Event('change'));
            });
          });

          this.valueChanged(this.value);
        };

        _Datepicker.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          if (newValue === undefined) {
            throw new Error('Do not use undefined!');
          }

          if (newValue === null) {
            var input = this.element.firstElementChild.firstElementChild;
            input.value = '';
            return;
          }

          if (newValue.isValid() !== true) {
            throw new Error('This has to be moment type!');
          }

          if (newValue.isSame(oldValue)) {
            return;
          }

          this.$element.data('DateTimePicker').date(newValue);
        };

        _createDecoratedClass(_Datepicker, [{
          key: 'value',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'disabled',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        Datepicker = inject(Element)(Datepicker) || Datepicker;
        Datepicker = customElement('datepicker')(Datepicker) || Datepicker;
        return Datepicker;
      })();

      _export('Datepicker', Datepicker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tEQU9hLFVBQVU7Ozs7Ozs7Ozs7aUNBUGYsTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7Ozs7QUFPMUIsZ0JBQVU7OztBQUtWLGlCQUxBLFVBQVUsQ0FLVCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7MEJBUFUsVUFBVTs7OEJBU3JCLElBQUksR0FBQSxnQkFBRzs7O0FBQ0wsY0FBTSxXQUFXLEdBQUc7QUFDbEIsb0JBQVEsRUFBRSxLQUFLO0FBQ2Ysc0JBQVUsRUFBRSxLQUFLO0FBQ2pCLHlCQUFhLEVBQUUsSUFBSTtBQUNuQixrQkFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDdkIsa0JBQU0sRUFBRSxHQUFHO1dBQ1osQ0FBQzs7QUFFRixjQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLGNBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV2QixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xDLGNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3JDLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1dBQzVCO0FBQ0QsY0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV2RCxjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3RCxjQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLGNBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUssRUFBSztBQUN6QyxrQkFBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7QUFFeEIsc0JBQVUsQ0FBQyxZQUFZO0FBQ3JCLGtCQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2pELENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjs7OEJBRUQsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDL0IsY0FBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLGtCQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7V0FDMUM7O0FBRUQsY0FBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3JCLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzdELGlCQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQixtQkFBTztXQUNSOztBQUdELGNBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtBQUMvQixrQkFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1dBQ2hEOztBQUVELGNBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM3QixtQkFBTztXQUNSOztBQUVELGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEOzs7O3VCQTdEQSxRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVcsSUFBSTs7Ozs7dUJBQ3ZCLFFBQVE7O21CQUFZLEtBQUs7Ozs7O0FBSGYsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUVmLFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ2RhdGVwaWNrZXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXIge1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcbiAgICAgIGNvbGxhcHNlOiBmYWxzZSxcbiAgICAgIHVzZUN1cnJlbnQ6IGZhbHNlLFxuICAgICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcbiAgICAgIGxvY2FsZTogbW9tZW50LmxvY2FsZSgpLFxuICAgICAgZm9ybWF0OiAnTCdcbiAgICB9O1xuXG4gICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudC5kYXRlO1xuICAgICAgLy9GaW5kIGJldHRlciB3YXkgdG8gaW52b2tlIG9ic2VydmFibGUgYmVmb3JlIGZ1bmN0aW9uISEhXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSB1bmRlZmluZWQhJyk7XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGRhdGUgaXMgdmFsaWQgYW5kIG1vbWVudCBvYmplY3RcbiAgICBpZiAobmV3VmFsdWUuaXNWYWxpZCgpICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaGFzIHRvIGJlIG1vbWVudCB0eXBlIScpO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWx1ZS5pc1NhbWUob2xkVmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobmV3VmFsdWUpO1xuICB9XG59XG4iXX0=