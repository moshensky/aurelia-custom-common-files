import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import {Http} from 'service';

import 'select2/select2/css/select2.css!text';
import '../select2_custom.css!text';
import 'select2/select2';

@customElement('select-two-ajax')
@inject(Element, Http)
export class Select2Ajax {
  @bindable caption = null;
  @bindable value = null;
  @bindable disabled = false;
  @bindable options = {};
  @bindable clear = {};

  constructor(element, http) {
    this.element = element;
    this.http = http;
  }

  bind() {
    let select2this = this;
    $.fn.select2.amd.require(['select2/data/array', 'select2/utils', 'select2/selection/single'], (ArrayAdapter, Utils, SingleSelection) => {
      function AjaxAdapter($element, options) {
        this.ajaxOptions = options.get('ajax') || {};
        if (this.ajaxOptions.delay === undefined) this.ajaxOptions.delay = 250;
        if (this.ajaxOptions.minimumInputLength === undefined) this.ajaxOptions.minimumInputLength = 2;

        AjaxAdapter.__super__.constructor.call(this, $element, options);
      }

      Utils.Extend(AjaxAdapter, ArrayAdapter);

      AjaxAdapter.prototype.current = function (callback) {
        let data = [];
        if (this.ajaxOptions.initId !== undefined) {
          data = [{
            id: this.ajaxOptions.initId,
            text: this.ajaxOptions.initName
          }];
          this.ajaxOptions.initId = undefined;
          callback(data)
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
        let self = this;

        function request() {
          if (params.term !== undefined && params.term.length > self.ajaxOptions.minimumInputLength) {

            let url = self.ajaxOptions.url || self.ajaxOptions.getUrl();
            if (url === undefined) {
              throw new Error("Configuration exception! select2-ajax, must have defined options.ajax.url or options.ajax.getUrl()!");
            }

            let req = select2this.http.get(`${url}?q=${params.term}`);
            req.then((data) => {
              data = data.map(d => {
                d.text = d.name;
                return d;
              });

              callback({results: data});
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
          // User focuses on the container
          if (!select2this.value) {
            select2this.$select.select2("open");
          }
        });

        this.$selection.on('blur', function (evt) {
          // User exits the container
        });
      };


      let select = this.element.firstElementChild;

      let options = {
        selectionAdapter: CustomSingleSelection,
        dataAdapter: AjaxAdapter,
        placeholder: this.caption,
        allowClear: true,
        ajax: this.options
      };

      const $select = $(select);
      $select.css('width', '100%');
      this.select2 = $select.select2(options);
      this.$select = $select;
      this._select2control = $select.data('select2');
      this.oldSelect2Value = undefined;
      var self = this;

      this.select2.on('change', (event) => {
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

  clearChanged() {
    this._select2control.results.clear();
  }

  valueChanged(newValue, oldValue) {
    // explicitly != and not !==
    if (newValue != oldValue) {
      this.$select.val(newValue).trigger('change');
    }
  }
}

