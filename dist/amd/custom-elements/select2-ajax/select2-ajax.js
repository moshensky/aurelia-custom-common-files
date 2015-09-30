define(['exports', 'aurelia-framework', 'jquery', 'service', 'select2'], function (exports, _aureliaFramework, _jquery, _service, _select2) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var Select2Ajax = (function () {
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
      _$['default'].fn.select2.amd.require(['select2/data/array', 'select2/utils', 'select2/selection/single'], function (ArrayAdapter, Utils, SingleSelection) {
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
              var $option = (0, _$['default'])(this);

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

              var req = select2this.http.get('' + url + '?q=' + params.term);
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

        var $select = (0, _$['default'])(select);
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
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return null;
      },
      enumerable: true
    }, {
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return null;
      },
      enumerable: true
    }, {
      key: 'disabled',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return false;
      },
      enumerable: true
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return {};
      },
      enumerable: true
    }, {
      key: 'clear',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    Select2Ajax = (0, _aureliaFramework.inject)(Element, _service.Http)(Select2Ajax) || Select2Ajax;
    Select2Ajax = (0, _aureliaFramework.customElement)('select-two-ajax')(Select2Ajax) || Select2Ajax;
    return Select2Ajax;
  })();

  exports.Select2Ajax = Select2Ajax;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQVFhLFdBQVc7OztBQU9YLGFBUEEsV0FBVyxDQU9WLE9BQU8sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFDekIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDbEI7O3VCQVZVLFdBQVc7OzJCQVl0QixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLFVBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUN2QixvQkFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsMEJBQTBCLENBQUMsRUFBRSxVQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFLO0FBQ3RJLGlCQUFTLFdBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLGNBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDN0MsY0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3ZFLGNBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7O0FBRS9GLHFCQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqRTs7QUFFRCxhQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQzs7QUFFeEMsbUJB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QWFuQixFQUFFOzs7OztBQUxULGVBQVcsR0FEdkIsc0JBUE8sTUFBTSxFQU9OLE9BQU8sV0FMUCxJQUFJLENBS1UsQ0FDVCxXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FGdkIsc0JBTmUsYUFBYSxFQU1kLGlCQUFpQixDQUFDLENBRXBCLFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVzs7O1VBQVgsV0FBVyxHQUFYLFdBQVciLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDItYWpheC9zZWxlY3QyLWFqYXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ3NlcnZpY2UnO1xuXG5pbXBvcnQgJ3NlbGVjdDInO1xuXG5AY3VzdG9tRWxlbWVudCgnc2VsZWN0LXR3by1hamF4JylcbkBpbmplY3QoRWxlbWVudCwgSHR0cClcbmV4cG9ydCBjbGFzcyBTZWxlY3QyQWpheCB7XG4gIEBiaW5kYWJsZSBjYXB0aW9uID0gbnVsbDtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0ge307XG4gIEBiaW5kYWJsZSBjbGVhciA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGh0dHApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGxldCBzZWxlY3QydGhpcyA9IHRoaXM7XG4gICAgJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKFsnc2VsZWN0Mi9kYXRhL2FycmF5JywgJ3NlbGVjdDIvdXRpbHMnLCAnc2VsZWN0Mi9zZWxlY3Rpb24vc2luZ2xlJ10sIChBcnJheUFkYXB0ZXIsIFV0aWxzLCBTaW5nbGVTZWxlY3Rpb24pID0+IHtcbiAgICAgIGZ1bmN0aW9uIEFqYXhBZGFwdGVyKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYWpheE9wdGlvbnMgPSBvcHRpb25zLmdldCgnYWpheCcpIHx8IHt9O1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5kZWxheSA9PT0gdW5kZWZpbmVkKSB0aGlzLmFqYXhPcHRpb25zLmRlbGF5ID0gMjUwO1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPT09IHVuZGVmaW5lZCkgdGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPSAyO1xuXG4gICAgICAgIEFqYXhBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuRXh0ZW5kKEFqYXhBZGFwdGVyLCBBcnJheUFkYXB0ZXIpO1xuXG4gICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5pbml0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRhdGEgPSBbe1xuICAgICAgICAgICAgaWQ6IHRoaXMuYWpheE9wdGlvbnMuaW5pdElkLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5hamF4T3B0aW9ucy5pbml0TmFtZVxuICAgICAgICAgIH1dO1xuICAgICAgICAgIHRoaXMuYWpheE9wdGlvbnMuaW5pdElkID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcblxuICAgICAgICAgICAgZGF0YS5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy50ZXJtICE9PSB1bmRlZmluZWQgJiYgcGFyYW1zLnRlcm0ubGVuZ3RoID4gc2VsZi5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHNlbGYuYWpheE9wdGlvbnMudXJsIHx8IHNlbGYuYWpheE9wdGlvbnMuZ2V0VXJsKCk7XG4gICAgICAgICAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlndXJhdGlvbiBleGNlcHRpb24hIHNlbGVjdDItYWpheCwgbXVzdCBoYXZlIGRlZmluZWQgb3B0aW9ucy5hamF4LnVybCBvciBvcHRpb25zLmFqYXguZ2V0VXJsKCkhXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVxID0gc2VsZWN0MnRoaXMuaHR0cC5nZXQoYCR7dXJsfT9xPSR7cGFyYW1zLnRlcm19YCk7XG4gICAgICAgICAgICByZXEudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoZCA9PiB7XG4gICAgICAgICAgICAgICAgZC50ZXh0ID0gZC5uYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYWxsYmFjayh7cmVzdWx0czogZGF0YX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPiAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9xdWVyeVRpbWVvdXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlcXVlc3QsIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICBmdW5jdGlvbiBDdXN0b21TaW5nbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5FeHRlbmQoQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLCBTaW5nbGVTZWxlY3Rpb24pO1xuXG4gICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXG4gICAgICAgICAgaWYgKCFzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMuJHNlbGVjdC5zZWxlY3QyKFwib3BlblwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG5cbiAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBzZWxlY3Rpb25BZGFwdGVyOiBDdXN0b21TaW5nbGVTZWxlY3Rpb24sXG4gICAgICAgIGRhdGFBZGFwdGVyOiBBamF4QWRhcHRlcixcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY2FwdGlvbixcbiAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgICAgYWpheDogdGhpcy5vcHRpb25zXG4gICAgICB9O1xuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gJChzZWxlY3QpO1xuICAgICAgJHNlbGVjdC5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcbiAgICAgIHRoaXMuJHNlbGVjdCA9ICRzZWxlY3Q7XG4gICAgICB0aGlzLl9zZWxlY3QyY29udHJvbCA9ICRzZWxlY3QuZGF0YSgnc2VsZWN0MicpO1xuICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gcGFyc2VJbnQoc2VsZWN0MnRoaXMuc2VsZWN0Mi52YWwoKSwgMTApO1xuICAgICAgICBpZiAoaXNOYU4oc2VsZWN0MnRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlICE9PSBzZWxlY3QydGhpcy52YWx1ZSkge1xuICAgICAgICAgIHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHNlbGVjdDJ0aGlzLnZhbHVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZWN0MnRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9zZWxlY3QyY29udHJvbC5yZXN1bHRzLmNsZWFyKCk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgLy8gZXhwbGljaXRseSAhPSBhbmQgbm90ICE9PVxuICAgIGlmIChuZXdWYWx1ZSAhPSBvbGRWYWx1ZSkge1xuICAgICAgdGhpcy4kc2VsZWN0LnZhbChuZXdWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==