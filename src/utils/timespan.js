export class Timespan {
  constructor(timespan) {
    var hours = 0;
    var minutes = 0;
    if (typeof timespan === 'string') {
      var fragments = timespan.split(':');
      if (fragments.length >= 2) {
        hours = parseInt(fragments[0], 10);
        minutes = parseInt(fragments[1], 10);

        if (hours < 0 || hours > 23) {
          hours = 0;
        }

        if (minutes < 0 || minutes > 59) {
          minutes = 0;
        }
      }
    }

    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    var result = '';
    if (this.hours < 10) {
      result += '0';
    }

    result += this.hours + ':';

    if (this.minutes < 10) {
      result += '0';
    }

    result += this.minutes;

    return result;
  }

  equals(other) {
    if (other === undefined || other === null) {
      return false;
    }

    return (this.hours === other.hours && this.minutes === other.minutes);
  }
}
