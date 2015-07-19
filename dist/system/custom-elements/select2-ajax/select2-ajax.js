System.register(['aurelia-framework', 'jquery', 'select2/select2', 'service'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, Http, Select2Ajax;

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
    }, function (_select2Select2) {}, function (_service) {
      Http = _service.Http;
    }],
    execute: function () {
      Select2Ajax = (function () {
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
          $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], function (ArrayAdapter, Utils) {
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
                  var $option = $(this);

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

            var select = _this.element.firstElementChild;

            var options = {
              dataAdapter: AjaxAdapter,
              placeholder: _this.caption,
              allowClear: true,
              ajax: _this.options
            };

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
          if (newValue !== oldValue) {
            this.$select.val(newValue).trigger('change');
          }
        };

        _createDecoratedClass(_Select2Ajax, [{
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
        }, {
          key: 'clear',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        Select2Ajax = inject(Element, Http)(Select2Ajax) || Select2Ajax;
        Select2Ajax = customElement('select-two-ajax')(Select2Ajax) || Select2Ajax;
        return Select2Ajax;
      })();

      _export('Select2Ajax', Select2Ajax);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnREFPYSxXQUFXOzs7Ozs7Ozs7O2lDQVBoQixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7OztzQkFHL0IsSUFBSTs7O0FBSUMsaUJBQVc7OztBQU9YLGlCQVBBLFdBQVcsQ0FPVixPQUFPLEVBQUUsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7O0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzsyQkFWVSxXQUFXOzsrQkFZdEIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxjQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsV0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxFQUFFLFVBQUMsWUFBWSxFQUFFLEtBQUssRUFBSztBQUN6RixxQkFBUyxXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUN0QyxrQkFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QyxrQkFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3ZFLGtCQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDOztBQUUvRix5QkFBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDakU7O0FBRUQsaUJBQUssQ0FB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LHdCQUFHO0FBQ2IsY0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEM7OytCQUVELFlBQVksR0FBQSxzQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQy9CLGNBQUksUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUN6QixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQzlDO1NBQ0Y7Ozs7dUJBNUhBLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVksS0FBSzs7Ozs7dUJBQ3pCLFFBQVE7O21CQUFXLEVBQUU7Ozs7O3VCQUNyQixRQUFROzttQkFBUyxFQUFFOzs7OztBQUxULG1CQUFXLEdBRHZCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQ1QsV0FBVyxLQUFYLFdBQVc7QUFBWCxtQkFBVyxHQUZ2QixhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FFcEIsV0FBVyxLQUFYLFdBQVc7ZUFBWCxXQUFXOzs7NkJBQVgsV0FBVyIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvc2VsZWN0Mi1hamF4L3NlbGVjdDItYWpheC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnc2VsZWN0Mi9zZWxlY3QyJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnc2VydmljZSc7XG5cbkBjdXN0b21FbGVtZW50KCdzZWxlY3QtdHdvLWFqYXgnKVxuQGluamVjdChFbGVtZW50LCBIdHRwKVxuZXhwb3J0IGNsYXNzIFNlbGVjdDJBamF4IHtcbiAgQGJpbmRhYmxlIGNhcHRpb24gPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcbiAgQGJpbmRhYmxlIGNsZWFyID0ge307XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgaHR0cCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5odHRwID0gaHR0cDtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IHNlbGVjdDJ0aGlzID0gdGhpcztcbiAgICAkLmZuLnNlbGVjdDIuYW1kLnJlcXVpcmUoWydzZWxlY3QyL2RhdGEvYXJyYXknLCAnc2VsZWN0Mi91dGlscyddLCAoQXJyYXlBZGFwdGVyLCBVdGlscykgPT4ge1xuICAgICAgZnVuY3Rpb24gQWpheEFkYXB0ZXIoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hamF4T3B0aW9ucyA9IG9wdGlvbnMuZ2V0KCdhamF4JykgfHwge307XG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLmRlbGF5ID09PSB1bmRlZmluZWQpIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPSAyNTA7XG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCA9PT0gdW5kZWZpbmVkKSB0aGlzLmFqYXhPcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCA9IDI7XG5cbiAgICAgICAgQWpheEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XG5cbiAgICAgIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBkYXRhID0gW107XG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLmluaXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGF0YSA9IFt7XG4gICAgICAgICAgICBpZDogdGhpcy5hamF4T3B0aW9ucy5pbml0SWQsXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmFqYXhPcHRpb25zLmluaXROYW1lXG4gICAgICAgICAgfV07XG4gICAgICAgICAgdGhpcy5hamF4T3B0aW9ucy5pbml0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY2FsbGJhY2soZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gc2VsZi5pdGVtKCRvcHRpb24pO1xuXG4gICAgICAgICAgICBkYXRhLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVxdWVzdCgpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLnRlcm0gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMudGVybS5sZW5ndGggPiBzZWxmLmFqYXhPcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCkge1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gc2VsZi5hamF4T3B0aW9ucy51cmwgfHwgc2VsZi5hamF4T3B0aW9ucy5nZXRVcmwoKTtcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWd1cmF0aW9uIGV4Y2VwdGlvbiEgc2VsZWN0Mi1hamF4LCBtdXN0IGhhdmUgZGVmaW5lZCBvcHRpb25zLmFqYXgudXJsIG9yIG9wdGlvbnMuYWpheC5nZXRVcmwoKSFcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZXEgPSBzZWxlY3QydGhpcy5odHRwLmdldChgJHt1cmx9P3E9JHtwYXJhbXMudGVybX1gKTtcbiAgICAgICAgICAgIHJlcS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcChkID0+IHtcbiAgICAgICAgICAgICAgICBkLnRleHQgPSBkLm5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhbGxiYWNrKHtyZXN1bHRzOiBkYXRhfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5kZWxheSA+IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVxdWVzdCwgdGhpcy5hamF4T3B0aW9ucy5kZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG5cbiAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhQWRhcHRlcjogQWpheEFkYXB0ZXIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNhcHRpb24sXG4gICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXG4gICAgICAgIGFqYXg6IHRoaXMub3B0aW9uc1xuICAgICAgfTtcblxuICAgICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0KTtcbiAgICAgICRzZWxlY3QuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG4gICAgICB0aGlzLnNlbGVjdDIgPSAkc2VsZWN0LnNlbGVjdDIob3B0aW9ucyk7XG4gICAgICB0aGlzLiRzZWxlY3QgPSAkc2VsZWN0O1xuICAgICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wgPSAkc2VsZWN0LmRhdGEoJ3NlbGVjdDInKTtcbiAgICAgIHRoaXMub2xkU2VsZWN0MlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNlbGVjdDIub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBzZWxlY3QydGhpcy52YWx1ZSA9IHBhcnNlSW50KHNlbGVjdDJ0aGlzLnNlbGVjdDIudmFsKCksIDEwKTtcbiAgICAgICAgaWYgKGlzTmFOKHNlbGVjdDJ0aGlzLnZhbHVlKSkge1xuICAgICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSAhPT0gc2VsZWN0MnRoaXMudmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3QydGhpcy5vbGRTZWxlY3QyVmFsdWUgPSBzZWxlY3QydGhpcy52YWx1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckNoYW5nZWQoKSB7XG4gICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wucmVzdWx0cy5jbGVhcigpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHRoaXMuJHNlbGVjdC52YWwobmV3VmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=