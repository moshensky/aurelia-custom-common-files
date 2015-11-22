define(['exports', 'aurelia-framework', 'jquery', 'select2'], function (exports, _aureliaFramework, _jquery, _select2) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var Select2 = (function () {
    var _instanceInitializers = {};

    function Select2(element) {
      _classCallCheck(this, _Select2);

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
    }

    var _Select2 = Select2;

    _createDecoratedClass(_Select2, [{
      key: 'bind',
      value: function bind() {
        var _this = this;

        var select2this = this;
        _$['default'].fn.select2.amd.require(['select2/utils', 'select2/selection/single', 'select2/selection/allowClear', 'select2/selection/placeholder'], function (Utils, SingleSelection, AllowClear, Placeholder) {
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

          var CustomSelectionAdapter = Utils.Decorate(CustomSingleSelection, AllowClear);
          CustomSelectionAdapter = Utils.Decorate(CustomSelectionAdapter, Placeholder);

          var options = Object.assign({
            selectionAdapter: CustomSelectionAdapter,
            placeholder: _this.caption,
            allowClear: true
          }, _this.options);

          var $select = (0, _$['default'])(select);
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
              if (select2this.initElement === undefined || select2this.initElement === false) {
                setTimeout(function () {
                  select2this.element.dispatchEvent(new Event('change'));
                });
              } else {
                select2this.initElement = false;
              }
            }
          });

          select2this.valueChanged(_this.value);
        });
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged(newValue, oldValue) {
        var index = newValue.map(function (x) {
          return x.id;
        }).indexOf(this.value);
        if (index === -1) {
          this.value = null;
        }
      }
    }, {
      key: 'valueChanged',
      value: function valueChanged(newValue, oldValue) {
        if (newValue != oldValue) {
          this.$select.val(newValue).trigger('change');
        }
      }
    }, {
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
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    Select2 = (0, _aureliaFramework.inject)(Element)(Select2) || Select2;
    Select2 = (0, _aureliaFramework.customElement)('select-two')(Select2) || Select2;
    return Select2;
  })();

  exports.Select2 = Select2;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFPYSxPQUFPOzs7QUFPUCxhQVBBLE9BQU8sQ0FPTixPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7O21CQVRVLE9BQU87Ozs7YUFXZCxnQkFBRzs7O0FBQ0wsWUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLHNCQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsQ0FBQyxFQUNySSxVQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBSztBQUNuRCxtQkFBUyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ2hELGlDQUFxQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztXQUNwRTs7QUFFRCxlQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDOztBQUVyRCwrQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUN0RSxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixpQ0FBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBRTVELGdCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFFekMsa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQ3RCLDJCQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENB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NEIsUUFBUTs7ZUFRbkIsSUFBSTs7Ozs7cUNBUk8sUUFBUTs7ZUFTakIsSUFBSTs7Ozs7cUNBVEssUUFBUTs7ZUFVbkIsSUFBSTs7Ozs7cUNBVk8sUUFBUTs7ZUFXaEIsS0FBSzs7Ozs7cUNBWEcsUUFBUTs7ZUFZakIsRUFBRTs7Ozs7QUFMWCxXQUFPLEdBRG5CLHNCQU5PLE1BQU0sRUFNTixPQUFPLENBQUMsQ0FDSCxPQUFPLEtBQVAsT0FBTztBQUFQLFdBQU8sR0FGbkIsc0JBTGUsYUFBYSxFQUtkLFlBQVksQ0FBQyxDQUVmLE9BQU8sS0FBUCxPQUFPO1dBQVAsT0FBTzs7O1VBQVAsT0FBTyxHQUFQLE9BQU8iLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDIvc2VsZWN0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0ICdzZWxlY3QyJztcblxuQGN1c3RvbUVsZW1lbnQoJ3NlbGVjdC10d28nKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFNlbGVjdDIge1xuICBAYmluZGFibGUgaXRlbXMgPSBudWxsO1xuICBAYmluZGFibGUgY2FwdGlvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xuICBAYmluZGFibGUgb3B0aW9ucyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBsZXQgc2VsZWN0MnRoaXMgPSB0aGlzO1xuICAgICQuZm4uc2VsZWN0Mi5hbWQucmVxdWlyZShbJ3NlbGVjdDIvdXRpbHMnLCAnc2VsZWN0Mi9zZWxlY3Rpb24vc2luZ2xlJywgJ3NlbGVjdDIvc2VsZWN0aW9uL2FsbG93Q2xlYXInLCAnc2VsZWN0Mi9zZWxlY3Rpb24vcGxhY2Vob2xkZXInXSxcbiAgICAgIChVdGlscywgU2luZ2xlU2VsZWN0aW9uLCBBbGxvd0NsZWFyLCBQbGFjZWhvbGRlcikgPT4ge1xuICAgICAgICBmdW5jdGlvbiBDdXN0b21TaW5nbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICBVdGlscy5FeHRlbmQoQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLCBTaW5nbGVTZWxlY3Rpb24pO1xuXG4gICAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAvLyBVc2VyIGZvY3VzZXMgb24gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgaWYgKCFzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICBzZWxlY3QydGhpcy4kc2VsZWN0LnNlbGVjdDIoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgbGV0IHNlbGVjdCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICBsZXQgQ3VzdG9tU2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKEN1c3RvbVNpbmdsZVNlbGVjdGlvbiwgQWxsb3dDbGVhcik7XG4gICAgICAgIEN1c3RvbVNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShDdXN0b21TZWxlY3Rpb25BZGFwdGVyLCBQbGFjZWhvbGRlcik7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBzZWxlY3Rpb25BZGFwdGVyOiBDdXN0b21TZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNhcHRpb24sXG4gICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZVxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKHNlbGVjdCk7XG4gICAgICAgICRzZWxlY3QuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcbiAgICAgICAgdGhpcy4kc2VsZWN0ID0gJHNlbGVjdDtcbiAgICAgICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wgPSAkc2VsZWN0LmRhdGEoJ3NlbGVjdDInKTtcbiAgICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNlbGVjdDIub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gcGFyc2VJbnQoc2VsZWN0MnRoaXMuc2VsZWN0Mi52YWwoKSwgMTApO1xuICAgICAgICAgIGlmIChpc05hTihzZWxlY3QydGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxlY3QydGhpcy5vbGRTZWxlY3QyVmFsdWUgIT09IHNlbGVjdDJ0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3QydGhpcy5vbGRTZWxlY3QyVmFsdWUgPSBzZWxlY3QydGhpcy52YWx1ZTtcbiAgICAgICAgICAgIGlmIChzZWxlY3QydGhpcy5pbml0RWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IHNlbGVjdDJ0aGlzLmluaXRFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3QydGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZWN0MnRoaXMuaW5pdEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaXRlbXNDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gbmV3VmFsdWUubWFwKHggPT4geC5pZCkuaW5kZXhPZih0aGlzLnZhbHVlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgLy8gZXhwbGljaXRseSAhPSBhbmQgbm90ICE9PVxuICAgIGlmIChuZXdWYWx1ZSAhPSBvbGRWYWx1ZSkge1xuICAgICAgdGhpcy4kc2VsZWN0LnZhbChuZXdWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=