import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'select2/select2';

@customElement('select-two')
@inject(Element)
export class Select2 {
  @bindable items = null;
  @bindable caption = null;
  @bindable value = null;
  @bindable disabled = false;
  @bindable options = {};

  constructor(element) {
    this.element = element;
  }

  bind() {
    let select2this = this;
    $.fn.select2.amd.require(['select2/utils', 'select2/selection/single'], (Utils, SingleSelection) => {
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

      let options = Object.assign({
        selectionAdapter: CustomSingleSelection,
        placeholder: this.caption,
        allowClear: true
      }, this.options);

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
          if (select2this.initElement === false) {
            setTimeout(function () {
              select2this.element.dispatchEvent(new Event('change'));
            });
          } else {
            select2this.initElement = false;
          }
        }
      });
    });
  }

  attached() {
    this.valueChanged(this.value);
  }

  itemsChanged(newValue, oldValue) {
    const index = newValue.map(x => x.id).indexOf(this.value);
    if (index === -1) {
      this.value = null;
    }
  }

  valueChanged(newValue, oldValue) {
    // explicitly != and not !==
    if (newValue != oldValue) {
      this.$select.val(newValue).trigger('change');
    }
  }
}
