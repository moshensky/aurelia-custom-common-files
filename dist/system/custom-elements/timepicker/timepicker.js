System.register(['aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment', '../../utils/timespan'], function (_export) {
    'use strict';

    var inject, customElement, bindable, $, moment, Timespan, Timepicker;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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

                _createDecoratedClass(Timepicker, [{
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

                function Timepicker(element) {
                    _classCallCheck(this, _Timepicker);

                    _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

                    this.element = element;
                }

                Timepicker.prototype.bind = function bind() {
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

                Timepicker.prototype.valueChanged = function valueChanged(newValue, oldValue) {
                    if (newValue === undefined) throw new Error('Do not use undefined!');
                    if (newValue === null) {
                        this.$element.val('');
                        this.value = null;
                        return;
                    }

                    if (newValue.constructor.name !== "Timespan") {
                        throw new Error('This has to be moment type.');
                    }

                    var areSame = newValue.equals(oldValue);
                    if (areSame) {
                        return;
                    }

                    var timeAsMoment = moment(newValue.toString(), 'HH:mm');
                    this.$element.data('DateTimePicker').date(timeAsMoment);
                };

                var _Timepicker = Timepicker;
                Timepicker = inject(Element)(Timepicker) || Timepicker;
                Timepicker = customElement('timepicker')(Timepicker) || Timepicker;
                return Timepicker;
            })();

            _export('Timepicker', Timepicker);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzhEQVNhLFVBQVU7Ozs7Ozs7Ozs7dUNBVGYsTUFBTTs4Q0FBRSxhQUFhO3lDQUFFLFFBQVE7Ozs7OztzQ0FLL0IsUUFBUTs7O0FBSUgsc0JBQVU7OztzQ0FBVixVQUFVOztpQ0FDbEIsUUFBUTs7K0JBQVMsSUFBSTs7Ozs7aUNBQ3JCLFFBQVE7OytCQUFXLElBQUk7Ozs7O0FBRWIseUJBSkYsVUFBVSxDQUlQLE9BQU8sRUFBRTs7Ozs7OztBQUNqQix3QkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7aUJBQ3pCOztBQU5RLDBCQUFVLFdBUW5CLElBQUksR0FBQSxnQkFBRzs7O0FBQ0gsd0JBQU0sV0FBVyxHQUFHO0FBQ2hCLDhCQUFNLEVBQUUsT0FBTztxQkFDbEIsQ0FBQzs7QUFFRix3QkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6Qyx3QkFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDLHdCQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2Qix3QkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQyx3QkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDbkMsK0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7cUJBQzlCOztBQUVELHdCQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELHdCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxFQUFFLEVBQUs7QUFDcEMsNEJBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDeEIsNEJBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNkLGtDQUFLLEtBQUssR0FBRyxJQUFJLENBQUM7eUJBQ3JCLE1BQU07QUFDSCxnQ0FBSSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsZ0NBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBSyxLQUFLLENBQUMsQ0FBQztBQUMvQyxnQ0FBSSxDQUFDLE9BQU8sRUFBRTtBQUNWLHNDQUFLLEtBQUssR0FBRyxXQUFXLENBQUM7NkJBQzVCO3lCQUNKO3FCQUNKLENBQUMsQ0FBQzs7QUFFSCx3QkFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDOztBQXJDUSwwQkFBVSxXQXVDbkIsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDN0Isd0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDckUsd0JBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUNuQiw0QkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEIsNEJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLCtCQUFPO3FCQUNWOztBQUVELHdCQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtBQUMxQyw4QkFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3FCQUNsRDs7QUFFRCx3QkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyx3QkFBSSxPQUFPLEVBQUU7QUFDVCwrQkFBTztxQkFDVjs7QUFFRCx3QkFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4RCx3QkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzNEOztrQ0ExRFEsVUFBVTtBQUFWLDBCQUFVLEdBRHRCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLDBCQUFVLEdBRnRCLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FFZixVQUFVLEtBQVYsVUFBVTt1QkFBVixVQUFVIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci9idWlsZC9jc3MvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmNzcyEnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7VGltZXNwYW59IGZyb20gJy4uLy4uL3V0aWxzL3RpbWVzcGFuJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCd0aW1lcGlja2VyJylcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlciB7XHJcbiAgICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgYmluZCgpIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcclxuICAgICAgICAgICAgZm9ybWF0OiAnSEg6bW0nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICQoZGl2KTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmZvcm1hdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgdmFyIGVsVmFsID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChlbFZhbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1RpbWVzcGFuID0gbmV3IFRpbWVzcGFuKGVsVmFsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZVNhbWUgPSBuZXdUaW1lc3Bhbi5lcXVhbHModGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZVNhbWUpIHsgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdUaW1lc3BhbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbCgnJyk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3VmFsdWUuY29uc3RydWN0b3IubmFtZSAhPT0gXCJUaW1lc3BhblwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBoYXMgdG8gYmUgbW9tZW50IHR5cGUuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhcmVTYW1lID0gbmV3VmFsdWUuZXF1YWxzKG9sZFZhbHVlKTtcclxuICAgICAgICBpZiAoYXJlU2FtZSkgeyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aW1lQXNNb21lbnQgPSBtb21lbnQobmV3VmFsdWUudG9TdHJpbmcoKSwgJ0hIOm1tJyk7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUodGltZUFzTW9tZW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=