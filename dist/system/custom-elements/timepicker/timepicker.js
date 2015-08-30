System.register(['aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment', '../../utils/timespan'], function (_export) {
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
    }, function (_EonasdanBootstrapDatetimepicker) {}, function (_EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCss) {}, function (_moment) {
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
              _this.value = null;
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

          var timeAsMoment = moment(newValue.toString(), 'HH:mm');
          this.$element.data('DateTimePicker').date(timeAsMoment);
        };

        _createDecoratedClass(_Timepicker, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzREQVNhLFVBQVU7Ozs7Ozs7Ozs7aUNBVGYsTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7OztnQ0FLL0IsUUFBUTs7O0FBSUgsZ0JBQVU7OztBQUlWLGlCQUpBLFVBQVUsQ0FJVCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FDdkI7OzBCQU5VLFVBQVU7OzhCQVFyQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLGNBQU0sV0FBVyxHQUFHO0FBQ2xCLGtCQUFNLEVBQUUsT0FBTztXQUNoQixDQUFDOztBQUVGLGNBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDekMsY0FBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDLGNBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsY0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckMsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7V0FDNUI7O0FBRUQsY0FBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RCxjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEVBQUUsRUFBSztBQUN0QyxnQkFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUN4QixnQkFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO0FBQ2hCLG9CQUFLLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkIsTUFBTTtBQUNMLGtCQUFJLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxrQkFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFLLEtBQUssQ0FBQyxDQUFDO0FBQy9DLGtCQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osc0JBQUssS0FBSyxHQUFHLFdBQVcsQ0FBQztlQUMxQjthQUNGO1dBQ0YsQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9COzs4QkFFRCxZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixjQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3JFLGNBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUNyQixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLG1CQUFPO1dBQ1I7O0FBRUQsY0FBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDNUMsa0JBQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztXQUNoRDs7QUFFRCxjQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLGNBQUksT0FBTyxFQUFFO0FBQ1gsbUJBQU87V0FDUjs7QUFFRCxjQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pEOzs7O3VCQXpEQSxRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVcsSUFBSTs7Ozs7QUFGYixrQkFBVSxHQUR0QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBVixrQkFBVSxHQUZ0QixhQUFhLENBQUMsWUFBWSxDQUFDLENBRWYsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVOzs7NEJBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIvYnVpbGQvY3NzL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci5jc3MhJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGltZXNwYW59IGZyb20gJy4uLy4uL3V0aWxzL3RpbWVzcGFuJztcblxuQGN1c3RvbUVsZW1lbnQoJ3RpbWVwaWNrZXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXIge1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gICAgICBmb3JtYXQ6ICdISDptbSdcbiAgICB9O1xuXG4gICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB2YXIgaW5wdXQgPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZGl2KTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5mb3JtYXQ7XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5kYXRlcGlja2VyID0gdGhpcy4kZWxlbWVudC5kYXRldGltZXBpY2tlcihvcHRpb25zKTtcbiAgICB0aGlzLmRhdGVwaWNrZXIub24oJ2RwLmNoYW5nZScsIChldikgPT4ge1xuICAgICAgdmFyIGVsVmFsID0gaW5wdXQudmFsdWU7XG4gICAgICBpZiAoZWxWYWwgPT09ICcnKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld1RpbWVzcGFuID0gbmV3IFRpbWVzcGFuKGVsVmFsKTtcbiAgICAgICAgY29uc3QgYXJlU2FtZSA9IG5ld1RpbWVzcGFuLmVxdWFscyh0aGlzLnZhbHVlKTtcbiAgICAgICAgaWYgKCFhcmVTYW1lKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1RpbWVzcGFuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCdEbyBub3QgdXNlIHVuZGVmaW5lZCEnKTtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudmFsKCcnKTtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSBcIlRpbWVzcGFuXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBoYXMgdG8gYmUgbW9tZW50IHR5cGUuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJlU2FtZSA9IG5ld1ZhbHVlLmVxdWFscyhvbGRWYWx1ZSk7XG4gICAgaWYgKGFyZVNhbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGltZUFzTW9tZW50ID0gbW9tZW50KG5ld1ZhbHVlLnRvU3RyaW5nKCksICdISDptbScpO1xuICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKHRpbWVBc01vbWVudCk7XG4gIH1cbn1cbiJdfQ==