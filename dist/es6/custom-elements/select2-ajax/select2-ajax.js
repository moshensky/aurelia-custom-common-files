import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'select2/select2';
import {Http} from 'service';

@customElement('select-two-ajax')
@inject(Element, Http)
export class Select2Ajax {
  @bindable caption = null;
  @bindable value = null;
  @bindable disabled = false;
  @bindable options = {};

  constructor(element, http) {
    this.element = element;
    this.http = http;
  }

  bind() {
    let select2this = this;
    $.fn.select2.amd.require(['select2/data/array', 'select2/utils'],(ArrayAdapter, Utils) => {
      function AjaxAdapter ($element, options) {
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
        function request () {
          if (params.term !== undefined && params.term.length > self.ajaxOptions.minimumInputLength) {
            let req = select2this.http.get(`${self.ajaxOptions.url}?q=${params.term}`);
            req.then((data) => {
              data = data.map(d => {
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


      let select = this.element.firstElementChild;

      let options = Object.assign({
        dataAdapter: AjaxAdapter,
        placeholder: this.caption,
        allowClear: true
      }, this.options);

      const $select = $(select);
      $select.css('width', '100%');
      this.select2 = $select.select2(options);
      this.oldSelect2Value = undefined;
      var self = this;

      this.select2.on('change', (event) => {
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
    });
  }

  attached() {
    //this.valueChanged(this.value);
  }

  itemsChanged(newValue, oldValue) {
    const index = newValue.map(x => x.id).indexOf(this.value);
    if (index === -1) {
      this.value = null;
    }
  }

  valueChanged(newValue, oldValue, opts) {
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
  }
}

