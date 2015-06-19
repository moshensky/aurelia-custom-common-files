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

  constructor(element) {
    this.element = element;
  }

  bind() {
    var select = this.element.firstElementChild;

    var options = {
      placeholder: this.caption,
      allowClear: true
    };

    const $select = $(select);
    $select.css('width', '100%');
    this.select2 = $select.select2(options);
    var self = this;

    this.select2.on('change', (event) => {
      self.value = self.select2.val();
      //Find better way to invoke observable before function!!!
      if (self.initElement === false) {
        setTimeout(function() {
          self.element.dispatchEvent(new Event("change"));
        });
      } else {
        self.initElement = false;
      }
    });
  }

  disabledChanged(newValue) {
    if (newValue) {

      this.element.querySelector('select').setAttribute('disabled', 'disabled');
      this.element.classList.add('disabled');
    } else {
      this.element.querySelector('select').removeAttribute('disabled', 'disabled');
      this.element.classList.remove('disabled');
    }
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
