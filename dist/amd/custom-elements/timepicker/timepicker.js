define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!text', 'moment', '../../utils/timespan'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCssText, _moment, _utilsTimespan) {
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
      this.$element = _$['default'](div);
      this.options = this.options || {};
      if (this.options.format !== undefined) {
        delete this.options.format;
      }

      var options = _$['default'].extend({}, defaultOpts, this.options);
      this.datepicker = this.$element.datetimepicker(options);
      this.datepicker.on('dp.change', function (ev) {
        var elVal = input.value;
        if (elVal === '') {
          _this.value = null;
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
      if (newValue === undefined) throw new Error('Do not use undefined!');
      if (newValue === null) {
        this.$element.val('');
        this.value = null;
        return;
      }

      if (newValue.constructor.name !== 'Timespan') {
        throw new Error('This has to be moment type.');
      }

      var areSame = newValue.equals(oldValue);
      if (areSame) {
        return;
      }

      var timeAsMoment = _moment2['default'](newValue.toString(), 'HH:mm');
      this.$element.data('DateTimePicker').date(timeAsMoment);
    };

    _createDecoratedClass(_Timepicker, [{
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

    Timepicker = _aureliaFramework.inject(Element)(Timepicker) || Timepicker;
    Timepicker = _aureliaFramework.customElement('timepicker')(Timepicker) || Timepicker;
    return Timepicker;
  })();

  exports.Timepicker = Timepicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFTYSxVQUFVOzs7QUFJVixhQUpBLFVBQVUsQ0FJVCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7S0FDdkI7O3NCQU5VLFVBQVU7OzBCQVFyQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLFVBQU0sV0FBVyxHQUFHO0FBQ2xCLGNBQU0sRUFBRSxPQUFPO09BQ2hCLENBQUM7O0FBRUYsVUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxVQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDbEMsVUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsVUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckMsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztPQUM1Qjs7QUFFRCxVQUFJLE9BQU8sR0FBRyxjQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RCxVQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELFVBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEVBQUUsRUFBSztBQUN0QyxZQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3hCLFlBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNoQixnQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CLE1BQU07QUFDTCxjQUFJLFdBQVcsR0FBRyxtQkFoQ2xCLFFBQVEsQ0FnQ3VCLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLGNBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBSyxLQUFLLENBQUMsQ0FBQztBQUMvQyxjQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osa0JBQUssS0FBSyxHQUFHLFdBQVcsQ0FBQztXQUMxQjtTQUNGO09BQ0YsQ0FBQyxDQUFDOztBQUVILFVBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COzswQkFFRCxZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixVQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3JFLFVBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUNyQixZQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QixZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixlQUFPO09BQ1I7O0FBRUQsVUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDNUMsY0FBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO09BQ2hEOztBQUVELFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsVUFBSSxPQUFPLEVBQUU7QUFDWCxlQUFPO09BQ1I7O0FBRUQsVUFBSSxZQUFZLEdBQUcsb0JBQU8sUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3pEOzs7O3FDQW5FNEIsUUFBUTs7ZUFVbkIsSUFBSTs7Ozs7cUNBVk8sUUFBUTs7ZUFXakIsSUFBSTs7Ozs7QUFGYixjQUFVLEdBRHRCLGtCQVJPLE1BQU0sQ0FRTixPQUFPLENBQUMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLGNBQVUsR0FGdEIsa0JBUGUsYUFBYSxDQU9kLFlBQVksQ0FBQyxDQUVmLFVBQVUsS0FBVixVQUFVO1dBQVYsVUFBVTs7O1VBQVYsVUFBVSxHQUFWLFVBQVUiLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyL2J1aWxkL2Nzcy9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIuY3NzIXRleHQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtUaW1lc3Bhbn0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXNwYW4nO1xuXG5AY3VzdG9tRWxlbWVudCgndGltZXBpY2tlcicpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlciB7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcbiAgICAgIGZvcm1hdDogJ0hIOm1tJ1xuICAgIH07XG5cbiAgICB2YXIgZGl2ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHZhciBpbnB1dCA9IGRpdi5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmZvcm1hdDtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKG9wdGlvbnMpO1xuICAgIHRoaXMuZGF0ZXBpY2tlci5vbignZHAuY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICB2YXIgZWxWYWwgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlmIChlbFZhbCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3VGltZXNwYW4gPSBuZXcgVGltZXNwYW4oZWxWYWwpO1xuICAgICAgICBjb25zdCBhcmVTYW1lID0gbmV3VGltZXNwYW4uZXF1YWxzKHRoaXMudmFsdWUpO1xuICAgICAgICBpZiAoIWFyZVNhbWUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VGltZXNwYW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy4kZWxlbWVudC52YWwoJycpO1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiVGltZXNwYW5cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZS4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmVTYW1lID0gbmV3VmFsdWUuZXF1YWxzKG9sZFZhbHVlKTtcbiAgICBpZiAoYXJlU2FtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0aW1lQXNNb21lbnQgPSBtb21lbnQobmV3VmFsdWUudG9TdHJpbmcoKSwgJ0hIOm1tJyk7XG4gICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUodGltZUFzTW9tZW50KTtcbiAgfVxufVxuIl19