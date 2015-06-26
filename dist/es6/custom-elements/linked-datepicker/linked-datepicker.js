import {inject, customElement, bindable, bindingMode} from 'aurelia-framework';
import moment from 'moment';

@customElement('linked-datepicker')
@inject(Element)

export class LinkedDatePicker {
    // @bindable({
    // name:'start', //name of the property on the class
    // attribute:'start', //name of the attribute in HTML
    // defaultBindingMode: bindingMode.twoWay, //default binding mode used with the .bind command
    // defaultValue: moment(new Date()) //default value of the property, if not bound or set in HTML
    // })
    // @bindable({
    // name:'end', //name of the property on the class
    // attribute:'end', //name of the attribute in HTML
    // defaultBindingMode: bindingMode.twoWay, //default binding mode used with the .bind command
    // defaultValue: moment(new Date()) //default value of the property, if not bound or set in HTML
    // })
    @bindable start = moment(new Date());
    @bindable end = moment(new Date());
    @bindable disabled = false;

    constructor(element) {
        this.element = element;
    }

    attached() {
      var self = this;
      this.datepicker1.datepicker.$element.on('dp.change', (event) => {
        if (event.date) {
          self.start = event.date;
          this.datepicker2.datepicker.$element.data('DateTimePicker').minDate(event.date);
        }
      });

      this.datepicker2.datepicker.$element.on('dp.change', (event) => {
        if (event.date) {
          self.end = event.date;
          this.datepicker1.datepicker.$element.data('DateTimePicker').maxDate(event.date);
        }
      });
    }
}
