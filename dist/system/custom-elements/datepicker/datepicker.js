System.register(['aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment'], function (_export) {
    'use strict';

    var inject, customElement, bindable, $, moment, Datepicker;

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
        }],
        execute: function () {
            Datepicker = (function () {
                var _instanceInitializers = {};

                _createDecoratedClass(Datepicker, [{
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

                function Datepicker(element) {
                    _classCallCheck(this, _Datepicker);

                    _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

                    this.element = element;
                }

                Datepicker.prototype.bind = function bind() {
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
                            self.element.dispatchEvent(new Event("change"));
                        });
                    });

                    this.valueChanged(this.value);
                };

                Datepicker.prototype.valueChanged = function valueChanged(newValue, oldValue) {
                    if (newValue === undefined) {
                        throw new Error('Do not use undefined!');
                    }

                    if (newValue === null) {
                        var input = this.element.firstElementChild.firstElementChild;
                        input.value = '';
                        return;
                    }

                    if (newValue.constructor.name !== "Moment") {
                        throw new Error('This has to be moment type!');
                    }

                    if (newValue.isSame(oldValue)) {
                        return;
                    }

                    this.$element.data('DateTimePicker').date(newValue);
                };

                var _Datepicker = Datepicker;
                Datepicker = inject(Element)(Datepicker) || Datepicker;
                Datepicker = customElement('datepicker')(Datepicker) || Datepicker;
                return Datepicker;
            })();

            _export('Datepicker', Datepicker);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29EQVFhLFVBQVU7Ozs7Ozs7Ozs7dUNBUmYsTUFBTTs4Q0FBRSxhQUFhO3lDQUFFLFFBQVE7Ozs7Ozs7QUFRMUIsc0JBQVU7OztzQ0FBVixVQUFVOztpQ0FDbEIsUUFBUTs7K0JBQVMsSUFBSTs7Ozs7aUNBQ3JCLFFBQVE7OytCQUFXLElBQUk7Ozs7O2lDQUN2QixRQUFROzsrQkFBWSxLQUFLOzs7OztBQUVmLHlCQUxGLFVBQVUsQ0FLUCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNqQix3QkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7aUJBQzFCOztBQVBRLDBCQUFVLFdBU25CLElBQUksR0FBQSxnQkFBRzs7O0FBQ0gsd0JBQU0sV0FBVyxHQUFHO0FBQ2hCLGdDQUFRLEVBQUUsS0FBSztBQUNmLGtDQUFVLEVBQUUsS0FBSztBQUNqQixxQ0FBYSxFQUFFLElBQUk7QUFDbkIsOEJBQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQ3ZCLDhCQUFNLEVBQUUsR0FBRztxQkFDZCxDQUFDOztBQUVGLHdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLHdCQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFdkIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsd0JBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ25DLCtCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3FCQUM5QjtBQUNELHdCQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXZELHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3RCx3QkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQix3QkFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ3ZDLDhCQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV4QixrQ0FBVSxDQUFDLFlBQVc7QUFDcEIsZ0NBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7eUJBQ2pELENBQUMsQ0FBQztxQkFDTixDQUFDLENBQUM7O0FBRUgsd0JBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQzs7QUF2Q1EsMEJBQVUsV0F5Q25CLFlBQVksR0FBQSxzQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQzdCLHdCQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDeEIsOEJBQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztxQkFDNUM7O0FBRUQsd0JBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUNuQiw0QkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQztBQUM3RCw2QkFBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDakIsK0JBQU87cUJBQ1Y7O0FBRUQsd0JBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQ3hDLDhCQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7cUJBQ2xEOztBQUVELHdCQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDM0IsK0JBQU87cUJBQ1Y7O0FBRUQsd0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN2RDs7a0NBN0RRLFVBQVU7QUFBViwwQkFBVSxHQUR0QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBViwwQkFBVSxHQUZ0QixhQUFhLENBQUMsWUFBWSxDQUFDLENBRWYsVUFBVSxLQUFWLFVBQVU7dUJBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcclxuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIvYnVpbGQvY3NzL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci5jc3MhJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ2RhdGVwaWNrZXInKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyIHtcclxuICAgIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKCkge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRzID0ge1xyXG4gICAgICAgICAgICBjb2xsYXBzZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZUN1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKSxcclxuICAgICAgICAgICAgZm9ybWF0OiAnTCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZGl2ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkKGRpdik7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIodGhpcy5vcHRpb25zKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5vbignZHAuY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBldmVudC5kYXRlO1xyXG4gICAgICAgICAgICAvL0ZpbmQgYmV0dGVyIHdheSB0byBpbnZva2Ugb2JzZXJ2YWJsZSBiZWZvcmUgZnVuY3Rpb24hISFcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSB1bmRlZmluZWQhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3VmFsdWUuY29uc3RydWN0b3IubmFtZSAhPT0gXCJNb21lbnRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaGFzIHRvIGJlIG1vbWVudCB0eXBlIScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlLmlzU2FtZShvbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobmV3VmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==