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

        _createDecoratedClass(_Timepicker, [{
          key: 'bind',
          value: function bind() {
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

            var timeAsMoment = moment(newValue.toString(), 'HH:mm');
            this.$element.data('DateTimePicker').date(timeAsMoment);
          }
        }, {
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
        }], null, _instanceInitializers);

        Timepicker = inject(Element)(Timepicker) || Timepicker;
        Timepicker = customElement('timepicker')(Timepicker) || Timepicker;
        return Timepicker;
      })();

      _export('Timepicker', Timepicker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzREQVFhLFVBQVU7Ozs7Ozs7Ozs7aUNBUmYsTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7OztnQ0FJL0IsUUFBUTs7O0FBSUgsZ0JBQVU7OztBQUlWLGlCQUpBLFVBQVUsQ0FJVCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FDdkI7OzBCQU5VLFVBQVU7Ozs7aUJBU2pCLGdCQUFHOzs7QUFDTCxnQkFBTSxXQUFXLEdBQUc7QUFDbEIsb0JBQU0sRUFBRSxPQUFPO2FBQ2hCLENBQUM7O0FBRUYsZ0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDekMsZ0JBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUNsQyxnQkFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsZ0JBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3JDLHFCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzVCOztBQUVELGdCQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELGdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxFQUFFLEVBQUs7QUFDdEMsa0JBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDeEIsa0JBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNoQixzQkFBSyxLQUFLLEdBQUcsU0FBUyxDQUFDO2VBQ3hCLE1BQU07QUFDTCxvQkFBSSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsb0JBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBSyxLQUFLLENBQUMsQ0FBQztBQUMvQyxvQkFBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLHdCQUFLLEtBQUssR0FBRyxXQUFXLENBQUM7aUJBQzFCO2VBQ0Y7YUFDRixDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQy9COzs7aUJBRVcsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixnQkFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtBQUNyRSxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLHFCQUFPO2FBQ1I7O0FBR0QsZ0JBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQzVDLG9CQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDaEQ7O0FBRUQsZ0JBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsZ0JBQUksT0FBTyxFQUFFO0FBQ1gscUJBQU87YUFDUjs7QUFFRCxnQkFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4RCxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7V0FDekQ7Ozt1QkExREEsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFXLElBQUk7Ozs7O0FBRmIsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUVmLFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGltZXNwYW59IGZyb20gJy4uLy4uL3V0aWxzL3RpbWVzcGFuJztcblxuQGN1c3RvbUVsZW1lbnQoJ3RpbWVwaWNrZXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXIge1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcbiAgICAgIGZvcm1hdDogJ0hIOm1tJ1xuICAgIH07XG5cbiAgICB2YXIgZGl2ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHZhciBpbnB1dCA9IGRpdi5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmZvcm1hdDtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKG9wdGlvbnMpO1xuICAgIHRoaXMuZGF0ZXBpY2tlci5vbignZHAuY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICB2YXIgZWxWYWwgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlmIChlbFZhbCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdUaW1lc3BhbiA9IG5ldyBUaW1lc3BhbihlbFZhbCk7XG4gICAgICAgIGNvbnN0IGFyZVNhbWUgPSBuZXdUaW1lc3Bhbi5lcXVhbHModGhpcy52YWx1ZSk7XG4gICAgICAgIGlmICghYXJlU2FtZSkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdUaW1lc3BhbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsIHx8IG5ld1ZhbHVlID09PSB1bmRlZmluZWQgfHwgbmV3VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnZhbCgnJyk7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgaWYgKG5ld1ZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiVGltZXNwYW5cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZS4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmVTYW1lID0gbmV3VmFsdWUuZXF1YWxzKG9sZFZhbHVlKTtcbiAgICBpZiAoYXJlU2FtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0aW1lQXNNb21lbnQgPSBtb21lbnQobmV3VmFsdWUudG9TdHJpbmcoKSwgJ0hIOm1tJyk7XG4gICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUodGltZUFzTW9tZW50KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9