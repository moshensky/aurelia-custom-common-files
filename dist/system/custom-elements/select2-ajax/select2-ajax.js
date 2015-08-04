System.register(['aurelia-framework', 'jquery', 'select2/select2', 'service'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, Http, Select2Ajax;

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
    }, function (_select2Select2) {}, function (_service) {
      Http = _service.Http;
    }],
    execute: function () {
      Select2Ajax = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Select2Ajax, [{
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

        Select2Ajax.prototype.bind = function bind() {
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
                    throw new Error("Configuration exception! select2-ajax, must have defined options.ajax.url or options.ajax.getUrl()!");
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
                  select2this.$select.select2("open");
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

        Select2Ajax.prototype.clearChanged = function clearChanged() {
          this._select2control.results.clear();
        };

        Select2Ajax.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          if (newValue != oldValue) {
            this.$select.val(newValue).trigger('change');
          }
        };

        var _Select2Ajax = Select2Ajax;
        Select2Ajax = inject(Element, Http)(Select2Ajax) || Select2Ajax;
        Select2Ajax = customElement('select-two-ajax')(Select2Ajax) || Select2Ajax;
        return Select2Ajax;
      })();

      _export('Select2Ajax', Select2Ajax);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnREFPYSxXQUFXOzs7Ozs7Ozs7O2lDQVBoQixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7OztzQkFHL0IsSUFBSTs7O0FBSUMsaUJBQVc7Ozs4QkFBWCxXQUFXOzt1QkFDckIsUUFBUTs7bUJBQVcsSUFBSTs7Ozs7dUJBQ3ZCLFFBQVE7O21CQUFTLElBQUk7Ozs7O3VCQUNyQixRQUFROzttQkFBWSxLQUFLOzs7Ozt1QkFDekIsUUFBUTs7bUJBQVcsRUFBRTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFTLEVBQUU7Ozs7O0FBRVQsaUJBUEEsV0FBVyxDQU9WLE9BQU8sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFDekIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O0FBVlUsbUJBQVcsV0FZdEIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxjQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsV0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLFVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUs7QUFDdEkscUJBQVMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDdEMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDN0Msa0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN2RSxrQkFBSSxJQUFJLENBQUMsV0FBVyxD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QixZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUUvQixjQUFJLFFBQVEsSUFBSSxRQUFRLEVBQUU7QUFDeEIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUM5QztTQUNGOzsyQkF2SlUsV0FBVztBQUFYLG1CQUFXLEdBRHZCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQ1QsV0FBVyxLQUFYLFdBQVc7QUFBWCxtQkFBVyxHQUZ2QixhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FFcEIsV0FBVyxLQUFYLFdBQVc7ZUFBWCxXQUFXIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAnc2VsZWN0Mi9zZWxlY3QyJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdzZXJ2aWNlJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZWxlY3QtdHdvLWFqYXgnKVxyXG5AaW5qZWN0KEVsZW1lbnQsIEh0dHApXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3QyQWpheCB7XHJcbiAgQGJpbmRhYmxlIGNhcHRpb24gPSBudWxsO1xyXG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcclxuICBAYmluZGFibGUgY2xlYXIgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgaHR0cCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgbGV0IHNlbGVjdDJ0aGlzID0gdGhpcztcclxuICAgICQuZm4uc2VsZWN0Mi5hbWQucmVxdWlyZShbJ3NlbGVjdDIvZGF0YS9hcnJheScsICdzZWxlY3QyL3V0aWxzJywgJ3NlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZSddLCAoQXJyYXlBZGFwdGVyLCBVdGlscywgU2luZ2xlU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgIGZ1bmN0aW9uIEFqYXhBZGFwdGVyKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hamF4T3B0aW9ucyA9IG9wdGlvbnMuZ2V0KCdhamF4JykgfHwge307XHJcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPT09IHVuZGVmaW5lZCkgdGhpcy5hamF4T3B0aW9ucy5kZWxheSA9IDI1MDtcclxuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPT09IHVuZGVmaW5lZCkgdGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPSAyO1xyXG5cclxuICAgICAgICBBamF4QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFV0aWxzLkV4dGVuZChBamF4QWRhcHRlciwgQXJyYXlBZGFwdGVyKTtcclxuXHJcbiAgICAgIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5pbml0SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmFqYXhPcHRpb25zLmluaXRJZCxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5hamF4T3B0aW9ucy5pbml0TmFtZVxyXG4gICAgICAgICAgfV07XHJcbiAgICAgICAgICB0aGlzLmFqYXhPcHRpb25zLmluaXRJZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gc2VsZi5pdGVtKCRvcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5wdXNoKG9wdGlvbik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVxdWVzdCgpIHtcclxuICAgICAgICAgIGlmIChwYXJhbXMudGVybSAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy50ZXJtLmxlbmd0aCA+IHNlbGYuYWpheE9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsID0gc2VsZi5hamF4T3B0aW9ucy51cmwgfHwgc2VsZi5hamF4T3B0aW9ucy5nZXRVcmwoKTtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlndXJhdGlvbiBleGNlcHRpb24hIHNlbGVjdDItYWpheCwgbXVzdCBoYXZlIGRlZmluZWQgb3B0aW9ucy5hamF4LnVybCBvciBvcHRpb25zLmFqYXguZ2V0VXJsKCkhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxID0gc2VsZWN0MnRoaXMuaHR0cC5nZXQoYCR7dXJsfT9xPSR7cGFyYW1zLnRlcm19YCk7XHJcbiAgICAgICAgICAgIHJlcS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZC50ZXh0ID0gZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIGNhbGxiYWNrKHtyZXN1bHRzOiBkYXRhfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPiAwKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fcXVlcnlUaW1lb3V0KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLl9xdWVyeVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChyZXF1ZXN0LCB0aGlzLmFqYXhPcHRpb25zLmRlbGF5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVxdWVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiBDdXN0b21TaW5nbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFV0aWxzLkV4dGVuZChDdXN0b21TaW5nbGVTZWxlY3Rpb24sIFNpbmdsZVNlbGVjdGlvbik7XHJcblxyXG4gICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICBpZiAoIXNlbGVjdDJ0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLiRzZWxlY3Quc2VsZWN0MihcIm9wZW5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBzZWxlY3Rpb25BZGFwdGVyOiBDdXN0b21TaW5nbGVTZWxlY3Rpb24sXHJcbiAgICAgICAgZGF0YUFkYXB0ZXI6IEFqYXhBZGFwdGVyLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNhcHRpb24sXHJcbiAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICBhamF4OiB0aGlzLm9wdGlvbnNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKHNlbGVjdCk7XHJcbiAgICAgICRzZWxlY3QuY3NzKCd3aWR0aCcsICcxMDAlJyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcclxuICAgICAgdGhpcy4kc2VsZWN0ID0gJHNlbGVjdDtcclxuICAgICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wgPSAkc2VsZWN0LmRhdGEoJ3NlbGVjdDInKTtcclxuICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSBwYXJzZUludChzZWxlY3QydGhpcy5zZWxlY3QyLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgaWYgKGlzTmFOKHNlbGVjdDJ0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlICE9PSBzZWxlY3QydGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlID0gc2VsZWN0MnRoaXMudmFsdWU7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZWN0MnRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wucmVzdWx0cy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgLy8gZXhwbGljaXRseSAhPSBhbmQgbm90ICE9PVxyXG4gICAgaWYgKG5ld1ZhbHVlICE9IG9sZFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuJHNlbGVjdC52YWwobmV3VmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19