System.register(['aurelia-framework', 'jquery', 'select2/select2'], function (_export) {
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
    }, function (_select2Select2) {}],
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
          $.fn.select2.amd.require(['select2/utils', 'select2/selection/single'], function (Utils, SingleSelection) {
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

            var options = Object.assign({
              selectionAdapter: CustomSingleSelection,
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
                if (select2this.initElement === false) {
                  setTimeout(function () {
                    select2this.element.dispatchEvent(new Event('change'));
                  });
                } else {
                  select2this.initElement = false;
                }
              }
            });
          });
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
          if (newValue !== oldValue) {
            this.$select.val(newValue).trigger('change');
          }
        };

        _createDecoratedClass(_Select2, [{
          key: 'items',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'caption',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'disabled',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBDQU1hLE9BQU87Ozs7Ozs7Ozs7aUNBTlosTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7O0FBTTFCLGFBQU87OztBQU9QLGlCQVBBLE9BQU8sQ0FPTixPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3VCQVRVLE9BQU87OzJCQVdsQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLGNBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUN2QixXQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLDBCQUEwQixDQUFDLEVBQUUsVUFBQyxLQUFLLEVBQUUsZUFBZSxFQUFLO0FBQ2xHLHFCQUFTLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDaEQsbUNBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3BFOztBQUVELGlCQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDOztBQUVyRCxpQ0FBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUN0RSxrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixtQ0FBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBRTVELGtCQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFFekMsb0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQ3RCLDZCQUFXLENBQUMsT0FBTyxDQUFDLE9B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Ozs7dUJBQ3JCLFFBQVE7O21CQUFZLEtBQUs7Ozs7O3VCQUN6QixRQUFROzttQkFBVyxFQUFFOzs7OztBQUxYLGVBQU8sR0FEbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILE9BQU8sS0FBUCxPQUFPO0FBQVAsZUFBTyxHQUZuQixhQUFhLENBQUMsWUFBWSxDQUFDLENBRWYsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7eUJBQVAsT0FBTyIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvc2VsZWN0Mi9zZWxlY3QyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdzZWxlY3QyL3NlbGVjdDInO1xuXG5AY3VzdG9tRWxlbWVudCgnc2VsZWN0LXR3bycpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgU2VsZWN0MiB7XG4gIEBiaW5kYWJsZSBpdGVtcyA9IG51bGw7XG4gIEBiaW5kYWJsZSBjYXB0aW9uID0gbnVsbDtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0ge307XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGxldCBzZWxlY3QydGhpcyA9IHRoaXM7XG4gICAgJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKFsnc2VsZWN0Mi91dGlscycsICdzZWxlY3QyL3NlbGVjdGlvbi9zaW5nbGUnXSwgKFV0aWxzLCBTaW5nbGVTZWxlY3Rpb24pID0+IHtcbiAgICAgIGZ1bmN0aW9uIEN1c3RvbVNpbmdsZVNlbGVjdGlvbigkZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLkV4dGVuZChDdXN0b21TaW5nbGVTZWxlY3Rpb24sIFNpbmdsZVNlbGVjdGlvbik7XG5cbiAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgLy8gVXNlciBmb2N1c2VzIG9uIHRoZSBjb250YWluZXJcbiAgICAgICAgICBpZiAoIXNlbGVjdDJ0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3QydGhpcy4kc2VsZWN0LnNlbGVjdDIoXCJvcGVuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxuICAgICAgICB9KTtcbiAgICAgIH07XG5cblxuICAgICAgbGV0IHNlbGVjdCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgc2VsZWN0aW9uQWRhcHRlcjogQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5jYXB0aW9uLFxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlXG4gICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gJChzZWxlY3QpO1xuICAgICAgJHNlbGVjdC5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcbiAgICAgIHRoaXMuJHNlbGVjdCA9ICRzZWxlY3Q7XG4gICAgICB0aGlzLl9zZWxlY3QyY29udHJvbCA9ICRzZWxlY3QuZGF0YSgnc2VsZWN0MicpO1xuICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gcGFyc2VJbnQoc2VsZWN0MnRoaXMuc2VsZWN0Mi52YWwoKSwgMTApO1xuICAgICAgICBpZiAoaXNOYU4oc2VsZWN0MnRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlICE9PSBzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgIHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHNlbGVjdDJ0aGlzLnZhbHVlO1xuICAgICAgICAgIGlmIChzZWxlY3QydGhpcy5pbml0RWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxlY3QydGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMuaW5pdEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBpdGVtc0NoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgY29uc3QgaW5kZXggPSBuZXdWYWx1ZS5tYXAoeCA9PiB4LmlkKS5pbmRleE9mKHRoaXMudmFsdWUpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUsIG9wdHMpIHtcbiAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICB0aGlzLiRzZWxlY3QudmFsKG5ld1ZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==