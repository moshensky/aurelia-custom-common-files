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

            if (this.hours !== other.hours || this.minutes !== other.minutes) {
                return false;
            }

            return true;
        };

        return Timespan;
    })();

    exports.Timespan = Timespan;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RpbWVzcGFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7UUFBYSxRQUFRO0FBQ04saUJBREYsUUFBUSxDQUNMLFFBQVEsRUFBRTtrQ0FEYixRQUFROztBQUViLGdCQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxnQkFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLGdCQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUM5QixvQkFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxvQkFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUN2Qix5QkFBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsMkJBQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVyQyx3QkFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDekIsNkJBQUssR0FBRyxDQUFDLENBQUM7cUJBQ2I7O0FBRUQsd0JBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxFQUFFO0FBQzdCLCtCQUFPLEdBQUcsQ0FBQyxDQUFDO3FCQUNmO2lCQUNKO2FBQ0o7O0FBRUQsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLGdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUMxQjs7QUF0QlEsZ0JBQVEsV0F3QmpCLFFBQVEsR0FBQSxvQkFBRztBQUNQLGdCQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsZ0JBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDakIsc0JBQU0sSUFBSSxHQUFHLENBQUM7YUFDakI7O0FBRUQsa0JBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs7QUFFM0IsZ0JBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7QUFDbkIsc0JBQU0sSUFBSSxHQUFHLENBQUM7YUFDakI7O0FBRUQsa0JBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDOztBQUV2QixtQkFBTyxNQUFNLENBQUM7U0FDakI7O0FBdkNRLGdCQUFRLFdBeUNqQixNQUFNLEdBQUEsZ0JBQUMsS0FBSyxFQUFFO0FBQ1YsZ0JBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3ZDLHVCQUFPLEtBQUssQ0FBQzthQUNoQjs7QUFFRCxnQkFBRyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQzdELHVCQUFPLEtBQUssQ0FBQzthQUNoQjs7QUFFRCxtQkFBTyxJQUFJLENBQUM7U0FDZjs7ZUFuRFEsUUFBUTs7O1lBQVIsUUFBUSxHQUFSLFFBQVEiLCJmaWxlIjoidXRpbHMvdGltZXNwYW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGltZXNwYW4ge1xuICAgIGNvbnN0cnVjdG9yKHRpbWVzcGFuKSB7XG4gICAgICAgIHZhciBob3VycyA9IDA7XG4gICAgICAgIHZhciBtaW51dGVzID0gMDtcbiAgICAgICAgaWYgKHR5cGVvZiB0aW1lc3BhbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudHMgPSB0aW1lc3Bhbi5zcGxpdCgnOicpO1xuICAgICAgICAgICAgaWYgKGZyYWdtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGhvdXJzID0gcGFyc2VJbnQoZnJhZ21lbnRzWzBdLCAxMCk7XG4gICAgICAgICAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KGZyYWdtZW50c1sxXSwgMTApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhvdXJzIDwgMCB8fCBob3VycyA+IDIzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXJzID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA8IDAgfHwgbWludXRlcyA+IDU5KSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgICAgICAgdGhpcy5taW51dGVzID0gbWludXRlcztcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICBpZiAodGhpcy5ob3VycyA8IDEwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJzAnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9IHRoaXMuaG91cnMgKyAnOic7XG5cbiAgICAgICAgaWYgKHRoaXMubWludXRlcyA8IDEwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJzAnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9IHRoaXMubWludXRlcztcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGVxdWFscyhvdGhlcikge1xuICAgICAgICBpZiAob3RoZXIgPT09IHVuZGVmaW5lZCB8fCBvdGhlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5ob3VycyAhPT0gb3RoZXIuaG91cnMgfHwgdGhpcy5taW51dGVzICE9PSBvdGhlci5taW51dGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59Il19