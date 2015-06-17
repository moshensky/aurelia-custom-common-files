import moment from 'moment';

export class DateFormatValueConverter {
  toView(value, format) {
    if (format) {
      return moment(value).format(format);
    }
    return moment(value).format('LL');
  }
}
