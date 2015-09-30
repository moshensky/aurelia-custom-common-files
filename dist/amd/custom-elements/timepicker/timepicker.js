define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'moment', '../../utils/timespan'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _moment, _utilsTimespan) {
  'use strict';

  exports.__esModule = true;

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

    _Timepicker.prototype.bind = function bind() {
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

      var timeAsMoment = (0, _moment2['default'])(newValue.toString(), 'HH:mm');
      this.$element.data('DateTimePicker').date(timeAsMoment);
    };

    _createDecoratedClass(_Timepicker, [{
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
    }], null, _instanceInitializers);

    Timepicker = (0, _aureliaFramework.inject)(Element)(Timepicker) || Timepicker;
    Timepicker = (0, _aureliaFramework.customElement)('timepicker')(Timepicker) || Timepicker;
    return Timepicker;
  })();

  exports.Timepicker = Timepicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFRYSxVQUFVOzs7QUFJVixhQUpBLFVBQVUsQ0FJVCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7S0FDdkI7O3NCQU5VLFVBQVU7OzBCQVNyQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLFVBQU0sV0FBVyxHQUFHO0FBQ2xCLGNBQU0sRUFBRSxPQUFPO09BQ2hCLENBQUM7O0FBRUYsVUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxVQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDbEMsVUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBRSxHQUFHLENBQUMsQ0FBQztBQUN2QixVQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xDLFVBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3JDLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7T0FDNUI7O0FBRUQsVUFBSSxPQUFPLEdBQUcsY0FBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEQsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4RCxVQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxFQUFFLEVBQUs7QUFDdEMsWUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUN4QixZQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7QUFDaEIsZ0JBQUssS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QixNQUFNO0FBQ0wsY0FBSSxXQUFXLEdBQUcsbUJBakNsQixRQUFRLENBaUN1QixLQUFLLENBQUMsQ0FBQztBQUN0QyxjQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQUssS0FBSyxDQUFDLENBQUM7QUFDL0MsY0FBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLGtCQUFLLEtBQUssR0FBRyxXQUFXLENBQUM7V0FDMUI7U0FDRjtPQUNGLENBQUMsQ0FBQzs7QUFFSCxVQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7MEJBRUQsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDL0IsVUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDL0MsWUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEIsWUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDdkIsZUFBTztPQUNSOztBQUVELFVBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQzVDLGNBQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztPQUNoRDs7QUFFRCxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLFVBQUksT0FBTyxFQUFFO0FBQ1gsZUFBTztPQUNSOztBQUVELFVBQUksWUFBWSxHQUFHLHlCQUFPLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4RCxVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN6RDs7OztxQ0FsRTRCLFFBQVE7O2VBU25CLElBQUk7Ozs7O3FDQVRPLFFBQVE7O2VBVWpCLElBQUk7Ozs7O0FBRmIsY0FBVSxHQUR0QixzQkFQTyxNQUFNLEVBT04sT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBRnRCLHNCQU5lLGFBQWEsRUFNZCxZQUFZLENBQUMsQ0FFZixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVU7OztVQUFWLFVBQVUsR0FBVixVQUFVIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1RpbWVzcGFufSBmcm9tICcuLi8uLi91dGlscy90aW1lc3Bhbic7XG5cbkBjdXN0b21FbGVtZW50KCd0aW1lcGlja2VyJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyIHtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuXG4gIGJpbmQoKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gICAgICBmb3JtYXQ6ICdISDptbSdcbiAgICB9O1xuXG4gICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB2YXIgaW5wdXQgPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZGl2KTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5mb3JtYXQ7XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5kYXRlcGlja2VyID0gdGhpcy4kZWxlbWVudC5kYXRldGltZXBpY2tlcihvcHRpb25zKTtcbiAgICB0aGlzLmRhdGVwaWNrZXIub24oJ2RwLmNoYW5nZScsIChldikgPT4ge1xuICAgICAgdmFyIGVsVmFsID0gaW5wdXQudmFsdWU7XG4gICAgICBpZiAoZWxWYWwgPT09ICcnKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3VGltZXNwYW4gPSBuZXcgVGltZXNwYW4oZWxWYWwpO1xuICAgICAgICBjb25zdCBhcmVTYW1lID0gbmV3VGltZXNwYW4uZXF1YWxzKHRoaXMudmFsdWUpO1xuICAgICAgICBpZiAoIWFyZVNhbWUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VGltZXNwYW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCB8fCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnZhbCgnJyk7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSBcIlRpbWVzcGFuXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBoYXMgdG8gYmUgbW9tZW50IHR5cGUuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJlU2FtZSA9IG5ld1ZhbHVlLmVxdWFscyhvbGRWYWx1ZSk7XG4gICAgaWYgKGFyZVNhbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGltZUFzTW9tZW50ID0gbW9tZW50KG5ld1ZhbHVlLnRvU3RyaW5nKCksICdISDptbScpO1xuICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKHRpbWVBc01vbWVudCk7XG4gIH1cbn1cbiJdfQ==