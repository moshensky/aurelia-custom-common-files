define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment', '../../utils/timespan'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCss, _moment, _utilsTimespan) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFTYSxVQUFVOzs7QUFJUixpQkFKRixVQUFVLENBSVAsT0FBTyxFQUFFOzs7Ozs7O0FBQ2pCLGdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUN6Qjs7MEJBTlEsVUFBVTs7OEJBUW5CLElBQUksR0FBQSxnQkFBRzs7O0FBQ0gsZ0JBQU0sV0FBVyxHQUFHO0FBQ2hCLHNCQUFNLEVBQUUsT0FBTzthQUNsQixDQUFDOztBQUVGLGdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLGdCQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDbEMsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsY0FBRSxHQUFHLENBQUMsQ0FBQztBQUN2QixnQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxnQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDbkMsdUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDOUI7O0FBRUQsZ0JBQUksT0FBTyxHQUFHLGNBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELGdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxFQUFFLEVBQUs7QUFDcEMsb0JBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDeEIsb0JBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNkLDBCQUFLLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ3JCLE1BQU07QUFDSCx3QkFBSSxXQUFXLEdBQUcsbUJBaEMxQixRQUFRLENBZ0MrQixLQUFLLENBQUMsQ0FBQztBQUN0Qyx3QkFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFLLEtBQUssQ0FBQyxDQUFDO0FBQy9DLHdCQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1YsOEJBQUssS0FBSyxHQUFHLFdBQVcsQ0FBQztxQkFDNUI7aUJBQ0o7YUFDSixDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDOzs4QkFFRCxZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUM3QixnQkFBSSxRQUFRLEtBQUssU0FBUyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRSxnQkFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ25CLG9CQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QixvQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsdUJBQU87YUFDVjs7QUFFRCxnQkFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDMUMsc0JBQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUNsRDs7QUFFRCxnQkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyxnQkFBSSxPQUFPLEVBQUU7QUFDVCx1QkFBTzthQUNWOztBQUVELGdCQUFJLFlBQVksR0FBRyxvQkFBTyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEQsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNEOzs7OzJDQW5FMEIsUUFBUTs7dUJBVWpCLElBQUk7Ozs7OzJDQVZLLFFBQVE7O3VCQVdmLElBQUk7Ozs7O0FBRmYsa0JBQVUsR0FEdEIsa0JBUk8sTUFBTSxDQVFOLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsa0JBUGUsYUFBYSxDQU9kLFlBQVksQ0FBQyxDQUVmLFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVTs7O1lBQVYsVUFBVSxHQUFWLFVBQVUiLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyL2J1aWxkL2Nzcy9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIuY3NzISc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1RpbWVzcGFufSBmcm9tICcuLi8uLi91dGlscy90aW1lc3Bhbic7XG5cbkBjdXN0b21FbGVtZW50KCd0aW1lcGlja2VyJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyIHtcbiAgICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgICAgICAgICAgZm9ybWF0OiAnSEg6bW0nXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdmFyIGlucHV0ID0gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5vbignZHAuY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICB2YXIgZWxWYWwgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChlbFZhbCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RpbWVzcGFuID0gbmV3IFRpbWVzcGFuKGVsVmFsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmVTYW1lID0gbmV3VGltZXNwYW4uZXF1YWxzKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICghYXJlU2FtZSkgeyAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdUaW1lc3BhbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudmFsKCcnKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiVGltZXNwYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFyZVNhbWUgPSBuZXdWYWx1ZS5lcXVhbHMob2xkVmFsdWUpO1xuICAgICAgICBpZiAoYXJlU2FtZSkgeyBcbiAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGltZUFzTW9tZW50ID0gbW9tZW50KG5ld1ZhbHVlLnRvU3RyaW5nKCksICdISDptbScpO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZGF0ZSh0aW1lQXNNb21lbnQpO1xuICAgIH1cbn1cbiJdfQ==