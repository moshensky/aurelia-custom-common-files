System.register(['aurelia-framework', 'jquery', 'service', 'select2/select2/css/select2.css!', '../select2_custom.css!', 'select2/select2'], function (_export) {
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
    }, function (_select2Select2CssSelect2Css) {}, function (_select2_customCss) {}, function (_select2Select2) {}],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnREFVYSxXQUFXOzs7Ozs7Ozs7O2lDQVZoQixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7OztzQkFFL0IsSUFBSTs7O0FBUUMsaUJBQVc7OztBQU9YLGlCQVBBLFdBQVcsQ0FPVixPQUFPLEVBQUUsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7O0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzsyQkFWVSxXQUFXOzsrQkFZdEIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxjQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsV0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLFVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUs7QUFDdEkscUJBQVMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDdEMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDN0Msa0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN2RSxrQkFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQzs7QUFFL0YseUJBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFD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QVcsSUFBSTs7Ozs7dUJBQ3ZCLFFBQVE7O21CQUFTLElBQUk7Ozs7O3VCQUNyQixRQUFROzttQkFBWSxLQUFLOzs7Ozt1QkFDekIsUUFBUTs7bUJBQVcsRUFBRTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFTLEVBQUU7Ozs7O0FBTFQsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FDVCxXQUFXLEtBQVgsV0FBVztBQUFYLG1CQUFXLEdBRnZCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUVwQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVc7Ozs2QkFBWCxXQUFXIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdzZXJ2aWNlJztcblxuaW1wb3J0ICdzZWxlY3QyL3NlbGVjdDIvY3NzL3NlbGVjdDIuY3NzISc7XG5pbXBvcnQgJy4uL3NlbGVjdDJfY3VzdG9tLmNzcyEnO1xuaW1wb3J0ICdzZWxlY3QyL3NlbGVjdDInO1xuXG5AY3VzdG9tRWxlbWVudCgnc2VsZWN0LXR3by1hamF4JylcbkBpbmplY3QoRWxlbWVudCwgSHR0cClcbmV4cG9ydCBjbGFzcyBTZWxlY3QyQWpheCB7XG4gIEBiaW5kYWJsZSBjYXB0aW9uID0gbnVsbDtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0ge307XG4gIEBiaW5kYWJsZSBjbGVhciA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGh0dHApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGxldCBzZWxlY3QydGhpcyA9IHRoaXM7XG4gICAgJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKFsnc2VsZWN0Mi9kYXRhL2FycmF5JywgJ3NlbGVjdDIvdXRpbHMnLCAnc2VsZWN0Mi9zZWxlY3Rpb24vc2luZ2xlJ10sIChBcnJheUFkYXB0ZXIsIFV0aWxzLCBTaW5nbGVTZWxlY3Rpb24pID0+IHtcbiAgICAgIGZ1bmN0aW9uIEFqYXhBZGFwdGVyKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYWpheE9wdGlvbnMgPSBvcHRpb25zLmdldCgnYWpheCcpIHx8IHt9O1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5kZWxheSA9PT0gdW5kZWZpbmVkKSB0aGlzLmFqYXhPcHRpb25zLmRlbGF5ID0gMjUwO1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPT09IHVuZGVmaW5lZCkgdGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPSAyO1xuXG4gICAgICAgIEFqYXhBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuRXh0ZW5kKEFqYXhBZGFwdGVyLCBBcnJheUFkYXB0ZXIpO1xuXG4gICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5pbml0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRhdGEgPSBbe1xuICAgICAgICAgICAgaWQ6IHRoaXMuYWpheE9wdGlvbnMuaW5pdElkLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5hamF4T3B0aW9ucy5pbml0TmFtZVxuICAgICAgICAgIH1dO1xuICAgICAgICAgIHRoaXMuYWpheE9wdGlvbnMuaW5pdElkID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcblxuICAgICAgICAgICAgZGF0YS5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy50ZXJtICE9PSB1bmRlZmluZWQgJiYgcGFyYW1zLnRlcm0ubGVuZ3RoID4gc2VsZi5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHNlbGYuYWpheE9wdGlvbnMudXJsIHx8IHNlbGYuYWpheE9wdGlvbnMuZ2V0VXJsKCk7XG4gICAgICAgICAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlndXJhdGlvbiBleGNlcHRpb24hIHNlbGVjdDItYWpheCwgbXVzdCBoYXZlIGRlZmluZWQgb3B0aW9ucy5hamF4LnVybCBvciBvcHRpb25zLmFqYXguZ2V0VXJsKCkhXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVxID0gc2VsZWN0MnRoaXMuaHR0cC5nZXQoYCR7dXJsfT9xPSR7cGFyYW1zLnRlcm19YCk7XG4gICAgICAgICAgICByZXEudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoZCA9PiB7XG4gICAgICAgICAgICAgICAgZC50ZXh0ID0gZC5uYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYWxsYmFjayh7cmVzdWx0czogZGF0YX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPiAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9xdWVyeVRpbWVvdXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlcXVlc3QsIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICBmdW5jdGlvbiBDdXN0b21TaW5nbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5FeHRlbmQoQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLCBTaW5nbGVTZWxlY3Rpb24pO1xuXG4gICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXG4gICAgICAgICAgaWYgKCFzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMuJHNlbGVjdC5zZWxlY3QyKFwib3BlblwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG5cbiAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBzZWxlY3Rpb25BZGFwdGVyOiBDdXN0b21TaW5nbGVTZWxlY3Rpb24sXG4gICAgICAgIGRhdGFBZGFwdGVyOiBBamF4QWRhcHRlcixcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY2FwdGlvbixcbiAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgICAgYWpheDogdGhpcy5vcHRpb25zXG4gICAgICB9O1xuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gJChzZWxlY3QpO1xuICAgICAgJHNlbGVjdC5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcbiAgICAgIHRoaXMuJHNlbGVjdCA9ICRzZWxlY3Q7XG4gICAgICB0aGlzLl9zZWxlY3QyY29udHJvbCA9ICRzZWxlY3QuZGF0YSgnc2VsZWN0MicpO1xuICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gcGFyc2VJbnQoc2VsZWN0MnRoaXMuc2VsZWN0Mi52YWwoKSwgMTApO1xuICAgICAgICBpZiAoaXNOYU4oc2VsZWN0MnRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlICE9PSBzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgIHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHNlbGVjdDJ0aGlzLnZhbHVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9zZWxlY3QyY29udHJvbC5yZXN1bHRzLmNsZWFyKCk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgLy8gZXhwbGljaXRseSAhPSBhbmQgbm90ICE9PVxuICAgIGlmIChuZXdWYWx1ZSAhPSBvbGRWYWx1ZSkge1xuICAgICAgdGhpcy4kc2VsZWN0LnZhbChuZXdWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==