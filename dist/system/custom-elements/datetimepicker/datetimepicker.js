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

            setTimeout(function () {
              self.element.dispatchEvent(new Event('change'));
            });
          });

          this.valueChanged(this.value);
        };

        _Datepicker.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          if (newValue === null || newValue === undefined) {
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
        }, {
          key: 'disabled',
          decorators: [bindable],
          initializer: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0RBT2EsVUFBVTs7Ozs7Ozs7OztpQ0FQZixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7Ozs7OztBQU8xQixnQkFBVTs7O0FBS1YsaUJBTEEsVUFBVSxDQUtULE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzswQkFQVSxVQUFVOzs4QkFTckIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxjQUFNLFdBQVcsR0FBRztBQUNsQixvQkFBUSxFQUFFLEtBQUs7QUFDZixzQkFBVSxFQUFFLEtBQUs7QUFDakIseUJBQWEsRUFBRSxJQUFJO0FBQ25CLGtCQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUN2QixzQkFBVSxFQUFFLElBQUk7V0FDakIsQ0FBQzs7QUFFRixjQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLGNBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV2QixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xDLGNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3JDLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1dBQzVCO0FBQ0QsY0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV2RCxjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFN0QsY0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ3pDLGtCQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV4QixzQkFBVSxDQUFDLFlBQVk7QUFDckIsa0JBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9COzs4QkFFRCxZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixjQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMvQyxnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQztBQUM3RCxpQkFBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDakIsbUJBQU87V0FDUjs7QUFHRCxjQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7QUFDL0Isa0JBQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztXQUNoRDs7QUFFRCxjQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDN0IsbUJBQU87V0FDUjs7QUFFRCxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyRDs7Ozt1QkF4REEsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBWSxLQUFLOzs7OztBQUhmLGtCQUFVLEdBRHRCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLGtCQUFVLEdBRnRCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUVuQixVQUFVLEtBQVYsVUFBVTtlQUFWLFVBQVU7Ozs0QkFBVixVQUFVIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ2RhdGV0aW1lcGlja2VyJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyIHtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gICAgICBjb2xsYXBzZTogZmFsc2UsXG4gICAgICB1c2VDdXJyZW50OiBmYWxzZSxcbiAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXG4gICAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKSxcbiAgICAgIHNpZGVCeVNpZGU6IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLmRhdGVwaWNrZXIub24oJ2RwLmNoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmRhdGU7XG4gICAgICAvL0ZpbmQgYmV0dGVyIHdheSB0byBpbnZva2Ugb2JzZXJ2YWJsZSBiZWZvcmUgZnVuY3Rpb24hISFcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBkYXRlIGlzIHZhbGlkIGFuZCBtb21lbnQgb2JqZWN0XG4gICAgaWYgKG5ld1ZhbHVlLmlzVmFsaWQoKSAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZSEnKTtcbiAgICB9XG5cbiAgICBpZiAobmV3VmFsdWUuaXNTYW1lKG9sZFZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKG5ld1ZhbHVlKTtcbiAgfVxufVxuIl19