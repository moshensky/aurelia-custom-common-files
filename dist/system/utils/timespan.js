System.register([], function (_export) {
  'use strict';

  var Timespan;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Timespan = (function () {
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

      _export('Timespan', Timespan);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RpbWVzcGFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFhLFFBQVE7Ozs7Ozs7OztBQUFSLGNBQVE7QUFDUixpQkFEQSxRQUFRLENBQ1AsUUFBUSxFQUFFO2dDQURYLFFBQVE7O0FBRWpCLGNBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLGNBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixjQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUNoQyxnQkFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxnQkFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUN6QixtQkFBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMscUJBQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVyQyxrQkFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDM0IscUJBQUssR0FBRyxDQUFDLENBQUM7ZUFDWDs7QUFFRCxrQkFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxFQUFFLEVBQUU7QUFDL0IsdUJBQU8sR0FBRyxDQUFDLENBQUM7ZUFDYjthQUNGO1dBQ0Y7O0FBRUQsY0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQXRCVSxRQUFROztpQkF3Qlgsb0JBQUc7QUFDVCxnQkFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGdCQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFO0FBQ25CLG9CQUFNLElBQUksR0FBRyxDQUFDO2FBQ2Y7O0FBRUQsa0JBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs7QUFFM0IsZ0JBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7QUFDckIsb0JBQU0sSUFBSSxHQUFHLENBQUM7YUFDZjs7QUFFRCxrQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7O0FBRXZCLG1CQUFPLE1BQU0sQ0FBQztXQUNmOzs7aUJBRUssZ0JBQUMsS0FBSyxFQUFFO0FBQ1osZ0JBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3pDLHFCQUFPLEtBQUssQ0FBQzthQUNkOztBQUVELG1CQUFRLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUU7V0FDdkU7OztlQS9DVSxRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJ1dGlscy90aW1lc3Bhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaW1lc3BhbiB7XG4gIGNvbnN0cnVjdG9yKHRpbWVzcGFuKSB7XG4gICAgdmFyIGhvdXJzID0gMDtcbiAgICB2YXIgbWludXRlcyA9IDA7XG4gICAgaWYgKHR5cGVvZiB0aW1lc3BhbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBmcmFnbWVudHMgPSB0aW1lc3Bhbi5zcGxpdCgnOicpO1xuICAgICAgaWYgKGZyYWdtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICBob3VycyA9IHBhcnNlSW50KGZyYWdtZW50c1swXSwgMTApO1xuICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQoZnJhZ21lbnRzWzFdLCAxMCk7XG5cbiAgICAgICAgaWYgKGhvdXJzIDwgMCB8fCBob3VycyA+IDIzKSB7XG4gICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xuICAgICAgICAgIG1pbnV0ZXMgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ob3VycyA9IGhvdXJzO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgaWYgKHRoaXMuaG91cnMgPCAxMCkge1xuICAgICAgcmVzdWx0ICs9ICcwJztcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gdGhpcy5ob3VycyArICc6JztcblxuICAgIGlmICh0aGlzLm1pbnV0ZXMgPCAxMCkge1xuICAgICAgcmVzdWx0ICs9ICcwJztcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gdGhpcy5taW51dGVzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGVxdWFscyhvdGhlcikge1xuICAgIGlmIChvdGhlciA9PT0gdW5kZWZpbmVkIHx8IG90aGVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0aGlzLmhvdXJzID09PSBvdGhlci5ob3VycyAmJiB0aGlzLm1pbnV0ZXMgPT09IG90aGVyLm1pbnV0ZXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=