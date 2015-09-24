System.register(['aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!text', 'moment'], function (_export) {
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
    }, function (_EonasdanBootstrapDatetimepicker) {}, function (_EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCssText) {}, function (_moment) {
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
            sideBySide: true
          };

          var div = this.element.firstElementChild;
          this.$element = $(div);

          this.options = this.options || {};
          if (this.options.format !== undefined) {
            delete this.options.format;
          }
          this.options = $.extend({}, defaultOpts, this.options);

          this.datepicker = this.$element.datetimepicker(this.options);

          this.datepicker.on('dp.change', function (event) {
            _this.value = event.date;
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
        Datepicker = customElement('datetimepicker')(Datepicker) || Datepicker;
        return Datepicker;
      })();

      _export('Datepicker', Datepicker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0RBUWEsVUFBVTs7Ozs7Ozs7OztpQ0FSZixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7Ozs7OztBQVExQixnQkFBVTs7O0FBS1YsaUJBTEEsVUFBVSxDQUtULE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzswQkFQVSxVQUFVOzs4QkFTckIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxjQUFNLFdBQVcsR0FBRztBQUNsQixvQkFBUSxFQUFFLEtBQUs7QUFDZixzQkFBVSxFQUFFLEtBQUs7QUFDakIseUJBQWEsRUFBRSxJQUFJO0FBQ25CLGtCQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUN2QixzQkFBVSxFQUFFLElBQUk7V0FDakIsQ0FBQzs7QUFFRixjQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLGNBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV2QixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xDLGNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3JDLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1dBQzVCO0FBQ0QsY0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV2RCxjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFN0QsY0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ3pDLGtCQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1dBQ3pCLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjs7OEJBRUQsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDL0IsY0FBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLGtCQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7V0FDMUM7O0FBRUQsY0FBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3JCLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzdELGlCQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQixtQkFBTztXQUNSOztBQUdELGNBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtBQUMvQixrQkFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1dBQ2hEOztBQUVELGNBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM3QixtQkFBTztXQUNSOztBQUVELGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEOzs7O3VCQXhEQSxRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVcsSUFBSTs7Ozs7dUJBQ3ZCLFFBQVE7O21CQUFZLEtBQUs7Ozs7O0FBSGYsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBRW5CLFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIvYnVpbGQvY3NzL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci5jc3MhdGV4dCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbkBjdXN0b21FbGVtZW50KCdkYXRldGltZXBpY2tlcicpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlciB7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgICAgY29sbGFwc2U6IGZhbHNlLFxuICAgICAgdXNlQ3VycmVudDogZmFsc2UsXG4gICAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxuICAgICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKCksXG4gICAgICBzaWRlQnlTaWRlOiB0cnVlXG4gICAgfTtcblxuICAgIHZhciBkaXYgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZGl2KTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmZvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy5kYXRlcGlja2VyID0gdGhpcy4kZWxlbWVudC5kYXRldGltZXBpY2tlcih0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudC5kYXRlO1xuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSB1bmRlZmluZWQhJyk7XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGRhdGUgaXMgdmFsaWQgYW5kIG1vbWVudCBvYmplY3RcbiAgICBpZiAobmV3VmFsdWUuaXNWYWxpZCgpICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaGFzIHRvIGJlIG1vbWVudCB0eXBlIScpO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWx1ZS5pc1NhbWUob2xkVmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobmV3VmFsdWUpO1xuICB9XG59XG4iXX0=