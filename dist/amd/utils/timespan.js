define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

    _createClass(Timespan, [{
      key: 'toString',
      value: function toString() {
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
    }, {
      key: 'equals',
      value: function equals(other) {
        if (other === undefined || other === null) {
          return false;
        }

        return this.hours === other.hours && this.minutes === other.minutes;
      }
    }]);

    return Timespan;
  })();

  exports.Timespan = Timespan;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RpbWVzcGFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BQWEsUUFBUTtBQUNSLGFBREEsUUFBUSxDQUNQLFFBQVEsRUFBRTs0QkFEWCxRQUFROztBQUVqQixVQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxVQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDaEIsVUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDaEMsWUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxZQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLGVBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLGlCQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFckMsY0FBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDM0IsaUJBQUssR0FBRyxDQUFDLENBQUM7V0FDWDs7QUFFRCxjQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLEVBQUUsRUFBRTtBQUMvQixtQkFBTyxHQUFHLENBQUMsQ0FBQztXQUNiO1NBQ0Y7T0FDRjs7QUFFRCxVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7aUJBdEJVLFFBQVE7O2FBd0JYLG9CQUFHO0FBQ1QsWUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFlBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDbkIsZ0JBQU0sSUFBSSxHQUFHLENBQUM7U0FDZjs7QUFFRCxjQUFNLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7O0FBRTNCLFlBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7QUFDckIsZ0JBQU0sSUFBSSxHQUFHLENBQUM7U0FDZjs7QUFFRCxjQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQzs7QUFFdkIsZUFBTyxNQUFNLENBQUM7T0FDZjs7O2FBRUssZ0JBQUMsS0FBSyxFQUFFO0FBQ1osWUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDekMsaUJBQU8sS0FBSyxDQUFDO1NBQ2Q7O0FBRUQsZUFBUSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFFO09BQ3ZFOzs7V0EvQ1UsUUFBUTs7O1VBQVIsUUFBUSxHQUFSLFFBQVEiLCJmaWxlIjoidXRpbHMvdGltZXNwYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGltZXNwYW4ge1xuICBjb25zdHJ1Y3Rvcih0aW1lc3Bhbikge1xuICAgIHZhciBob3VycyA9IDA7XG4gICAgdmFyIG1pbnV0ZXMgPSAwO1xuICAgIGlmICh0eXBlb2YgdGltZXNwYW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZnJhZ21lbnRzID0gdGltZXNwYW4uc3BsaXQoJzonKTtcbiAgICAgIGlmIChmcmFnbWVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgaG91cnMgPSBwYXJzZUludChmcmFnbWVudHNbMF0sIDEwKTtcbiAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KGZyYWdtZW50c1sxXSwgMTApO1xuXG4gICAgICAgIGlmIChob3VycyA8IDAgfHwgaG91cnMgPiAyMykge1xuICAgICAgICAgIGhvdXJzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaW51dGVzIDwgMCB8fCBtaW51dGVzID4gNTkpIHtcbiAgICAgICAgICBtaW51dGVzID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGlmICh0aGlzLmhvdXJzIDwgMTApIHtcbiAgICAgIHJlc3VsdCArPSAnMCc7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IHRoaXMuaG91cnMgKyAnOic7XG5cbiAgICBpZiAodGhpcy5taW51dGVzIDwgMTApIHtcbiAgICAgIHJlc3VsdCArPSAnMCc7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IHRoaXMubWludXRlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAob3RoZXIgPT09IHVuZGVmaW5lZCB8fCBvdGhlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5ob3VycyA9PT0gb3RoZXIuaG91cnMgJiYgdGhpcy5taW51dGVzID09PSBvdGhlci5taW51dGVzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9