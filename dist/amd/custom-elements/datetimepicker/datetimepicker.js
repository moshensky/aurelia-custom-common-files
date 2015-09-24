define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'moment'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _moment) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var _moment2 = _interopRequireDefault(_moment);

  var Datepicker = (function () {
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
        locale: _moment2['default'].locale(),
        sideBySide: true
      };

      var div = this.element.firstElementChild;
      this.$element = _$['default'](div);

      this.options = this.options || {};
      if (this.options.format !== undefined) {
        delete this.options.format;
      }
      this.options = _$['default'].extend({}, defaultOpts, this.options);

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
    }, {
      key: 'disabled',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }], null, _instanceInitializers);

    Datepicker = _aureliaFramework.inject(Element)(Datepicker) || Datepicker;
    Datepicker = _aureliaFramework.customElement('datetimepicker')(Datepicker) || Datepicker;
    return Datepicker;
  })();

  exports.Datepicker = Datepicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQU9hLFVBQVU7OztBQUtWLGFBTEEsVUFBVSxDQUtULE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztzQkFQVSxVQUFVOzswQkFTckIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxVQUFNLFdBQVcsR0FBRztBQUNsQixnQkFBUSxFQUFFLEtBQUs7QUFDZixrQkFBVSxFQUFFLEtBQUs7QUFDakIscUJBQWEsRUFBRSxJQUFJO0FBQ25CLGNBQU0sRUFBRSxvQkFBTyxNQUFNLEVBQUU7QUFDdkIsa0JBQVUsRUFBRSxJQUFJO09BQ2pCLENBQUM7O0FBRUYsVUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxVQUFJLENBQUMsUUFBUSxHQUFHLGNBQUUsR0FBRyxDQUFDLENBQUM7O0FBRXZCLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsVUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckMsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztPQUM1QjtBQUNELFVBQUksQ0FBQyxPQUFPLEdBQUcsY0FBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXZELFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3RCxVQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDekMsY0FBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztPQUN6QixDQUFDLENBQUM7O0FBRUgsVUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7OzBCQUVELFlBQVksR0FBQSxzQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQy9CLFVBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQixjQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7T0FDMUM7O0FBRUQsVUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3JCLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0QsYUFBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDakIsZUFBTztPQUNSOztBQUdELFVBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtBQUMvQixjQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7T0FDaEQ7O0FBRUQsVUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdCLGVBQU87T0FDUjs7QUFFRCxVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyRDs7OztxQ0FoRTRCLFFBQVE7O2VBUW5CLElBQUk7Ozs7O3FDQVJPLFFBQVE7O2VBU2pCLElBQUk7Ozs7O3FDQVRLLFFBQVE7O2VBVWhCLEtBQUs7Ozs7O0FBSGYsY0FBVSxHQUR0QixrQkFOTyxNQUFNLENBTU4sT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBRnRCLGtCQUxlLGFBQWEsQ0FLZCxnQkFBZ0IsQ0FBQyxDQUVuQixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVU7OztVQUFWLFVBQVUsR0FBVixVQUFVIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ2RhdGV0aW1lcGlja2VyJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyIHtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gICAgICBjb2xsYXBzZTogZmFsc2UsXG4gICAgICB1c2VDdXJyZW50OiBmYWxzZSxcbiAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXG4gICAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKSxcbiAgICAgIHNpZGVCeVNpZGU6IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLmRhdGVwaWNrZXIub24oJ2RwLmNoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmRhdGU7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEbyBub3QgdXNlIHVuZGVmaW5lZCEnKTtcbiAgICB9XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgZGF0ZSBpcyB2YWxpZCBhbmQgbW9tZW50IG9iamVjdFxuICAgIGlmIChuZXdWYWx1ZS5pc1ZhbGlkKCkgIT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBoYXMgdG8gYmUgbW9tZW50IHR5cGUhJyk7XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbHVlLmlzU2FtZShvbGRWYWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZGF0ZShuZXdWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==