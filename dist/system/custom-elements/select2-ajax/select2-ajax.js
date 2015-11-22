System.register(['aurelia-framework', 'jquery', 'service', 'select2'], function (_export) {
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
    }, function (_select2) {}],
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

        _createDecoratedClass(_Select2Ajax, [{
          key: 'bind',
          value: function bind() {
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
          }
        }, {
          key: 'clearChanged',
          value: function clearChanged() {
            this._select2control.results.clear();
          }
        }, {
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {
            if (newValue != oldValue) {
              this.$select.val(newValue).trigger('change');
            }
          }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnREFRYSxXQUFXOzs7Ozs7Ozs7O2lDQVJoQixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7OztzQkFFL0IsSUFBSTs7O0FBTUMsaUJBQVc7OztBQU9YLGlCQVBBLFdBQVcsQ0FPVixPQUFPLEVBQUUsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7O0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzsyQkFWVSxXQUFXOzs7O2lCQVlsQixnQkFBRzs7O0FBQ0wsZ0JBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUN2QixhQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLDBCQUEwQixDQUFDLEVBQUUsVUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBSztBQUN0SSx1QkFBUyxXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUN0QyxvQkFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QyxvQkFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3ZFLG9CQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDOztBQUUvRiwyQkFBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7ZUFDakU7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dkIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFZLEtBQUs7Ozs7O3VCQUN6QixRQUFROzttQkFBVyxFQUFFOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVMsRUFBRTs7Ozs7QUFMVCxtQkFBVyxHQUR2QixNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUNULFdBQVcsS0FBWCxXQUFXO0FBQVgsbUJBQVcsR0FGdkIsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBRXBCLFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVzs7OzZCQUFYLFdBQVciLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDItYWpheC9zZWxlY3QyLWFqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ3NlcnZpY2UnO1xuXG5pbXBvcnQgJ3NlbGVjdDInO1xuXG5AY3VzdG9tRWxlbWVudCgnc2VsZWN0LXR3by1hamF4JylcbkBpbmplY3QoRWxlbWVudCwgSHR0cClcbmV4cG9ydCBjbGFzcyBTZWxlY3QyQWpheCB7XG4gIEBiaW5kYWJsZSBjYXB0aW9uID0gbnVsbDtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0ge307XG4gIEBiaW5kYWJsZSBjbGVhciA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGh0dHApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGxldCBzZWxlY3QydGhpcyA9IHRoaXM7XG4gICAgJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKFsnc2VsZWN0Mi9kYXRhL2FycmF5JywgJ3NlbGVjdDIvdXRpbHMnLCAnc2VsZWN0Mi9zZWxlY3Rpb24vc2luZ2xlJ10sIChBcnJheUFkYXB0ZXIsIFV0aWxzLCBTaW5nbGVTZWxlY3Rpb24pID0+IHtcbiAgICAgIGZ1bmN0aW9uIEFqYXhBZGFwdGVyKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYWpheE9wdGlvbnMgPSBvcHRpb25zLmdldCgnYWpheCcpIHx8IHt9O1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5kZWxheSA9PT0gdW5kZWZpbmVkKSB0aGlzLmFqYXhPcHRpb25zLmRlbGF5ID0gMjUwO1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPT09IHVuZGVmaW5lZCkgdGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPSAyO1xuXG4gICAgICAgIEFqYXhBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuRXh0ZW5kKEFqYXhBZGFwdGVyLCBBcnJheUFkYXB0ZXIpO1xuXG4gICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5pbml0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRhdGEgPSBbe1xuICAgICAgICAgICAgaWQ6IHRoaXMuYWpheE9wdGlvbnMuaW5pdElkLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5hamF4T3B0aW9ucy5pbml0TmFtZVxuICAgICAgICAgIH1dO1xuICAgICAgICAgIHRoaXMuYWpheE9wdGlvbnMuaW5pdElkID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcblxuICAgICAgICAgICAgZGF0YS5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy50ZXJtICE9PSB1bmRlZmluZWQgJiYgcGFyYW1zLnRlcm0ubGVuZ3RoID4gc2VsZi5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHNlbGYuYWpheE9wdGlvbnMudXJsIHx8IHNlbGYuYWpheE9wdGlvbnMuZ2V0VXJsKCk7XG4gICAgICAgICAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlndXJhdGlvbiBleGNlcHRpb24hIHNlbGVjdDItYWpheCwgbXVzdCBoYXZlIGRlZmluZWQgb3B0aW9ucy5hamF4LnVybCBvciBvcHRpb25zLmFqYXguZ2V0VXJsKCkhXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVxID0gc2VsZWN0MnRoaXMuaHR0cC5nZXQoYCR7dXJsfT9xPSR7cGFyYW1zLnRlcm19YCk7XG4gICAgICAgICAgICByZXEudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoZCA9PiB7XG4gICAgICAgICAgICAgICAgZC50ZXh0ID0gZC5uYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYWxsYmFjayh7cmVzdWx0czogZGF0YX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPiAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9xdWVyeVRpbWVvdXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlcXVlc3QsIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICBmdW5jdGlvbiBDdXN0b21TaW5nbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5FeHRlbmQoQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLCBTaW5nbGVTZWxlY3Rpb24pO1xuXG4gICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXG4gICAgICAgICAgaWYgKCFzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMuJHNlbGVjdC5zZWxlY3QyKFwib3BlblwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG5cbiAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBzZWxlY3Rpb25BZGFwdGVyOiBDdXN0b21TaW5nbGVTZWxlY3Rpb24sXG4gICAgICAgIGRhdGFBZGFwdGVyOiBBamF4QWRhcHRlcixcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY2FwdGlvbixcbiAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgICAgYWpheDogdGhpcy5vcHRpb25zXG4gICAgICB9O1xuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gJChzZWxlY3QpO1xuICAgICAgJHNlbGVjdC5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcbiAgICAgIHRoaXMuJHNlbGVjdCA9ICRzZWxlY3Q7XG4gICAgICB0aGlzLl9zZWxlY3QyY29udHJvbCA9ICRzZWxlY3QuZGF0YSgnc2VsZWN0MicpO1xuICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gcGFyc2VJbnQoc2VsZWN0MnRoaXMuc2VsZWN0Mi52YWwoKSwgMTApO1xuICAgICAgICBpZiAoaXNOYU4oc2VsZWN0MnRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlICE9PSBzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgIHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHNlbGVjdDJ0aGlzLnZhbHVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9zZWxlY3QyY29udHJvbC5yZXN1bHRzLmNsZWFyKCk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgLy8gZXhwbGljaXRseSAhPSBhbmQgbm90ICE9PVxuICAgIGlmIChuZXdWYWx1ZSAhPSBvbGRWYWx1ZSkge1xuICAgICAgdGhpcy4kc2VsZWN0LnZhbChuZXdWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==