System.register(['aurelia-framework', 'jquery', 'select2'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, Select2;

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
    }, function (_select2) {}],
    execute: function () {
      Select2 = (function () {
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
          $.fn.select2.amd.require(['select2/utils', 'select2/selection/single', 'select2/selection/allowClear', 'select2/selection/placeholder'], function (Utils, SingleSelection, AllowClear, Placeholder) {
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

            var $select = $(select);
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
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'caption',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'disabled',
          decorators: [bindable],
          initializer: function () {
            return false;
          },
          enumerable: true
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function () {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        Select2 = inject(Element)(Select2) || Select2;
        Select2 = customElement('select-two')(Select2) || Select2;
        return Select2;
      })();

      _export('Select2', Select2);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBDQU9hLE9BQU87Ozs7Ozs7Ozs7aUNBUFosTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7O0FBTzFCLGFBQU87OztBQU9QLGlCQVBBLE9BQU8sQ0FPTixPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3VCQVRVLE9BQU87OzJCQVdsQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLGNBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUN2QixXQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLCtCQUErQixDQUFDLEVBQ3JJLFVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFLO0FBQ25ELHFCQUFTLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDaEQsbUNBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3BFOztBQUVELGlCQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDOztBQUVyRCxpQ0FBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUN0RSxrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixtQ0FBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBRTVELGtCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFFekMsb0JBQUksQ0FBQyxXQUFX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QUN4QixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQzlDO1NBQ0Y7Ozs7dUJBM0ZBLFFBQVE7O21CQUFTLElBQUk7Ozs7O3VCQUNyQixRQUFROzttQkFBVyxJQUFJOzs7Ozt1QkFDdkIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFZLEtBQUs7Ozs7O3VCQUN6QixRQUFROzttQkFBVyxFQUFFOzs7OztBQUxYLGVBQU8sR0FEbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILE9BQU8sS0FBUCxPQUFPO0FBQVAsZUFBTyxHQUZuQixhQUFhLENBQUMsWUFBWSxDQUFDLENBRWYsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7eUJBQVAsT0FBTyIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvc2VsZWN0Mi9zZWxlY3QyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgJ3NlbGVjdDInO1xuXG5AY3VzdG9tRWxlbWVudCgnc2VsZWN0LXR3bycpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgU2VsZWN0MiB7XG4gIEBiaW5kYWJsZSBpdGVtcyA9IG51bGw7XG4gIEBiaW5kYWJsZSBjYXB0aW9uID0gbnVsbDtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0ge307XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGxldCBzZWxlY3QydGhpcyA9IHRoaXM7XG4gICAgJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKFsnc2VsZWN0Mi91dGlscycsICdzZWxlY3QyL3NlbGVjdGlvbi9zaW5nbGUnLCAnc2VsZWN0Mi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsICdzZWxlY3QyL3NlbGVjdGlvbi9wbGFjZWhvbGRlciddLFxuICAgICAgKFV0aWxzLCBTaW5nbGVTZWxlY3Rpb24sIEFsbG93Q2xlYXIsIFBsYWNlaG9sZGVyKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIEN1c3RvbVNpbmdsZVNlbGVjdGlvbigkZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFV0aWxzLkV4dGVuZChDdXN0b21TaW5nbGVTZWxlY3Rpb24sIFNpbmdsZVNlbGVjdGlvbik7XG5cbiAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdDJ0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHNlbGVjdDJ0aGlzLiRzZWxlY3Quc2VsZWN0Mignb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgLy8gVXNlciBleGl0cyB0aGUgY29udGFpbmVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuICAgICAgICBsZXQgc2VsZWN0ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIGxldCBDdXN0b21TZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLCBBbGxvd0NsZWFyKTtcbiAgICAgICAgQ3VzdG9tU2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKEN1c3RvbVNlbGVjdGlvbkFkYXB0ZXIsIFBsYWNlaG9sZGVyKTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIHNlbGVjdGlvbkFkYXB0ZXI6IEN1c3RvbVNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY2FwdGlvbixcbiAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0KTtcbiAgICAgICAgJHNlbGVjdC5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgICAgdGhpcy5zZWxlY3QyID0gJHNlbGVjdC5zZWxlY3QyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLiRzZWxlY3QgPSAkc2VsZWN0O1xuICAgICAgICB0aGlzLl9zZWxlY3QyY29udHJvbCA9ICRzZWxlY3QuZGF0YSgnc2VsZWN0MicpO1xuICAgICAgICB0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSBwYXJzZUludChzZWxlY3QydGhpcy5zZWxlY3QyLnZhbCgpLCAxMCk7XG4gICAgICAgICAgaWYgKGlzTmFOKHNlbGVjdDJ0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSAhPT0gc2VsZWN0MnRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHNlbGVjdDJ0aGlzLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHNlbGVjdDJ0aGlzLmluaXRFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgc2VsZWN0MnRoaXMuaW5pdEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdDJ0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxlY3QydGhpcy5pbml0RWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0MnRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xuICAgICAgfSk7XG4gIH1cblxuICBpdGVtc0NoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgY29uc3QgaW5kZXggPSBuZXdWYWx1ZS5tYXAoeCA9PiB4LmlkKS5pbmRleE9mKHRoaXMudmFsdWUpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAvLyBleHBsaWNpdGx5ICE9IGFuZCBub3QgIT09XG4gICAgaWYgKG5ld1ZhbHVlICE9IG9sZFZhbHVlKSB7XG4gICAgICB0aGlzLiRzZWxlY3QudmFsKG5ld1ZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==