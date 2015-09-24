define(['exports', 'aurelia-framework', 'jquery', 'select2/select2/css/select2.css!text', '../select2_custom.css!text', 'select2/select2'], function (exports, _aureliaFramework, _jquery, _select2Select2CssSelect2CssText, _select2_customCssText, _select2Select2) {
  'use strict';

  exports.__esModule = true;

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

    _Select2.prototype.bind = function bind() {
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

        var $select = _$['default'](select);
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
    };

    _Select2.prototype.itemsChanged = function itemsChanged(newValue, oldValue) {
      var index = newValue.map(function (x) {
        return x.id;
      }).indexOf(this.value);
      if (index === -1) {
        this.value = null;
      }
    };

    _Select2.prototype.valueChanged = function valueChanged(newValue, oldValue) {
      if (newValue != oldValue) {
        this.$select.val(newValue).trigger('change');
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
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    Select2 = _aureliaFramework.inject(Element)(Select2) || Select2;
    Select2 = _aureliaFramework.customElement('select-two')(Select2) || Select2;
    return Select2;
  })();

  exports.Select2 = Select2;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BU2EsT0FBTzs7O0FBT1AsYUFQQSxPQUFPLENBT04sT0FBTyxFQUFFOzs7Ozs7Ozs7Ozs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzttQkFUVSxPQUFPOzt1QkFXbEIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxVQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsb0JBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLCtCQUErQixDQUFDLEVBQ3JJLFVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFLO0FBQ25ELGlCQUFTLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDaEQsK0JBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3BFOztBQUVELGFBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDLENBQUM7O0FBRXJELDZCQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQ3RFLGNBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsK0JBQXFCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztBQUU1RCxjQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFFekMsZ0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQ3RCLHlCQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxN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QztLQUNGOzs7O3FDQXJHNEIsUUFBUTs7ZUFVbkIsSUFBSTs7Ozs7cUNBVk8sUUFBUTs7ZUFXakIsSUFBSTs7Ozs7cUNBWEssUUFBUTs7ZUFZbkIsSUFBSTs7Ozs7cUNBWk8sUUFBUTs7ZUFhaEIsS0FBSzs7Ozs7cUNBYkcsUUFBUTs7ZUFjakIsRUFBRTs7Ozs7QUFMWCxXQUFPLEdBRG5CLGtCQVJPLE1BQU0sQ0FRTixPQUFPLENBQUMsQ0FDSCxPQUFPLEtBQVAsT0FBTztBQUFQLFdBQU8sR0FGbkIsa0JBUGUsYUFBYSxDQU9kLFlBQVksQ0FBQyxDQUVmLE9BQU8sS0FBUCxPQUFPO1dBQVAsT0FBTzs7O1VBQVAsT0FBTyxHQUFQLE9BQU8iLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDIvc2VsZWN0Mi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0ICdzZWxlY3QyL3NlbGVjdDIvY3NzL3NlbGVjdDIuY3NzIXRleHQnO1xuaW1wb3J0ICcuLi9zZWxlY3QyX2N1c3RvbS5jc3MhdGV4dCc7XG5pbXBvcnQgJ3NlbGVjdDIvc2VsZWN0Mic7XG5cbkBjdXN0b21FbGVtZW50KCdzZWxlY3QtdHdvJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBTZWxlY3QyIHtcbiAgQGJpbmRhYmxlIGl0ZW1zID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNhcHRpb24gPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IHNlbGVjdDJ0aGlzID0gdGhpcztcbiAgICAkLmZuLnNlbGVjdDIuYW1kLnJlcXVpcmUoWydzZWxlY3QyL3V0aWxzJywgJ3NlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZScsICdzZWxlY3QyL3NlbGVjdGlvbi9hbGxvd0NsZWFyJywgJ3NlbGVjdDIvc2VsZWN0aW9uL3BsYWNlaG9sZGVyJ10sXG4gICAgICAoVXRpbHMsIFNpbmdsZVNlbGVjdGlvbiwgQWxsb3dDbGVhciwgUGxhY2Vob2xkZXIpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gQ3VzdG9tU2luZ2xlU2VsZWN0aW9uKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHMuRXh0ZW5kKEN1c3RvbVNpbmdsZVNlbGVjdGlvbiwgU2luZ2xlU2VsZWN0aW9uKTtcblxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgLy8gVXNlciBmb2N1c2VzIG9uIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgIGlmICghc2VsZWN0MnRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgc2VsZWN0MnRoaXMuJHNlbGVjdC5zZWxlY3QyKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgbGV0IEN1c3RvbVNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShDdXN0b21TaW5nbGVTZWxlY3Rpb24sIEFsbG93Q2xlYXIpO1xuICAgICAgICBDdXN0b21TZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoQ3VzdG9tU2VsZWN0aW9uQWRhcHRlciwgUGxhY2Vob2xkZXIpO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgc2VsZWN0aW9uQWRhcHRlcjogQ3VzdG9tU2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5jYXB0aW9uLFxuICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWVcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChzZWxlY3QpO1xuICAgICAgICAkc2VsZWN0LmNzcygnd2lkdGgnLCAnMTAwJScpO1xuICAgICAgICB0aGlzLnNlbGVjdDIgPSAkc2VsZWN0LnNlbGVjdDIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuJHNlbGVjdCA9ICRzZWxlY3Q7XG4gICAgICAgIHRoaXMuX3NlbGVjdDJjb250cm9sID0gJHNlbGVjdC5kYXRhKCdzZWxlY3QyJyk7XG4gICAgICAgIHRoaXMub2xkU2VsZWN0MlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZWxlY3QyLm9uKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBzZWxlY3QydGhpcy52YWx1ZSA9IHBhcnNlSW50KHNlbGVjdDJ0aGlzLnNlbGVjdDIudmFsKCksIDEwKTtcbiAgICAgICAgICBpZiAoaXNOYU4oc2VsZWN0MnRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICBzZWxlY3QydGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlICE9PSBzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlID0gc2VsZWN0MnRoaXMudmFsdWU7XG4gICAgICAgICAgICBpZiAoc2VsZWN0MnRoaXMuaW5pdEVsZW1lbnQgPT09IHVuZGVmaW5lZCB8fCBzZWxlY3QydGhpcy5pbml0RWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0MnRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGVjdDJ0aGlzLmluaXRFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3QydGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBjb25zdCBpbmRleCA9IG5ld1ZhbHVlLm1hcCh4ID0+IHguaWQpLmluZGV4T2YodGhpcy52YWx1ZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8vIGV4cGxpY2l0bHkgIT0gYW5kIG5vdCAhPT1cbiAgICBpZiAobmV3VmFsdWUgIT0gb2xkVmFsdWUpIHtcbiAgICAgIHRoaXMuJHNlbGVjdC52YWwobmV3VmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cbiAgfVxufVxuIl19