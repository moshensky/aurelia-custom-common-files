/**
 * Created by moshensky on 5/24/15.
 */
import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('enable')
@inject(Element)
export class Enable {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue) {
    if (newValue) {
      this.element.disabled = ''
    } else {
      this.element.disabled = 'disabled'
    }
  }
}
