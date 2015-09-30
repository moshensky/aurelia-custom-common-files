System.register(['aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'moment', '../../utils/timespan'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, moment, Timespan, Timepicker;

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
    }, function (_utilsTimespan) {
      Timespan = _utilsTimespan.Timespan;
    }],
    execute: function () {
      Timepicker = (function () {
        var _instanceInitializers = {};

        function Timepicker(element) {
          _classCallCheck(this, _Timepicker);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
        }

        var _Timepicker = Timepicker;

        _Timepicker.prototype.bind = function bind() {
          var _this = this;

          var defaultOpts = {
            format: 'HH:mm'
          };

          var div = this.element.firstElementChild;
          var input = div.firstElementChild;
          this.$element = $(div);
          this.options = this.options || {};
          if (this.options.format !== undefined) {
            delete this.options.format;
          }

          var options = $.extend({}, defaultOpts, this.options);
          this.datepicker = this.$element.datetimepicker(options);
          this.datepicker.on('dp.change', function (ev) {
            var elVal = input.value;
            if (elVal === '') {
              _this.value = undefined;
            } else {
              var newTimespan = new Timespan(elVal);
              var areSame = newTimespan.equals(_this.value);
              if (!areSame) {
                _this.value = newTimespan;
              }
            }
          });

          this.valueChanged(this.value);
        };

        _Timepicker.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          if (newValue === null || newValue === undefined) {
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

          var timeAsMoment = moment(newValue.toString(), 'HH:mm');
          this.$element.data('DateTimePicker').date(timeAsMoment);
        };

        _createDecoratedClass(_Timepicker, [{
          key: 'value',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        Timepicker = inject(Element)(Timepicker) || Timepicker;
        Timepicker = customElement('timepicker')(Timepicker) || Timepicker;
        return Timepicker;
      })();

      _export('Timepicker', Timepicker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzREQVFhLFVBQVU7Ozs7Ozs7Ozs7aUNBUmYsTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7OztnQ0FJL0IsUUFBUTs7O0FBSUgsZ0JBQVU7OztBQUlWLGlCQUpBLFVBQVUsQ0FJVCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FDdkI7OzBCQU5VLFVBQVU7OzhCQVNyQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLGNBQU0sV0FBVyxHQUFHO0FBQ2xCLGtCQUFNLEVBQUUsT0FBTztXQUNoQixDQUFDOztBQUVGLGNBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDekMsY0FBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDLGNBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsY0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckMsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7V0FDNUI7O0FBRUQsY0FBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RCxjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEVBQUUsRUFBSztBQUN0QyxnQkFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUN4QixnQkFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO0FBQ2hCLG9CQUFLLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDeEIsTUFBTTtBQUNMLGtCQUFJLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxrQkFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFLLEtBQUssQ0FBQyxDQUFDO0FBQy9DLGtCQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osc0JBQUssS0FBSyxHQUFHLFdBQVcsQ0FBQztlQUMxQjthQUNGO1dBQ0YsQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9COzs4QkFFRCxZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixjQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMvQyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLG1CQUFPO1dBQ1I7O0FBRUQsY0FBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDNUMsa0JBQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztXQUNoRDs7QUFFRCxjQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLGNBQUksT0FBTyxFQUFFO0FBQ1gsbUJBQU87V0FDUjs7QUFFRCxjQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pEOzs7O3VCQXpEQSxRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVcsSUFBSTs7Ozs7QUFGYixrQkFBVSxHQUR0QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBVixrQkFBVSxHQUZ0QixhQUFhLENBQUMsWUFBWSxDQUFDLENBRWYsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVOzs7NEJBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtUaW1lc3Bhbn0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXNwYW4nO1xuXG5AY3VzdG9tRWxlbWVudCgndGltZXBpY2tlcicpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlciB7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cblxuICBiaW5kKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgICAgZm9ybWF0OiAnSEg6bW0nXG4gICAgfTtcblxuICAgIHZhciBkaXYgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdmFyIGlucHV0ID0gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGRpdik7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucyk7XG4gICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgIHZhciBlbFZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaWYgKGVsVmFsID09PSAnJykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld1RpbWVzcGFuID0gbmV3IFRpbWVzcGFuKGVsVmFsKTtcbiAgICAgICAgY29uc3QgYXJlU2FtZSA9IG5ld1RpbWVzcGFuLmVxdWFscyh0aGlzLnZhbHVlKTtcbiAgICAgICAgaWYgKCFhcmVTYW1lKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1RpbWVzcGFuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC52YWwoJycpO1xuICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV3VmFsdWUuY29uc3RydWN0b3IubmFtZSAhPT0gXCJUaW1lc3BhblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaGFzIHRvIGJlIG1vbWVudCB0eXBlLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZVNhbWUgPSBuZXdWYWx1ZS5lcXVhbHMob2xkVmFsdWUpO1xuICAgIGlmIChhcmVTYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRpbWVBc01vbWVudCA9IG1vbWVudChuZXdWYWx1ZS50b1N0cmluZygpLCAnSEg6bW0nKTtcbiAgICB0aGlzLiRlbGVtZW50LmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZGF0ZSh0aW1lQXNNb21lbnQpO1xuICB9XG59XG4iXX0=