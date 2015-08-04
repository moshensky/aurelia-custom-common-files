System.register(['aurelia-framework', 'jquery', 'select2/select2'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, Select2;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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

        _createDecoratedClass(Select2, [{
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

        function Select2(element) {
          _classCallCheck(this, _Select2);

          _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
        }

        Select2.prototype.bind = function bind() {
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
                  select2this.$select.select2("open");
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

            select2this.valueChanged(_this.value);
          });
        };

        Select2.prototype.itemsChanged = function itemsChanged(newValue, oldValue) {
          var index = newValue.map(function (x) {
            return x.id;
          }).indexOf(this.value);
          if (index === -1) {
            this.value = null;
          }
        };

        Select2.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          if (newValue != oldValue) {
            this.$select.val(newValue).trigger('change');
          }
        };

        Select2.prototype.attached = function attached() {
          if (this.value === undefined) {
            this.valueChanged(this.value);
          } else {
            this.initElement = false;
          }
        };

        var _Select2 = Select2;
        Select2 = inject(Element)(Select2) || Select2;
        Select2 = customElement('select-two')(Select2) || Select2;
        return Select2;
      })();

      _export('Select2', Select2);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBDQU1hLE9BQU87Ozs7Ozs7Ozs7aUNBTlosTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7O0FBTTFCLGFBQU87Ozs4QkFBUCxPQUFPOzt1QkFDakIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVksS0FBSzs7Ozs7dUJBQ3pCLFFBQVE7O21CQUFXLEVBQUU7Ozs7O0FBRVgsaUJBUEEsT0FBTyxDQU9OLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7QUFUVSxlQUFPLFdBV2xCLElBQUksR0FBQSxnQkFBRzs7O0FBQ0wsY0FBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFdBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsMEJBQTBCLENBQUMsRUFBRSxVQUFDLEtBQUssRUFBRSxlQUFlLEVBQUs7QUFDbEcscUJBQVMscUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUNoRCxtQ0FBcUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDcEU7O0FBRUQsaUJBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDLENBQUM7O0FBRXJELGlDQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQ3RFLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLG1DQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUks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USxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQzlDO1NBQ0Y7O0FBeEZVLGVBQU8sV0EwRmxCLFFBQVEsR0FBQSxvQkFBRztBQUNULGNBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7QUFDNUIsZ0JBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1dBQzlCLE1BQU07QUFDTCxnQkFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7V0FDMUI7U0FDRjs7dUJBaEdVLE9BQU87QUFBUCxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FGbkIsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUVmLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTyIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvc2VsZWN0Mi9zZWxlY3QyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAnc2VsZWN0Mi9zZWxlY3QyJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZWxlY3QtdHdvJylcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0MiB7XHJcbiAgQGJpbmRhYmxlIGl0ZW1zID0gbnVsbDtcclxuICBAYmluZGFibGUgY2FwdGlvbiA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcclxuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBAYmluZGFibGUgb3B0aW9ucyA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIGxldCBzZWxlY3QydGhpcyA9IHRoaXM7XHJcbiAgICAkLmZuLnNlbGVjdDIuYW1kLnJlcXVpcmUoWydzZWxlY3QyL3V0aWxzJywgJ3NlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZSddLCAoVXRpbHMsIFNpbmdsZVNlbGVjdGlvbikgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBDdXN0b21TaW5nbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFV0aWxzLkV4dGVuZChDdXN0b21TaW5nbGVTZWxlY3Rpb24sIFNpbmdsZVNlbGVjdGlvbik7XHJcblxyXG4gICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICBpZiAoIXNlbGVjdDJ0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLiRzZWxlY3Quc2VsZWN0MihcIm9wZW5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIHNlbGVjdGlvbkFkYXB0ZXI6IEN1c3RvbVNpbmdsZVNlbGVjdGlvbixcclxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5jYXB0aW9uLFxyXG4gICAgICAgIGFsbG93Q2xlYXI6IHRydWVcclxuICAgICAgfSwgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKHNlbGVjdCk7XHJcbiAgICAgICRzZWxlY3QuY3NzKCd3aWR0aCcsICcxMDAlJyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcclxuICAgICAgdGhpcy4kc2VsZWN0ID0gJHNlbGVjdDtcclxuICAgICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wgPSAkc2VsZWN0LmRhdGEoJ3NlbGVjdDInKTtcclxuICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSBwYXJzZUludChzZWxlY3QydGhpcy5zZWxlY3QyLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgaWYgKGlzTmFOKHNlbGVjdDJ0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlICE9PSBzZWxlY3QydGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlID0gc2VsZWN0MnRoaXMudmFsdWU7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0MnRoaXMuaW5pdEVsZW1lbnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHNlbGVjdDJ0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QydGhpcy5pbml0RWxlbWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxlY3QydGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGl0ZW1zQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gbmV3VmFsdWUubWFwKHggPT4geC5pZCkuaW5kZXhPZih0aGlzLnZhbHVlKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAvLyBleHBsaWNpdGx5ICE9IGFuZCBub3QgIT09XHJcbiAgICBpZiAobmV3VmFsdWUgIT0gb2xkVmFsdWUpIHtcclxuICAgICAgdGhpcy4kc2VsZWN0LnZhbChuZXdWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdEVsZW1lbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19