'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('Eonasdan/bootstrap-datetimepicker');

require('Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var Datepicker = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Datepicker, [{
        key: 'value',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return null;
        },
        enumerable: true
    }, {
        key: 'options',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return null;
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
            locale: _moment2['default'].locale(),
            sideBySide: true
        };

        var div = this.element.firstElementChild;
        this.$element = _jquery2['default'](div);

        this.options = this.options || {};
        if (this.options.format !== undefined) {
            delete this.options.format;
        }
        this.options = _jquery2['default'].extend({}, defaultOpts, this.options);

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
    Datepicker = _aureliaFramework.inject(Element)(Datepicker) || Datepicker;
    Datepicker = _aureliaFramework.customElement('datetimepicker')(Datepicker) || Datepicker;
    return Datepicker;
})();

exports.Datepicker = Datepicker;