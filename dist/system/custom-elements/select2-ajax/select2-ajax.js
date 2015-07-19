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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnREFPYSxXQUFXOzs7Ozs7Ozs7O2lDQVBoQixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7OztzQkFHL0IsSUFBSTs7O0FBSUMsaUJBQVc7OztBQU9YLGlCQVBBLFdBQVcsQ0FPVixPQUFPLEVBQUUsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7O0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzsyQkFWVSxXQUFXOzsrQkFZdEIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxjQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsV0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLFVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUs7QUFDdEkscUJBQVMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDdEMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDN0Msa0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN2RSxrQkFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQzs7QUFFL0YseUJBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFD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QVcsSUFBSTs7Ozs7dUJBQ3ZCLFFBQVE7O21CQUFTLElBQUk7Ozs7O3VCQUNyQixRQUFROzttQkFBWSxLQUFLOzs7Ozt1QkFDekIsUUFBUTs7bUJBQVcsRUFBRTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFTLEVBQUU7Ozs7O0FBTFQsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FDVCxXQUFXLEtBQVgsV0FBVztBQUFYLG1CQUFXLEdBRnZCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUVwQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVc7Ozs2QkFBWCxXQUFXIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdzZWxlY3QyL3NlbGVjdDInO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdzZXJ2aWNlJztcblxuQGN1c3RvbUVsZW1lbnQoJ3NlbGVjdC10d28tYWpheCcpXG5AaW5qZWN0KEVsZW1lbnQsIEh0dHApXG5leHBvcnQgY2xhc3MgU2VsZWN0MkFqYXgge1xuICBAYmluZGFibGUgY2FwdGlvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xuICBAYmluZGFibGUgb3B0aW9ucyA9IHt9O1xuICBAYmluZGFibGUgY2xlYXIgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBodHRwKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmh0dHAgPSBodHRwO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBsZXQgc2VsZWN0MnRoaXMgPSB0aGlzO1xuICAgICQuZm4uc2VsZWN0Mi5hbWQucmVxdWlyZShbJ3NlbGVjdDIvZGF0YS9hcnJheScsICdzZWxlY3QyL3V0aWxzJywgJ3NlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZSddLCAoQXJyYXlBZGFwdGVyLCBVdGlscywgU2luZ2xlU2VsZWN0aW9uKSA9PiB7XG4gICAgICBmdW5jdGlvbiBBamF4QWRhcHRlcigkZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmFqYXhPcHRpb25zID0gb3B0aW9ucy5nZXQoJ2FqYXgnKSB8fCB7fTtcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPT09IHVuZGVmaW5lZCkgdGhpcy5hamF4T3B0aW9ucy5kZWxheSA9IDI1MDtcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID09PSB1bmRlZmluZWQpIHRoaXMuYWpheE9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID0gMjtcblxuICAgICAgICBBamF4QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLkV4dGVuZChBamF4QWRhcHRlciwgQXJyYXlBZGFwdGVyKTtcblxuICAgICAgQWpheEFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuaW5pdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkYXRhID0gW3tcbiAgICAgICAgICAgIGlkOiB0aGlzLmFqYXhPcHRpb25zLmluaXRJZCxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMuYWpheE9wdGlvbnMuaW5pdE5hbWVcbiAgICAgICAgICB9XTtcbiAgICAgICAgICB0aGlzLmFqYXhPcHRpb25zLmluaXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBjYWxsYmFjayhkYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgICAgICAgIGRhdGEucHVzaChvcHRpb24pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiByZXF1ZXN0KCkge1xuICAgICAgICAgIGlmIChwYXJhbXMudGVybSAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy50ZXJtLmxlbmd0aCA+IHNlbGYuYWpheE9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSBzZWxmLmFqYXhPcHRpb25zLnVybCB8fCBzZWxmLmFqYXhPcHRpb25zLmdldFVybCgpO1xuICAgICAgICAgICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbmZpZ3VyYXRpb24gZXhjZXB0aW9uISBzZWxlY3QyLWFqYXgsIG11c3QgaGF2ZSBkZWZpbmVkIG9wdGlvbnMuYWpheC51cmwgb3Igb3B0aW9ucy5hamF4LmdldFVybCgpIVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlcSA9IHNlbGVjdDJ0aGlzLmh0dHAuZ2V0KGAke3VybH0/cT0ke3BhcmFtcy50ZXJtfWApO1xuICAgICAgICAgICAgcmVxLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGQgPT4ge1xuICAgICAgICAgICAgICAgIGQudGV4dCA9IGQubmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FsbGJhY2soe3Jlc3VsdHM6IGRhdGF9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLmRlbGF5ID4gMCkge1xuICAgICAgICAgIGlmICh0aGlzLl9xdWVyeVRpbWVvdXQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fcXVlcnlUaW1lb3V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9xdWVyeVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChyZXF1ZXN0LCB0aGlzLmFqYXhPcHRpb25zLmRlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuICAgICAgZnVuY3Rpb24gQ3VzdG9tU2luZ2xlU2VsZWN0aW9uKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuRXh0ZW5kKEN1c3RvbVNpbmdsZVNlbGVjdGlvbiwgU2luZ2xlU2VsZWN0aW9uKTtcblxuICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAvLyBVc2VyIGZvY3VzZXMgb24gdGhlIGNvbnRhaW5lclxuICAgICAgICAgIGlmICghc2VsZWN0MnRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLiRzZWxlY3Quc2VsZWN0MihcIm9wZW5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgLy8gVXNlciBleGl0cyB0aGUgY29udGFpbmVyXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuXG4gICAgICBsZXQgc2VsZWN0ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgc2VsZWN0aW9uQWRhcHRlcjogQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLFxuICAgICAgICBkYXRhQWRhcHRlcjogQWpheEFkYXB0ZXIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNhcHRpb24sXG4gICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXG4gICAgICAgIGFqYXg6IHRoaXMub3B0aW9uc1xuICAgICAgfTtcblxuICAgICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0KTtcbiAgICAgICRzZWxlY3QuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG4gICAgICB0aGlzLnNlbGVjdDIgPSAkc2VsZWN0LnNlbGVjdDIob3B0aW9ucyk7XG4gICAgICB0aGlzLiRzZWxlY3QgPSAkc2VsZWN0O1xuICAgICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wgPSAkc2VsZWN0LmRhdGEoJ3NlbGVjdDInKTtcbiAgICAgIHRoaXMub2xkU2VsZWN0MlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNlbGVjdDIub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBzZWxlY3QydGhpcy52YWx1ZSA9IHBhcnNlSW50KHNlbGVjdDJ0aGlzLnNlbGVjdDIudmFsKCksIDEwKTtcbiAgICAgICAgaWYgKGlzTmFOKHNlbGVjdDJ0aGlzLnZhbHVlKSkge1xuICAgICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSAhPT0gc2VsZWN0MnRoaXMudmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3QydGhpcy5vbGRTZWxlY3QyVmFsdWUgPSBzZWxlY3QydGhpcy52YWx1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckNoYW5nZWQoKSB7XG4gICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wucmVzdWx0cy5jbGVhcigpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHRoaXMuJHNlbGVjdC52YWwobmV3VmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=