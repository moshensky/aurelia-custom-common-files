define(['exports', 'aurelia-framework', 'moment'], function (exports, _aureliaFramework, _moment) {
    'use strict';

    exports.__esModule = true;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

    var _moment2 = _interopRequireDefault(_moment);

    var LinkedDatePickers = (function () {
        var _instanceInitializers = {};

        function LinkedDatePickers(element) {
            _classCallCheck(this, _LinkedDatePickers);

            _defineDecoratedPropertyDescriptor(this, 'start', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'end', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

            this.element = element;
        }

        var _LinkedDatePickers = LinkedDatePickers;

        _LinkedDatePickers.prototype.attached = function attached() {
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

        _createDecoratedClass(_LinkedDatePickers, [{
            key: 'start',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return _moment2['default'](new Date());
            },
            enumerable: true
        }, {
            key: 'end',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return _moment2['default'](new Date());
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

        LinkedDatePickers = _aureliaFramework.inject(Element)(LinkedDatePickers) || LinkedDatePickers;
        LinkedDatePickers = _aureliaFramework.customElement('linked-datepickers')(LinkedDatePickers) || LinkedDatePickers;
        return LinkedDatePickers;
    })();

    exports.LinkedDatePickers = LinkedDatePickers;
});