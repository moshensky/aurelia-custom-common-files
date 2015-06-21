'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('select2/select2');

var Select2 = (function () {
  var _instanceInitializers = {};

  function Select2(element) {
    _classCallCheck(this, _Select2);

    _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

    this.element = element;
  }

  var _Select2 = Select2;

  _Select2.prototype.bind = function bind() {
    var select = this.element.firstElementChild;

    var options = {
      placeholder: this.caption,
      allowClear: true
    };

    var $select = _jquery2['default'](select);
    $select.css('width', '100%');
    this.select2 = $select.select2(options);
    this.oldSelect2Value = undefined;
    var self = this;

    this.select2.on('change', function (event) {
      self.value = parseInt(self.select2.val(), 10);
      if (self.oldSelect2Value !== self.value) {
        self.oldSelect2Value = self.value;
        if (self.initElement === false) {
          setTimeout(function () {
            self.element.dispatchEvent(new Event('change'));
          });
        } else {
          self.initElement = false;
        }
      }
    });
  };

  _Select2.prototype.disabledChanged = function disabledChanged(newValue) {
    if (newValue) {
      this.element.querySelector('select').setAttribute('disabled', 'disabled');
      this.element.classList.add('disabled');
    } else {
      this.element.querySelector('select').removeAttribute('disabled', 'disabled');
      this.element.classList.remove('disabled');
    }
  };

  _Select2.prototype.attached = function attached() {
    this.valueChanged(this.value);
  };

  _Select2.prototype.itemsChanged = function itemsChanged(newValue, oldValue) {
    var index = newValue.map(function (x) {
      return x.id;
    }).indexOf(this.value);
    if (index === -1) {
      this.value = null;
    }
  };

  _Select2.prototype.valueChanged = function valueChanged(newValue, oldValue, opts) {
    if (newValue === undefined) {
      throw new Error('Do not use undefined!');
    }

    var newValueNumber = Number(newValue);
    var newValueInt = parseInt(newValueNumber, 10);

    if (isNaN(newValueInt) || newValueInt !== newValueNumber) {
      throw new Error('Item Id must be null or an intiger!');
    }

    if (newValueInt !== Number(oldValue)) {
      this.select2.select2('val', newValueInt);
    }
  };

  _createDecoratedClass(_Select2, [{
    key: 'items',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return null;
    },
    enumerable: true
  }, {
    key: 'caption',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return null;
    },
    enumerable: true
  }, {
    key: 'value',
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

  Select2 = _aureliaFramework.inject(Element)(Select2) || Select2;
  Select2 = _aureliaFramework.customElement('select-two')(Select2) || Select2;
  return Select2;
})();

exports.Select2 = Select2;