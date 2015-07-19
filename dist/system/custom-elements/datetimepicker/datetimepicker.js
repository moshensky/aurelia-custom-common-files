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
                        sideBySide: true
                    };

                    var div = this.element.firstElementChild;
                    this.$element = $(div);

                    this.options = this.options || {};
                    if (this.options.format !== undefined) {
                        delete this.options.format;
                    }
                    this.options = $.extend({}, defaultOpts, this.options);

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
                Datepicker = customElement('datetimepicker')(Datepicker) || Datepicker;
                return Datepicker;
            })();

            _export('Datepicker', Datepicker);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0RBUWEsVUFBVTs7Ozs7Ozs7Ozt1Q0FSZixNQUFNOzhDQUFFLGFBQWE7eUNBQUUsUUFBUTs7Ozs7OztBQVExQixzQkFBVTs7O0FBS1IseUJBTEYsVUFBVSxDQUtQLE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ2pCLHdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztpQkFDMUI7O2tDQVBRLFVBQVU7O3NDQVNuQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNILHdCQUFNLFdBQVcsR0FBRztBQUNoQixnQ0FBUSxFQUFFLEtBQUs7QUFDZixrQ0FBVSxFQUFFLEtBQUs7QUFDakIscUNBQWEsRUFBRSxJQUFJO0FBQ25CLDhCQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUN2QixrQ0FBVSxFQUFFLElBQUk7cUJBQ25CLENBQUM7O0FBRUYsd0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDekMsd0JBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV2Qix3QkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQyx3QkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDbkMsK0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7cUJBQzlCO0FBQ0Qsd0JBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkQsd0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3RCx3QkFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ3ZDLDhCQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO3FCQUMzQixDQUFDLENBQUM7O0FBRUgsd0JBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQzs7c0NBRUQsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDN0Isd0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUN4Qiw4QkFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO3FCQUM1Qzs7QUFFRCx3QkFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ25CLDRCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzdELDZCQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQiwrQkFBTztxQkFDVjs7QUFFRCx3QkFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDeEMsOEJBQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztxQkFDbEQ7O0FBRUQsd0JBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzQiwrQkFBTztxQkFDVjs7QUFFRCx3QkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3ZEOzs7O2lDQXZEQSxRQUFROzsrQkFBUyxJQUFJOzs7OztpQ0FDckIsUUFBUTs7K0JBQVcsSUFBSTs7Ozs7aUNBQ3ZCLFFBQVE7OytCQUFZLEtBQUs7Ozs7O0FBSGpCLDBCQUFVLEdBRHRCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLDBCQUFVLEdBRnRCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUVuQixVQUFVLEtBQVYsVUFBVTt1QkFBVixVQUFVOzs7a0NBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci9idWlsZC9jc3MvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmNzcyEnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgnZGF0ZXRpbWVwaWNrZXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXIge1xuICAgIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gICAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgICAgICAgICAgY29sbGFwc2U6IGZhbHNlLFxuICAgICAgICAgICAgdXNlQ3VycmVudDogZmFsc2UsXG4gICAgICAgICAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKCksXG4gICAgICAgICAgICBzaWRlQnlTaWRlOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICQoZGl2KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBldmVudC5kYXRlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiTW9tZW50XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBoYXMgdG8gYmUgbW9tZW50IHR5cGUhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VmFsdWUuaXNTYW1lKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobmV3VmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==