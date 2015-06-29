import {inject, customElement, bindable, bindingMode} from 'aurelia-framework';
import moment from 'moment';

@customElement('linked-datepicker')
@inject(Element)
export class LinkedDatePicker {
    @bindable start = moment(new Date());
    @bindable end = moment(new Date());
    @bindable disabled = false;

    constructor(element) {
        this.element = element;
    }

    attached() {
      var self = this;
      this.datepicker1.datepicker.$element.on('dp.change', (event) => {
        if (event) {
          self.start = event.date;
          this.datepicker2.datepicker.$element.data('DateTimePicker').minDate(event.date);
        }
      });

      this.datepicker2.datepicker.$element.on('dp.change', (event) => {
        if (event) {
          self.end = event.date;
          this.datepicker1.datepicker.$element.data('DateTimePicker').maxDate(event.date);
        }
      });
    }
}
