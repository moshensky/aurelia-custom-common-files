'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _service = require('service');

require('select2/select2/css/select2.css!');

require('../select2_custom.css!');

require('select2/select2');

var Select2Ajax = (function () {
  var _instanceInitializers = {};

  function Select2Ajax(element, http) {
    _classCallCheck(this, _Select2Ajax);

    _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'clear', _instanceInitializers);

    this.element = element;
    this.http = http;
  }

  var _Select2Ajax = Select2Ajax;

  _Select2Ajax.prototype.bind = function bind() {
    var _this = this;

    var select2this = this;
    _jquery2['default'].fn.select2.amd.require(['select2/data/array', 'select2/utils', 'select2/selection/single'], function (ArrayAdapter, Utils, SingleSelection) {
      function AjaxAdapter($element, options) {
        this.ajaxOptions = options.get('ajax') || {};
        if (this.ajaxOptions.delay === undefined) this.ajaxOptions.delay = 250;
        if (this.ajaxOptions.minimumInputLength === undefined) this.ajaxOptions.minimumInputLength = 2;

        AjaxAdapter.__super__.constructor.call(this, $element, options);
      }

      Utils.Extend(AjaxAdapter, ArrayAdapter);

      AjaxAdapter.prototype.current = function (callback) {
        var data = [];
        if (this.ajaxOptions.initId !== undefined) {
          data = [{
            id: this.ajaxOptions.initId,
            text: this.ajaxOptions.initName
          }];
          this.ajaxOptions.initId = undefined;
          callback(data);
        } else {
          var self = this;

          this.$element.find(':selected').each(function () {
            var $option = _jquery2['default'](this);

            var option = self.item($option);

            data.push(option);
          });

          callback(data);
        }
      };

      AjaxAdapter.prototype.query = function (params, callback) {
        var self = this;

        function request() {
          if (params.term !== undefined && params.term.length > self.ajaxOptions.minimumInputLength) {

            var url = self.ajaxOptions.url || self.ajaxOptions.getUrl();
            if (url === undefined) {
              throw new Error('Configuration exception! select2-ajax, must have defined options.ajax.url or options.ajax.getUrl()!');
            }

            var req = select2this.http.get(url + '?q=' + params.term);
            req.then(function (data) {
              data = data.map(function (d) {
                d.text = d.name;
                return d;
              });

              callback({ results: data });
            });
          }
        }

        if (this.ajaxOptions.delay > 0) {
          if (this._queryTimeout) {
            window.clearTimeout(this._queryTimeout);
          }

          this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
        } else {
          request();
        }
      };

      function CustomSingleSelection($element, options) {
        CustomSingleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(CustomSingleSelection, SingleSelection);

      CustomSingleSelection.prototype.bind = function (container, $container) {
        var self = this;

        CustomSingleSelection.__super__.bind.apply(this, arguments);

        this.$selection.on('focus', function (evt) {
          if (!select2this.value) {
            select2this.$select.select2('open');
          }
        });

        this.$selection.on('blur', function (evt) {});
      };

      var select = _this.element.firstElementChild;

      var options = {
        selectionAdapter: CustomSingleSelection,
        dataAdapter: AjaxAdapter,
        placeholder: _this.caption,
        allowClear: true,
        ajax: _this.options
      };

      var $select = _jquery2['default'](select);
      $select.css('width', '100%');
      _this.select2 = $select.select2(options);
      _this.$select = $select;
      _this._select2control = $select.data('select2');
      _this.oldSelect2Value = undefined;
      var self = _this;

      _this.select2.on('change', function (event) {
        select2this.value = parseInt(select2this.select2.val(), 10);
        if (isNaN(select2this.value)) {
          select2this.value = undefined;
        }

        if (select2this.oldSelect2Value !== select2this.value) {
          select2this.oldSelect2Value = select2this.value;
          setTimeout(function () {
            select2this.element.dispatchEvent(new Event('change'));
          });
        }
      });
    });
  };

  _Select2Ajax.prototype.clearChanged = function clearChanged() {
    this._select2control.results.clear();
  };

  _Select2Ajax.prototype.valueChanged = function valueChanged(newValue, oldValue) {
    if (newValue != oldValue) {
      this.$select.val(newValue).trigger('change');
    }
  };

  _createDecoratedClass(_Select2Ajax, [{
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
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'clear',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  Select2Ajax = _aureliaFramework.inject(Element, _service.Http)(Select2Ajax) || Select2Ajax;
  Select2Ajax = _aureliaFramework.customElement('select-two-ajax')(Select2Ajax) || Select2Ajax;
  return Select2Ajax;
})();

exports.Select2Ajax = Select2Ajax;