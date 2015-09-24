System.register(['aurelia-framework', 'jquery', 'service', 'select2/select2/css/select2.css!text', '../select2_custom.css!text', 'select2/select2'], function (_export) {
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
    }, function (_service) {
      Http = _service.Http;
    }, function (_select2Select2CssSelect2CssText) {}, function (_select2_customCssText) {}, function (_select2Select2) {}],
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
          $.fn.select2.amd.require(['select2/data/array', 'select2/utils', 'select2/selection/single'], function (ArrayAdapter, Utils, SingleSelection) {
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
          if (newValue != oldValue) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnREFVYSxXQUFXOzs7Ozs7Ozs7O2lDQVZoQixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7OztzQkFFL0IsSUFBSTs7O0FBUUMsaUJBQVc7OztBQU9YLGlCQVBBLFdBQVcsQ0FPVixPQUFPLEVBQUUsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7O0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzsyQkFWVSxXQUFXOzsrQkFZdEIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxjQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsV0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLFVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUs7QUFDdEkscUJBQVMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDdEMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDN0Msa0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN2RSxrQkFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQzs7QUFFL0YseUJBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFD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QVcsSUFBSTs7Ozs7dUJBQ3ZCLFFBQVE7O21CQUFTLElBQUk7Ozs7O3VCQUNyQixRQUFROzttQkFBWSxLQUFLOzs7Ozt1QkFDekIsUUFBUTs7bUJBQVcsRUFBRTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFTLEVBQUU7Ozs7O0FBTFQsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FDVCxXQUFXLEtBQVgsV0FBVztBQUFYLG1CQUFXLEdBRnZCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUVwQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVc7Ozs2QkFBWCxXQUFXIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdzZXJ2aWNlJztcblxuaW1wb3J0ICdzZWxlY3QyL3NlbGVjdDIvY3NzL3NlbGVjdDIuY3NzIXRleHQnO1xuaW1wb3J0ICcuLi9zZWxlY3QyX2N1c3RvbS5jc3MhdGV4dCc7XG5pbXBvcnQgJ3NlbGVjdDIvc2VsZWN0Mic7XG5cbkBjdXN0b21FbGVtZW50KCdzZWxlY3QtdHdvLWFqYXgnKVxuQGluamVjdChFbGVtZW50LCBIdHRwKVxuZXhwb3J0IGNsYXNzIFNlbGVjdDJBamF4IHtcbiAgQGJpbmRhYmxlIGNhcHRpb24gPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcbiAgQGJpbmRhYmxlIGNsZWFyID0ge307XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgaHR0cCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5odHRwID0gaHR0cDtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IHNlbGVjdDJ0aGlzID0gdGhpcztcbiAgICAkLmZuLnNlbGVjdDIuYW1kLnJlcXVpcmUoWydzZWxlY3QyL2RhdGEvYXJyYXknLCAnc2VsZWN0Mi91dGlscycsICdzZWxlY3QyL3NlbGVjdGlvbi9zaW5nbGUnXSwgKEFycmF5QWRhcHRlciwgVXRpbHMsIFNpbmdsZVNlbGVjdGlvbikgPT4ge1xuICAgICAgZnVuY3Rpb24gQWpheEFkYXB0ZXIoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hamF4T3B0aW9ucyA9IG9wdGlvbnMuZ2V0KCdhamF4JykgfHwge307XG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLmRlbGF5ID09PSB1bmRlZmluZWQpIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPSAyNTA7XG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCA9PT0gdW5kZWZpbmVkKSB0aGlzLmFqYXhPcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCA9IDI7XG5cbiAgICAgICAgQWpheEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XG5cbiAgICAgIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBkYXRhID0gW107XG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLmluaXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGF0YSA9IFt7XG4gICAgICAgICAgICBpZDogdGhpcy5hamF4T3B0aW9ucy5pbml0SWQsXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmFqYXhPcHRpb25zLmluaXROYW1lXG4gICAgICAgICAgfV07XG4gICAgICAgICAgdGhpcy5hamF4T3B0aW9ucy5pbml0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY2FsbGJhY2soZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gc2VsZi5pdGVtKCRvcHRpb24pO1xuXG4gICAgICAgICAgICBkYXRhLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVxdWVzdCgpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLnRlcm0gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMudGVybS5sZW5ndGggPiBzZWxmLmFqYXhPcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCkge1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gc2VsZi5hamF4T3B0aW9ucy51cmwgfHwgc2VsZi5hamF4T3B0aW9ucy5nZXRVcmwoKTtcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWd1cmF0aW9uIGV4Y2VwdGlvbiEgc2VsZWN0Mi1hamF4LCBtdXN0IGhhdmUgZGVmaW5lZCBvcHRpb25zLmFqYXgudXJsIG9yIG9wdGlvbnMuYWpheC5nZXRVcmwoKSFcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZXEgPSBzZWxlY3QydGhpcy5odHRwLmdldChgJHt1cmx9P3E9JHtwYXJhbXMudGVybX1gKTtcbiAgICAgICAgICAgIHJlcS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcChkID0+IHtcbiAgICAgICAgICAgICAgICBkLnRleHQgPSBkLm5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhbGxiYWNrKHtyZXN1bHRzOiBkYXRhfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5kZWxheSA+IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVxdWVzdCwgdGhpcy5hamF4T3B0aW9ucy5kZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG5cbiAgICAgIGZ1bmN0aW9uIEN1c3RvbVNpbmdsZVNlbGVjdGlvbigkZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLkV4dGVuZChDdXN0b21TaW5nbGVTZWxlY3Rpb24sIFNpbmdsZVNlbGVjdGlvbik7XG5cbiAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgLy8gVXNlciBmb2N1c2VzIG9uIHRoZSBjb250YWluZXJcbiAgICAgICAgICBpZiAoIXNlbGVjdDJ0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3QydGhpcy4kc2VsZWN0LnNlbGVjdDIoXCJvcGVuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxuICAgICAgICB9KTtcbiAgICAgIH07XG5cblxuICAgICAgbGV0IHNlbGVjdCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHNlbGVjdGlvbkFkYXB0ZXI6IEN1c3RvbVNpbmdsZVNlbGVjdGlvbixcbiAgICAgICAgZGF0YUFkYXB0ZXI6IEFqYXhBZGFwdGVyLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5jYXB0aW9uLFxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICBhamF4OiB0aGlzLm9wdGlvbnNcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKHNlbGVjdCk7XG4gICAgICAkc2VsZWN0LmNzcygnd2lkdGgnLCAnMTAwJScpO1xuICAgICAgdGhpcy5zZWxlY3QyID0gJHNlbGVjdC5zZWxlY3QyKG9wdGlvbnMpO1xuICAgICAgdGhpcy4kc2VsZWN0ID0gJHNlbGVjdDtcbiAgICAgIHRoaXMuX3NlbGVjdDJjb250cm9sID0gJHNlbGVjdC5kYXRhKCdzZWxlY3QyJyk7XG4gICAgICB0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5zZWxlY3QyLm9uKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSBwYXJzZUludChzZWxlY3QydGhpcy5zZWxlY3QyLnZhbCgpLCAxMCk7XG4gICAgICAgIGlmIChpc05hTihzZWxlY3QydGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICBzZWxlY3QydGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3QydGhpcy5vbGRTZWxlY3QyVmFsdWUgIT09IHNlbGVjdDJ0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlID0gc2VsZWN0MnRoaXMudmFsdWU7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxlY3QydGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJDaGFuZ2VkKCkge1xuICAgIHRoaXMuX3NlbGVjdDJjb250cm9sLnJlc3VsdHMuY2xlYXIoKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAvLyBleHBsaWNpdGx5ICE9IGFuZCBub3QgIT09XG4gICAgaWYgKG5ld1ZhbHVlICE9IG9sZFZhbHVlKSB7XG4gICAgICB0aGlzLiRzZWxlY3QudmFsKG5ld1ZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG4gIH1cbn1cblxuIl19