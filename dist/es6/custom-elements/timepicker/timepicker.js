import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'Eonasdan/bootstrap-datetimepicker';
import moment from 'moment';
import {Timespan} from '../../utils/timespan';

@customElement('timepicker')
@inject(Element)
export class Timepicker {
  @bindable value = null;
  @bindable options = null;

  constructor(element) {
    this.element = element
  }


  bind() {
    const defaultOpts = {
      format: 'HH:mm'
    };

    var div = this.element.firstElementChild;
    var input = div.firstElementChild;
    this.$element = $(div);
    this.options = this.options || {};
    if (this.options.format !== undefined) {
      delete this.options.format;
    }

    var options = $.extend({}, defaultOpts, this.options);
    this.datepicker = this.$element.datetimepicker(options);
    this.datepicker.on('dp.change', (ev) => {
      var elVal = input.value;
      if (elVal === '') {
        this.value = null;
      } else {
        var newTimespan = new Timespan(elVal);
        const areSame = newTimespan.equals(this.value);
        if (!areSame) {
          this.value = newTimespan;
        }
      }
    });

    this.valueChanged(this.value);
  }

  valueChanged(newValue, oldValue) {
    if (newValue === undefined) throw new Error('Do not use undefined!');
    if (newValue === null) {
      this.$element.val('');
      this.value = null;
      return;
    }

    if (newValue.constructor.name !== "Timespan") {
      throw new Error('This has to be moment type.');
    }

    const areSame = newValue.equals(oldValue);
    if (areSame) {
      return;
    }

    var timeAsMoment = moment(newValue.toString(), 'HH:mm');
    this.$element.data('DateTimePicker').date(timeAsMoment);
  }
}
