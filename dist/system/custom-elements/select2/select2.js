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
          var select = this.element.firstElementChild;

          var options = Object.assign({
            placeholder: this.caption,
            allowClear: true
          }, this.options);

          var $select = $(select);
          $select.css('width', '100%');
          this.select2 = $select.select2(options);
          this.oldSelect2Value = undefined;
          var self = this;

          this.select2.on('change', function (event) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBDQU1hLE9BQU87Ozs7Ozs7Ozs7aUNBTlosTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7O0FBTTFCLGFBQU87OztBQU9QLGlCQVBBLE9BQU8sQ0FPTixPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3VCQVRVLE9BQU87OzJCQVdsQixJQUFJLEdBQUEsZ0JBQUc7QUFDTCxjQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDOztBQUU1QyxjQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzFCLHVCQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU87QUFDekIsc0JBQVUsRUFBRSxJQUFJO1dBQ2pCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVqQixjQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxjQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUNqQyxjQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLGNBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBSztBQUNuQyxnQkFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM5QyxnQkFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3JCLGtCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNuQjs7QUFFRCxnQkFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDdkMsa0JBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNsQyxrQkFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtBQUM5QiwwQkFBVSxDQUFDLFlBQVk7QUFDckIsc0JBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQ2pELENBQUMsQ0FBQztlQUNKLE1BQU07QUFDTCxvQkFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7ZUFDMUI7YUFDRjtXQUNGLENBQUMsQ0FBQztTQUNKOzsyQkFFRCxRQUFRLEdBQUEsb0JBQUc7QUFDVCxjQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjs7MkJBRUQsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDL0IsY0FBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7bUJBQUksQ0FBQyxDQUFDLEVBQUU7V0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxjQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNoQixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7V0FDbkI7U0FDRjs7MkJBRUQsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLGNBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQixrQkFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1dBQzFDOztBQUVELGNBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QyxjQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUUvQyxjQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLEtBQUssY0FBYyxFQUFFO0FBQ3hELGtCQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7V0FDeEQ7O0FBRUQsY0FBSSxXQUFXLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3BDLGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7V0FDMUM7U0FDRjs7Ozt1QkFyRUEsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVksS0FBSzs7Ozs7dUJBQ3pCLFFBQVE7O21CQUFXLEVBQUU7Ozs7O0FBTFgsZUFBTyxHQURuQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBRm5CLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FFZixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ3NlbGVjdDIvc2VsZWN0Mic7XG5cbkBjdXN0b21FbGVtZW50KCdzZWxlY3QtdHdvJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBTZWxlY3QyIHtcbiAgQGJpbmRhYmxlIGl0ZW1zID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNhcHRpb24gPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IHNlbGVjdCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5jYXB0aW9uLFxuICAgICAgYWxsb3dDbGVhcjogdHJ1ZVxuICAgIH0sIHRoaXMub3B0aW9ucyk7XG5cbiAgICBjb25zdCAkc2VsZWN0ID0gJChzZWxlY3QpO1xuICAgICRzZWxlY3QuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG4gICAgdGhpcy5zZWxlY3QyID0gJHNlbGVjdC5zZWxlY3QyKG9wdGlvbnMpO1xuICAgIHRoaXMub2xkU2VsZWN0MlZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBzZWxmLnZhbHVlID0gcGFyc2VJbnQoc2VsZi5zZWxlY3QyLnZhbCgpLCAxMCk7XG4gICAgICBpZiAoaXNOYU4oc2VsZi52YWx1ZSkpIHtcbiAgICAgICAgc2VsZi52YWx1ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLm9sZFNlbGVjdDJWYWx1ZSAhPT0gc2VsZi52YWx1ZSkge1xuICAgICAgICBzZWxmLm9sZFNlbGVjdDJWYWx1ZSA9IHNlbGYudmFsdWU7XG4gICAgICAgIGlmIChzZWxmLmluaXRFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5pbml0RWxlbWVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBjb25zdCBpbmRleCA9IG5ld1ZhbHVlLm1hcCh4ID0+IHguaWQpLmluZGV4T2YodGhpcy52YWx1ZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgb3B0cykge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xuICAgIH1cblxuICAgIHZhciBuZXdWYWx1ZU51bWJlciA9IE51bWJlcihuZXdWYWx1ZSk7XG4gICAgdmFyIG5ld1ZhbHVlSW50ID0gcGFyc2VJbnQobmV3VmFsdWVOdW1iZXIsIDEwKTtcblxuICAgIGlmIChpc05hTihuZXdWYWx1ZUludCkgfHwgbmV3VmFsdWVJbnQgIT09IG5ld1ZhbHVlTnVtYmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZW0gSWQgbXVzdCBiZSBudWxsIG9yIGFuIGludGlnZXIhJyk7XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbHVlSW50ICE9PSBOdW1iZXIob2xkVmFsdWUpKSB7XG4gICAgICB0aGlzLnNlbGVjdDIuc2VsZWN0MigndmFsJywgbmV3VmFsdWVJbnQpO1xuICAgIH1cbiAgfVxufVxuIl19