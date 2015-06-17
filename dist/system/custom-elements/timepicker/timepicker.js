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