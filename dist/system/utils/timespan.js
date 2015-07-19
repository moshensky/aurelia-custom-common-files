System.register([], function (_export) {
    'use strict';

    var Timespan;

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

            _export('Timespan', Timespan);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RpbWVzcGFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQUFhLFFBQVE7Ozs7Ozs7QUFBUixvQkFBUTtBQUNOLHlCQURGLFFBQVEsQ0FDTCxRQUFRLEVBQUU7MENBRGIsUUFBUTs7QUFFYix3QkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2Qsd0JBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQix3QkFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDOUIsNEJBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEMsNEJBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDdkIsaUNBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLG1DQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFckMsZ0NBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO0FBQ3pCLHFDQUFLLEdBQUcsQ0FBQyxDQUFDOzZCQUNiOztBQUVELGdDQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLEVBQUUsRUFBRTtBQUM3Qix1Q0FBTyxHQUFHLENBQUMsQ0FBQzs2QkFDZjt5QkFDSjtxQkFDSjs7QUFFRCx3QkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2lCQUMxQjs7QUF0QlEsd0JBQVEsV0F3QmpCLFFBQVEsR0FBQSxvQkFBRztBQUNQLHdCQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsd0JBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDakIsOEJBQU0sSUFBSSxHQUFHLENBQUM7cUJBQ2pCOztBQUVELDBCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7O0FBRTNCLHdCQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0FBQ25CLDhCQUFNLElBQUksR0FBRyxDQUFDO3FCQUNqQjs7QUFFRCwwQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7O0FBRXZCLDJCQUFPLE1BQU0sQ0FBQztpQkFDakI7O0FBdkNRLHdCQUFRLFdBeUNqQixNQUFNLEdBQUEsZ0JBQUMsS0FBSyxFQUFFO0FBQ1Ysd0JBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3ZDLCtCQUFPLEtBQUssQ0FBQztxQkFDaEI7O0FBRUQsd0JBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUM3RCwrQkFBTyxLQUFLLENBQUM7cUJBQ2hCOztBQUVELDJCQUFPLElBQUksQ0FBQztpQkFDZjs7dUJBbkRRLFFBQVE7OztnQ0FBUixRQUFRIiwiZmlsZSI6InV0aWxzL3RpbWVzcGFuLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpbWVzcGFuIHtcbiAgICBjb25zdHJ1Y3Rvcih0aW1lc3Bhbikge1xuICAgICAgICB2YXIgaG91cnMgPSAwO1xuICAgICAgICB2YXIgbWludXRlcyA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgdGltZXNwYW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnRzID0gdGltZXNwYW4uc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlmIChmcmFnbWVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICBob3VycyA9IHBhcnNlSW50KGZyYWdtZW50c1swXSwgMTApO1xuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChmcmFnbWVudHNbMV0sIDEwKTtcblxuICAgICAgICAgICAgICAgIGlmIChob3VycyA8IDAgfHwgaG91cnMgPiAyMykge1xuICAgICAgICAgICAgICAgICAgICBob3VycyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gICAgICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKHRoaXMuaG91cnMgPCAxMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSB0aGlzLmhvdXJzICsgJzonO1xuXG4gICAgICAgIGlmICh0aGlzLm1pbnV0ZXMgPCAxMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSB0aGlzLm1pbnV0ZXM7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgaWYgKG90aGVyID09PSB1bmRlZmluZWQgfHwgb3RoZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaG91cnMgIT09IG90aGVyLmhvdXJzIHx8IHRoaXMubWludXRlcyAhPT0gb3RoZXIubWludXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSJdfQ==