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

                Datepicker = inject(Element)(Datepicker) || Datepicker;
                Datepicker = customElement('datetimepicker')(Datepicker) || Datepicker;
                return Datepicker;
            })();

            _export('Datepicker', Datepicker);
        }
    };
});