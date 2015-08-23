System.register(['aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment'], function (_export) {
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
        }, function (_EonasdanBootstrapDatetimepicker) {}, function (_EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCss) {}, function (_moment) {
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
                        format: 'L'
                    };

                    var div = this.element.firstElementChild;
                    this.$element = $(div);

                    this.options = this.options || {};
                    if (this.options.format !== undefined) {
                        delete this.options.format;
                    }
                    this.options = $.extend({}, defaultOpts, this.options);

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
                }, {
                    key: 'disabled',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return false;
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                Datepicker = inject(Element)(Datepicker) || Datepicker;
                Datepicker = customElement('datepicker')(Datepicker) || Datepicker;
                return Datepicker;
            })();

            _export('Datepicker', Datepicker);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29EQVFhLFVBQVU7Ozs7Ozs7Ozs7dUNBUmYsTUFBTTs4Q0FBRSxhQUFhO3lDQUFFLFFBQVE7Ozs7Ozs7QUFRMUIsc0JBQVU7OztBQUtSLHlCQUxGLFVBQVUsQ0FLUCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNqQix3QkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7aUJBQzFCOztrQ0FQUSxVQUFVOztzQ0FTbkIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDSCx3QkFBTSxXQUFXLEdBQUc7QUFDaEIsZ0NBQVEsRUFBRSxLQUFLO0FBQ2Ysa0NBQVUsRUFBRSxLQUFLO0FBQ2pCLHFDQUFhLEVBQUUsSUFBSTtBQUNuQiw4QkFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDdkIsOEJBQU0sRUFBRSxHQUFHO3FCQUNkLENBQUM7O0FBRUYsd0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDekMsd0JBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV2Qix3QkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQyx3QkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDbkMsK0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7cUJBQzlCO0FBQ0Qsd0JBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkQsd0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdELHdCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLHdCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDdkMsOEJBQUssS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O0FBRXhCLGtDQUFVLENBQUMsWUFBVztBQUNwQixnQ0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt5QkFDakQsQ0FBQyxDQUFDO3FCQUNOLENBQUMsQ0FBQzs7QUFFSCx3QkFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDOztzQ0FFRCxZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUM3Qix3QkFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQ3hCLDhCQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7cUJBQzVDOztBQUVELHdCQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDbkIsNEJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0QsNkJBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLCtCQUFPO3FCQUNWOztBQUVELHdCQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUN4Qyw4QkFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3FCQUNsRDs7QUFFRCx3QkFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzNCLCtCQUFPO3FCQUNWOztBQUVELHdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkQ7Ozs7aUNBNURBLFFBQVE7OytCQUFTLElBQUk7Ozs7O2lDQUNyQixRQUFROzsrQkFBVyxJQUFJOzs7OztpQ0FDdkIsUUFBUTs7K0JBQVksS0FBSzs7Ozs7QUFIakIsMEJBQVUsR0FEdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsMEJBQVUsR0FGdEIsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUVmLFVBQVUsS0FBVixVQUFVO3VCQUFWLFVBQVU7OztrQ0FBVixVQUFVIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci9idWlsZC9jc3MvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmNzcyEnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgnZGF0ZXBpY2tlcicpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlciB7XG4gICAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gICAgICAgICAgICBjb2xsYXBzZTogZmFsc2UsXG4gICAgICAgICAgICB1c2VDdXJyZW50OiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKSxcbiAgICAgICAgICAgIGZvcm1hdDogJ0wnXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICQoZGl2KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIub24oJ2RwLmNoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmRhdGU7XG4gICAgICAgICAgICAvL0ZpbmQgYmV0dGVyIHdheSB0byBpbnZva2Ugb2JzZXJ2YWJsZSBiZWZvcmUgZnVuY3Rpb24hISFcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEbyBub3QgdXNlIHVuZGVmaW5lZCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSBcIk1vbWVudFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaGFzIHRvIGJlIG1vbWVudCB0eXBlIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLmlzU2FtZShvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKG5ld1ZhbHVlKTtcbiAgICB9XG59XG4iXX0=