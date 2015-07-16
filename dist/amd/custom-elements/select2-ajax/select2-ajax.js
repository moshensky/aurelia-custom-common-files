define(['exports', 'aurelia-framework', 'jquery', 'select2/select2', 'service'], function (exports, _aureliaFramework, _jquery, _select2Select2, _service) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var Select2Ajax = (function () {
    var _instanceInitializers = {};

    function Select2Ajax(element, http) {
      _classCallCheck(this, _Select2Ajax);

      _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
      this.http = http;
    }

    var _Select2Ajax = Select2Ajax;

    _Select2Ajax.prototype.bind = function bind() {
      var _this = this;

      var select2this = this;
      _$['default'].fn.select2.amd.require(['select2/data/array', 'select2/utils'], function (ArrayAdapter, Utils) {
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
              var $option = _$['default'](this);

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
              var req = select2this.http.get(self.ajaxOptions.url + '?q=' + params.term);
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

        var select = _this.element.firstElementChild;

        var options = Object.assign({
          dataAdapter: AjaxAdapter,
          placeholder: _this.caption,
          allowClear: true
        }, _this.options);

        var $select = _$['default'](select);
        $select.css('width', '100%');
        _this.select2 = $select.select2(options);
        _this.oldSelect2Value = undefined;
        var self = _this;

        _this.select2.on('change', function (event) {
          self.value = parseInt(self.select2.val(), 10);
          if (isNaN(self.value)) {
            self.value = null;
          }

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
      });
    };

    _Select2Ajax.prototype.attached = function attached() {};

    _Select2Ajax.prototype.itemsChanged = function itemsChanged(newValue, oldValue) {
      var index = newValue.map(function (x) {
        return x.id;
      }).indexOf(this.value);
      if (index === -1) {
        this.value = null;
      }
    };

    _Select2Ajax.prototype.valueChanged = function valueChanged(newValue, oldValue, opts) {
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
    }], null, _instanceInitializers);

    Select2Ajax = _aureliaFramework.inject(Element, _service.Http)(Select2Ajax) || Select2Ajax;
    Select2Ajax = _aureliaFramework.customElement('select-two-ajax')(Select2Ajax) || Select2Ajax;
    return Select2Ajax;
  })();

  exports.Select2Ajax = Select2Ajax;
});