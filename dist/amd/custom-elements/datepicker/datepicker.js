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
        format: 'L'
      };

      var div = this.element.firstElementChild;
      this.$element = (0, _$['default'])(div);

      this.options = this.options || {};
      if (this.options.format !== undefined) {
        delete this.options.format;
      }
      this.options = _$['default'].extend({}, defaultOpts, this.options);

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
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return null;
      },
      enumerable: true
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return null;
      },
      enumerable: true
    }, {
      key: 'disabled',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return false;
      },
      enumerable: true
    }], null, _instanceInitializers);

    Datepicker = (0, _aureliaFramework.inject)(Element)(Datepicker) || Datepicker;
    Datepicker = (0, _aureliaFramework.customElement)('datepicker')(Datepicker) || Datepicker;
    return Datepicker;
  })();

  exports.Datepicker = Datepicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFPYSxVQUFVOzs7QUFLVixhQUxBLFVBQVUsQ0FLVCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7c0JBUFUsVUFBVTs7MEJBU3JCLElBQUksR0FBQSxnQkFBRzs7O0FBQ0wsVUFBTSxXQUFXLEdBQUc7QUFDbEIsZ0JBQVEsRUFBRSxLQUFLO0FBQ2Ysa0JBQVUsRUFBRSxLQUFLO0FBQ2pCLHFCQUFhLEVBQUUsSUFBSTtBQUNuQixjQUFNLEVBQUUsb0JBQU8sTUFBTSxFQUFFO0FBQ3ZCLGNBQU0sRUFBRSxHQUFHO09BQ1osQ0FBQzs7QUFFRixVQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLFVBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQUUsR0FBRyxDQUFDLENBQUM7O0FBRXZCLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsVUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckMsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztPQUM1QjtBQUNELFVBQUksQ0FBQyxPQUFPLEdBQUcsY0FBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXZELFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdELFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsVUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ3pDLGNBQUssS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O0FBRXhCLGtCQUFVLENBQUMsWUFBWTtBQUNyQixjQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ2pELENBQUMsQ0FBQztPQUNKLENBQUMsQ0FBQzs7QUFFSCxVQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7MEJBRUQsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDL0IsVUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDL0MsWUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQztBQUM3RCxhQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQixlQUFPO09BQ1I7O0FBR0QsVUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO0FBQy9CLGNBQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztPQUNoRDs7QUFFRCxVQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDN0IsZUFBTztPQUNSOztBQUVELFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3JEOzs7O3FDQWpFNEIsUUFBUTs7ZUFRbkIsSUFBSTs7Ozs7cUNBUk8sUUFBUTs7ZUFTakIsSUFBSTs7Ozs7cUNBVEssUUFBUTs7ZUFVaEIsS0FBSzs7Ozs7QUFIZixjQUFVLEdBRHRCLHNCQU5PLE1BQU0sRUFNTixPQUFPLENBQUMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLGNBQVUsR0FGdEIsc0JBTGUsYUFBYSxFQUtkLFlBQVksQ0FBQyxDQUVmLFVBQVUsS0FBVixVQUFVO1dBQVYsVUFBVTs7O1VBQVYsVUFBVSxHQUFWLFVBQVUiLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ2RhdGVwaWNrZXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXIge1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcbiAgICAgIGNvbGxhcHNlOiBmYWxzZSxcbiAgICAgIHVzZUN1cnJlbnQ6IGZhbHNlLFxuICAgICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcbiAgICAgIGxvY2FsZTogbW9tZW50LmxvY2FsZSgpLFxuICAgICAgZm9ybWF0OiAnTCdcbiAgICB9O1xuXG4gICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudC5kYXRlO1xuICAgICAgLy9GaW5kIGJldHRlciB3YXkgdG8gaW52b2tlIG9ic2VydmFibGUgYmVmb3JlIGZ1bmN0aW9uISEhXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsIHx8IG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgZGF0ZSBpcyB2YWxpZCBhbmQgbW9tZW50IG9iamVjdFxuICAgIGlmIChuZXdWYWx1ZS5pc1ZhbGlkKCkgIT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBoYXMgdG8gYmUgbW9tZW50IHR5cGUhJyk7XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbHVlLmlzU2FtZShvbGRWYWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZGF0ZShuZXdWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==