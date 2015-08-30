define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Timespan = (function () {
    function Timespan(timespan) {
      _classCallCheck(this, Timespan);

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

    Timespan.prototype.toString = function toString() {
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
    };

    Timespan.prototype.equals = function equals(other) {
      if (other === undefined || other === null) {
        return false;
      }

      return this.hours === other.hours && this.minutes === other.minutes;
    };

    return Timespan;
  })();

  exports.Timespan = Timespan;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RpbWVzcGFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFBYSxRQUFRO0FBQ1IsYUFEQSxRQUFRLENBQ1AsUUFBUSxFQUFFOzRCQURYLFFBQVE7O0FBRWpCLFVBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLFVBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixVQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUNoQyxZQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLFlBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDekIsZUFBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsaUJBQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVyQyxjQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtBQUMzQixpQkFBSyxHQUFHLENBQUMsQ0FBQztXQUNYOztBQUVELGNBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxFQUFFO0FBQy9CLG1CQUFPLEdBQUcsQ0FBQyxDQUFDO1dBQ2I7U0FDRjtPQUNGOztBQUVELFVBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztBQXRCVSxZQUFRLFdBd0JuQixRQUFRLEdBQUEsb0JBQUc7QUFDVCxVQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsVUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRTtBQUNuQixjQUFNLElBQUksR0FBRyxDQUFDO09BQ2Y7O0FBRUQsWUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOztBQUUzQixVQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0FBQ3JCLGNBQU0sSUFBSSxHQUFHLENBQUM7T0FDZjs7QUFFRCxZQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQzs7QUFFdkIsYUFBTyxNQUFNLENBQUM7S0FDZjs7QUF2Q1UsWUFBUSxXQXlDbkIsTUFBTSxHQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLFVBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3pDLGVBQU8sS0FBSyxDQUFDO09BQ2Q7O0FBRUQsYUFBUSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFFO0tBQ3ZFOztXQS9DVSxRQUFROzs7VUFBUixRQUFRLEdBQVIsUUFBUSIsImZpbGUiOiJ1dGlscy90aW1lc3Bhbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaW1lc3BhbiB7XG4gIGNvbnN0cnVjdG9yKHRpbWVzcGFuKSB7XG4gICAgdmFyIGhvdXJzID0gMDtcbiAgICB2YXIgbWludXRlcyA9IDA7XG4gICAgaWYgKHR5cGVvZiB0aW1lc3BhbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBmcmFnbWVudHMgPSB0aW1lc3Bhbi5zcGxpdCgnOicpO1xuICAgICAgaWYgKGZyYWdtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICBob3VycyA9IHBhcnNlSW50KGZyYWdtZW50c1swXSwgMTApO1xuICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQoZnJhZ21lbnRzWzFdLCAxMCk7XG5cbiAgICAgICAgaWYgKGhvdXJzIDwgMCB8fCBob3VycyA+IDIzKSB7XG4gICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xuICAgICAgICAgIG1pbnV0ZXMgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ob3VycyA9IGhvdXJzO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgaWYgKHRoaXMuaG91cnMgPCAxMCkge1xuICAgICAgcmVzdWx0ICs9ICcwJztcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gdGhpcy5ob3VycyArICc6JztcblxuICAgIGlmICh0aGlzLm1pbnV0ZXMgPCAxMCkge1xuICAgICAgcmVzdWx0ICs9ICcwJztcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gdGhpcy5taW51dGVzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGVxdWFscyhvdGhlcikge1xuICAgIGlmIChvdGhlciA9PT0gdW5kZWZpbmVkIHx8IG90aGVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0aGlzLmhvdXJzID09PSBvdGhlci5ob3VycyAmJiB0aGlzLm1pbnV0ZXMgPT09IG90aGVyLm1pbnV0ZXMpO1xuICB9XG59XG4iXX0=