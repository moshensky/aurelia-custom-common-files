define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!text', 'moment'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCssText, _moment) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQVFhLFVBQVU7OztBQUtWLGFBTEEsVUFBVSxDQUtULE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztzQkFQVSxVQUFVOzswQkFTckIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxVQUFNLFdBQVcsR0FBRztBQUNsQixnQkFBUSxFQUFFLEtBQUs7QUFDZixrQkFBVSxFQUFFLEtBQUs7QUFDakIscUJBQWEsRUFBRSxJQUFJO0FBQ25CLGNBQU0sRUFBRSxvQkFBTyxNQUFNLEVBQUU7QUFDdkIsa0JBQVUsRUFBRSxJQUFJO09BQ2pCLENBQUM7O0FBRUYsVUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxVQUFJLENBQUMsUUFBUSxHQUFHLGNBQUUsR0FBRyxDQUFDLENBQUM7O0FBRXZCLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsVUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckMsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztPQUM1QjtBQUNELFVBQUksQ0FBQyxPQUFPLEdBQUcsY0FBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXZELFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3RCxVQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDekMsY0FBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztPQUN6QixDQUFDLENBQUM7O0FBRUgsVUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7OzBCQUVELFlBQVksR0FBQSxzQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQy9CLFVBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQixjQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7T0FDMUM7O0FBRUQsVUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3JCLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0QsYUFBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDakIsZUFBTztPQUNSOztBQUdELFVBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtBQUMvQixjQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7T0FDaEQ7O0FBRUQsVUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdCLGVBQU87T0FDUjs7QUFFRCxVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyRDs7OztxQ0FqRTRCLFFBQVE7O2VBU25CLElBQUk7Ozs7O3FDQVRPLFFBQVE7O2VBVWpCLElBQUk7Ozs7O3FDQVZLLFFBQVE7O2VBV2hCLEtBQUs7Ozs7O0FBSGYsY0FBVSxHQUR0QixrQkFQTyxNQUFNLENBT04sT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBRnRCLGtCQU5lLGFBQWEsQ0FNZCxnQkFBZ0IsQ0FBQyxDQUVuQixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVU7OztVQUFWLFVBQVUsR0FBVixVQUFVIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyL2J1aWxkL2Nzcy9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIuY3NzIXRleHQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgnZGF0ZXRpbWVwaWNrZXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXIge1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcbiAgICAgIGNvbGxhcHNlOiBmYWxzZSxcbiAgICAgIHVzZUN1cnJlbnQ6IGZhbHNlLFxuICAgICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcbiAgICAgIGxvY2FsZTogbW9tZW50LmxvY2FsZSgpLFxuICAgICAgc2lkZUJ5U2lkZTogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgZGl2ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGRpdik7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5mb3JtYXQ7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIodGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMuZGF0ZXBpY2tlci5vbignZHAuY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gZXZlbnQuZGF0ZTtcbiAgICB9KTtcblxuICAgIHRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBkYXRlIGlzIHZhbGlkIGFuZCBtb21lbnQgb2JqZWN0XG4gICAgaWYgKG5ld1ZhbHVlLmlzVmFsaWQoKSAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZSEnKTtcbiAgICB9XG5cbiAgICBpZiAobmV3VmFsdWUuaXNTYW1lKG9sZFZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKG5ld1ZhbHVlKTtcbiAgfVxufVxuIl19