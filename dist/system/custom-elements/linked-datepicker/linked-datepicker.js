System.register(['aurelia-framework', 'moment'], function (_export) {
    'use strict';

    var inject, customElement, bindable, bindingMode, moment, LinkedDatePicker;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
        }, function (_moment) {
            moment = _moment['default'];
        }],
        execute: function () {
            LinkedDatePicker = (function () {
                var _instanceInitializers = {};

                function LinkedDatePicker(element) {
                    _classCallCheck(this, _LinkedDatePicker);

                    _defineDecoratedPropertyDescriptor(this, 'start', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'end', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

                    this.element = element;
                }

                var _LinkedDatePicker = LinkedDatePicker;

                _LinkedDatePicker.prototype.attached = function attached() {
                    var _this = this;

                    var self = this;
                    this.datepicker1.datepicker.$element.on('dp.change', function (event) {
                        self.start = event.date;
                        _this.datepicker2.datepicker.$element.data('DateTimePicker').minDate(event.date);
                    });

                    this.datepicker2.datepicker.$element.on('dp.change', function (event) {
                        self.end = event.date;
                        _this.datepicker1.datepicker.$element.data('DateTimePicker').maxDate(event.date);
                    });
                };

                _createDecoratedClass(_LinkedDatePicker, [{
                    key: 'start',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return moment(new Date());
                    },
                    enumerable: true
                }, {
                    key: 'end',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return moment(new Date());
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

                LinkedDatePicker = inject(Element)(LinkedDatePicker) || LinkedDatePicker;
                LinkedDatePicker = customElement('linked-datepicker')(LinkedDatePicker) || LinkedDatePicker;
                return LinkedDatePicker;
            })();

            _export('LinkedDatePicker', LinkedDatePicker);
        }
    };
});