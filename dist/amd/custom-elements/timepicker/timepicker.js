define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'moment', '../../utils/timespan'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _moment, _utilsTimespan) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var _moment2 = _interopRequireDefault(_moment);

  var Timepicker = (function () {
    var _instanceInitializers = {};

    function Timepicker(element) {
      _classCallCheck(this, _Timepicker);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
    }

    var _Timepicker = Timepicker;

    _createDecoratedClass(_Timepicker, [{
      key: 'bind',
      value: function bind() {
        var _this = this;

        var defaultOpts = {
          format: 'HH:mm'
        };

        var div = this.element.firstElementChild;
        var input = div.firstElementChild;
        this.$element = (0, _$['default'])(div);
        this.options = this.options || {};
        if (this.options.format !== undefined) {
          delete this.options.format;
        }

        var options = _$['default'].extend({}, defaultOpts, this.options);
        this.datepicker = this.$element.datetimepicker(options);
        this.datepicker.on('dp.change', function (ev) {
          var elVal = input.value;
          if (elVal === '') {
            _this.value = undefined;
          } else {
            var newTimespan = new _utilsTimespan.Timespan(elVal);
            var areSame = newTimespan.equals(_this.value);
            if (!areSame) {
              _this.value = newTimespan;
            }
          }
        });

        this.valueChanged(this.value);
      }
    }, {
      key: 'valueChanged',
      value: function valueChanged(newValue, oldValue) {
        if (newValue === null || newValue === undefined || newValue === false) {
          this.$element.val('');
          this.value = undefined;
          return;
        }

        if (newValue.constructor.name !== 'Timespan') {
          throw new Error('This has to be moment type.');
        }

        var areSame = newValue.equals(oldValue);
        if (areSame) {
          return;
        }

        var timeAsMoment = (0, _moment2['default'])(newValue.toString(), 'HH:mm');
        this.$element.data('DateTimePicker').date(timeAsMoment);
      }
    }, {
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    Timepicker = (0, _aureliaFramework.inject)(Element)(Timepicker) || Timepicker;
    Timepicker = (0, _aureliaFramework.customElement)('timepicker')(Timepicker) || Timepicker;
    return Timepicker;
  })();

  exports.Timepicker = Timepicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVFhLFVBQVU7OztBQUlWLGFBSkEsVUFBVSxDQUlULE9BQU8sRUFBRTs7Ozs7OztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtLQUN2Qjs7c0JBTlUsVUFBVTs7OzthQVNqQixnQkFBRzs7O0FBQ0wsWUFBTSxXQUFXLEdBQUc7QUFDbEIsZ0JBQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUM7O0FBRUYsWUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxZQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDbEMsWUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBRSxHQUFHLENBQUMsQ0FBQztBQUN2QixZQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xDLFlBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3JDLGlCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQzVCOztBQUVELFlBQUksT0FBTyxHQUFHLGNBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEQsWUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsRUFBRSxFQUFLO0FBQ3RDLGNBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDeEIsY0FBSSxLQUFLLEtBQUssRUFBRSxFQUFFO0FBQ2hCLGtCQUFLLEtBQUssR0FBRyxTQUFTLENBQUM7V0FDeEIsTUFBTTtBQUNMLGdCQUFJLFdBQVcsR0FBRyxtQkFqQ2xCLFFBQVEsQ0FpQ3VCLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLGdCQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQUssS0FBSyxDQUFDLENBQUM7QUFDL0MsZ0JBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixvQkFBSyxLQUFLLEdBQUcsV0FBVyxDQUFDO2FBQzFCO1dBQ0Y7U0FDRixDQUFDLENBQUM7O0FBRUgsWUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDL0I7OzthQUVXLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDL0IsWUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtBQUNyRSxjQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QixjQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN2QixpQkFBTztTQUNSOztBQUdELFlBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQzVDLGdCQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDaEQ7O0FBRUQsWUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyxZQUFJLE9BQU8sRUFBRTtBQUNYLGlCQUFPO1NBQ1I7O0FBRUQsWUFBSSxZQUFZLEdBQUcseUJBQU8sUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELFlBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO09BQ3pEOzs7cUNBbkU0QixRQUFROztlQVNuQixJQUFJOzs7OztxQ0FUTyxRQUFROztlQVVqQixJQUFJOzs7OztBQUZiLGNBQVUsR0FEdEIsc0JBUE8sTUFBTSxFQU9OLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsY0FBVSxHQUZ0QixzQkFOZSxhQUFhLEVBTWQsWUFBWSxDQUFDLENBRWYsVUFBVSxLQUFWLFVBQVU7V0FBVixVQUFVOzs7VUFBVixVQUFVLEdBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtUaW1lc3Bhbn0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXNwYW4nO1xuXG5AY3VzdG9tRWxlbWVudCgndGltZXBpY2tlcicpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlciB7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cblxuICBiaW5kKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgICAgZm9ybWF0OiAnSEg6bW0nXG4gICAgfTtcblxuICAgIHZhciBkaXYgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdmFyIGlucHV0ID0gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGRpdik7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucyk7XG4gICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgIHZhciBlbFZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaWYgKGVsVmFsID09PSAnJykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld1RpbWVzcGFuID0gbmV3IFRpbWVzcGFuKGVsVmFsKTtcbiAgICAgICAgY29uc3QgYXJlU2FtZSA9IG5ld1RpbWVzcGFuLmVxdWFscyh0aGlzLnZhbHVlKTtcbiAgICAgICAgaWYgKCFhcmVTYW1lKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1RpbWVzcGFuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBuZXdWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudmFsKCcnKTtcbiAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICBpZiAobmV3VmFsdWUuY29uc3RydWN0b3IubmFtZSAhPT0gXCJUaW1lc3BhblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaGFzIHRvIGJlIG1vbWVudCB0eXBlLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZVNhbWUgPSBuZXdWYWx1ZS5lcXVhbHMob2xkVmFsdWUpO1xuICAgIGlmIChhcmVTYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRpbWVBc01vbWVudCA9IG1vbWVudChuZXdWYWx1ZS50b1N0cmluZygpLCAnSEg6bW0nKTtcbiAgICB0aGlzLiRlbGVtZW50LmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZGF0ZSh0aW1lQXNNb21lbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=