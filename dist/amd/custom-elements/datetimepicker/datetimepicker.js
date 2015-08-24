define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCss, _moment) {
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

            if (newValue.constructor.name !== 'Moment') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztRQVFhLFVBQVU7OztBQUtSLGlCQUxGLFVBQVUsQ0FLUCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNqQixnQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDMUI7OzBCQVBRLFVBQVU7OzhCQVNuQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNILGdCQUFNLFdBQVcsR0FBRztBQUNoQix3QkFBUSxFQUFFLEtBQUs7QUFDZiwwQkFBVSxFQUFFLEtBQUs7QUFDakIsNkJBQWEsRUFBRSxJQUFJO0FBQ25CLHNCQUFNLEVBQUUsb0JBQU8sTUFBTSxFQUFFO0FBQ3ZCLDBCQUFVLEVBQUUsSUFBSTthQUNuQixDQUFDOztBQUVGLGdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLGdCQUFJLENBQUMsUUFBUSxHQUFHLGNBQUUsR0FBRyxDQUFDLENBQUM7O0FBRXZCLGdCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xDLGdCQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUNuQyx1QkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUM5QjtBQUNELGdCQUFJLENBQUMsT0FBTyxHQUFHLGNBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV2RCxnQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTdELGdCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDdkMsc0JBQUssS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDM0IsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzs7OEJBRUQsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDN0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUN4QixzQkFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQzVDOztBQUVELGdCQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDbkIsb0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0QscUJBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLHVCQUFPO2FBQ1Y7O0FBRUQsZ0JBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQ3hDLHNCQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDbEQ7O0FBRUQsZ0JBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzQix1QkFBTzthQUNWOztBQUVELGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RDs7OzsyQ0FoRTBCLFFBQVE7O3VCQVNqQixJQUFJOzs7OzsyQ0FUSyxRQUFROzt1QkFVZixJQUFJOzs7OzsyQ0FWRyxRQUFROzt1QkFXZCxLQUFLOzs7OztBQUhqQixrQkFBVSxHQUR0QixrQkFQTyxNQUFNLENBT04sT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBVixrQkFBVSxHQUZ0QixrQkFOZSxhQUFhLENBTWQsZ0JBQWdCLENBQUMsQ0FFbkIsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVOzs7WUFBVixVQUFVLEdBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci9idWlsZC9jc3MvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmNzcyEnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgnZGF0ZXRpbWVwaWNrZXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXIge1xuICAgIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gICAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgICAgICAgICAgY29sbGFwc2U6IGZhbHNlLFxuICAgICAgICAgICAgdXNlQ3VycmVudDogZmFsc2UsXG4gICAgICAgICAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKCksXG4gICAgICAgICAgICBzaWRlQnlTaWRlOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICQoZGl2KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBldmVudC5kYXRlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiTW9tZW50XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBoYXMgdG8gYmUgbW9tZW50IHR5cGUhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VmFsdWUuaXNTYW1lKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobmV3VmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==