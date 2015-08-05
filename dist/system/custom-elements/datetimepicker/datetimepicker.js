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
                Datepicker = customElement('datetimepicker')(Datepicker) || Datepicker;
                return Datepicker;
            })();

            _export('Datepicker', Datepicker);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0RBUWEsVUFBVTs7Ozs7Ozs7Ozt1Q0FSZixNQUFNOzhDQUFFLGFBQWE7eUNBQUUsUUFBUTs7Ozs7OztBQVExQixzQkFBVTs7O3NDQUFWLFVBQVU7O2lDQUNsQixRQUFROzsrQkFBUyxJQUFJOzs7OztpQ0FDckIsUUFBUTs7K0JBQVcsSUFBSTs7Ozs7aUNBQ3ZCLFFBQVE7OytCQUFZLEtBQUs7Ozs7O0FBRWYseUJBTEYsVUFBVSxDQUtQLE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ2pCLHdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztpQkFDMUI7O0FBUFEsMEJBQVUsV0FTbkIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDSCx3QkFBTSxXQUFXLEdBQUc7QUFDaEIsZ0NBQVEsRUFBRSxLQUFLO0FBQ2Ysa0NBQVUsRUFBRSxLQUFLO0FBQ2pCLHFDQUFhLEVBQUUsSUFBSTtBQUNuQiw4QkFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDdkIsa0NBQVUsRUFBRSxJQUFJO3FCQUNuQixDQUFDOztBQUVGLHdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLHdCQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFdkIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsd0JBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ25DLCtCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3FCQUM5QjtBQUNELHdCQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXZELHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFN0Qsd0JBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUssRUFBSztBQUN2Qyw4QkFBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztxQkFDM0IsQ0FBQyxDQUFDOztBQUVILHdCQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDakM7O0FBbENRLDBCQUFVLFdBb0NuQixZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUM3Qix3QkFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQ3hCLDhCQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7cUJBQzVDOztBQUVELHdCQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDbkIsNEJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0QsNkJBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLCtCQUFPO3FCQUNWOztBQUVELHdCQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUN4Qyw4QkFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3FCQUNsRDs7QUFFRCx3QkFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzNCLCtCQUFPO3FCQUNWOztBQUVELHdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkQ7O2tDQXhEUSxVQUFVO0FBQVYsMEJBQVUsR0FEdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsMEJBQVUsR0FGdEIsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBRW5CLFVBQVUsS0FBVixVQUFVO3VCQUFWLFVBQVUiLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcclxuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIvYnVpbGQvY3NzL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci5jc3MhJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ2RhdGV0aW1lcGlja2VyJylcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlciB7XHJcbiAgICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZCgpIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcclxuICAgICAgICAgICAgY29sbGFwc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICB1c2VDdXJyZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuICAgICAgICAgICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKCksXHJcbiAgICAgICAgICAgIHNpZGVCeVNpZGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZGl2ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkKGRpdik7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIodGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmRhdGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiTW9tZW50XCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZSEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdWYWx1ZS5pc1NhbWUob2xkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKG5ld1ZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=