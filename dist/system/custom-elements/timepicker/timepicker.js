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
                }], null, _instanceInitializers);

                Timepicker = inject(Element)(Timepicker) || Timepicker;
                Timepicker = customElement('timepicker')(Timepicker) || Timepicker;
                return Timepicker;
            })();

            _export('Timepicker', Timepicker);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzhEQVNhLFVBQVU7Ozs7Ozs7Ozs7dUNBVGYsTUFBTTs4Q0FBRSxhQUFhO3lDQUFFLFFBQVE7Ozs7OztzQ0FLL0IsUUFBUTs7O0FBSUgsc0JBQVU7OztBQUlSLHlCQUpGLFVBQVUsQ0FJUCxPQUFPLEVBQUU7Ozs7Ozs7QUFDakIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO2lCQUN6Qjs7a0NBTlEsVUFBVTs7c0NBUW5CLElBQUksR0FBQSxnQkFBRzs7O0FBQ0gsd0JBQU0sV0FBVyxHQUFHO0FBQ2hCLDhCQUFNLEVBQUUsT0FBTztxQkFDbEIsQ0FBQzs7QUFFRix3QkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6Qyx3QkFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDLHdCQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2Qix3QkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQyx3QkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDbkMsK0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7cUJBQzlCOztBQUVELHdCQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELHdCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxFQUFFLEVBQUs7QUFDcEMsNEJBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDeEIsNEJBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNkLGtDQUFLLEtBQUssR0FBRyxJQUFJLENBQUM7eUJBQ3JCLE1BQU07QUFDSCxnQ0FBSSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsZ0NBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBSyxLQUFLLENBQUMsQ0FBQztBQUMvQyxnQ0FBSSxDQUFDLE9BQU8sRUFBRTtBQUNWLHNDQUFLLEtBQUssR0FBRyxXQUFXLENBQUM7NkJBQzVCO3lCQUNKO3FCQUNKLENBQUMsQ0FBQzs7QUFFSCx3QkFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDOztzQ0FFRCxZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUM3Qix3QkFBSSxRQUFRLEtBQUssU0FBUyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRSx3QkFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ25CLDRCQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0Qiw0QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsK0JBQU87cUJBQ1Y7O0FBRUQsd0JBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQzFDLDhCQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7cUJBQ2xEOztBQUVELHdCQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLHdCQUFJLE9BQU8sRUFBRTtBQUNULCtCQUFPO3FCQUNWOztBQUVELHdCQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELHdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDM0Q7Ozs7aUNBekRBLFFBQVE7OytCQUFTLElBQUk7Ozs7O2lDQUNyQixRQUFROzsrQkFBVyxJQUFJOzs7OztBQUZmLDBCQUFVLEdBRHRCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLDBCQUFVLEdBRnRCLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FFZixVQUFVLEtBQVYsVUFBVTt1QkFBVixVQUFVOzs7a0NBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIvYnVpbGQvY3NzL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci5jc3MhJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGltZXNwYW59IGZyb20gJy4uLy4uL3V0aWxzL3RpbWVzcGFuJztcblxuQGN1c3RvbUVsZW1lbnQoJ3RpbWVwaWNrZXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXIge1xuICAgIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gICAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gICAgICAgICAgICBmb3JtYXQ6ICdISDptbSdcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZGl2ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB2YXIgaW5wdXQgPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkKGRpdik7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyID0gdGhpcy4kZWxlbWVudC5kYXRldGltZXBpY2tlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICAgIHZhciBlbFZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKGVsVmFsID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VGltZXNwYW4gPSBuZXcgVGltZXNwYW4oZWxWYWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZVNhbWUgPSBuZXdUaW1lc3Bhbi5lcXVhbHModGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFhcmVTYW1lKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1RpbWVzcGFuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSB1bmRlZmluZWQhJyk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC52YWwoJycpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VmFsdWUuY29uc3RydWN0b3IubmFtZSAhPT0gXCJUaW1lc3BhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaGFzIHRvIGJlIG1vbWVudCB0eXBlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXJlU2FtZSA9IG5ld1ZhbHVlLmVxdWFscyhvbGRWYWx1ZSk7XG4gICAgICAgIGlmIChhcmVTYW1lKSB7IFxuICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aW1lQXNNb21lbnQgPSBtb21lbnQobmV3VmFsdWUudG9TdHJpbmcoKSwgJ0hIOm1tJyk7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKHRpbWVBc01vbWVudCk7XG4gICAgfVxufVxuIl19