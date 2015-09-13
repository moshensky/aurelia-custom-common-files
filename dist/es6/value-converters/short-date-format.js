import moment from 'moment';

export class ShortDateFormatValueConverter {
  toView(value, format) {
    if (format) {
      return moment(value).format(format);
    }
    return moment(value).format('L');
  }
}
