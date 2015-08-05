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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RpbWVzcGFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQUFhLFFBQVE7Ozs7Ozs7QUFBUixvQkFBUTtBQUNOLHlCQURGLFFBQVEsQ0FDTCxRQUFRLEVBQUU7MENBRGIsUUFBUTs7QUFFYix3QkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2Qsd0JBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQix3QkFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDOUIsNEJBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEMsNEJBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDdkIsaUNBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLG1DQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFckMsZ0NBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO0FBQ3pCLHFDQUFLLEdBQUcsQ0FBQyxDQUFDOzZCQUNiOztBQUVELGdDQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLEVBQUUsRUFBRTtBQUM3Qix1Q0FBTyxHQUFHLENBQUMsQ0FBQzs2QkFDZjt5QkFDSjtxQkFDSjs7QUFFRCx3QkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2lCQUMxQjs7QUF0QlEsd0JBQVEsV0F3QmpCLFFBQVEsR0FBQSxvQkFBRztBQUNQLHdCQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsd0JBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDakIsOEJBQU0sSUFBSSxHQUFHLENBQUM7cUJBQ2pCOztBQUVELDBCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7O0FBRTNCLHdCQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0FBQ25CLDhCQUFNLElBQUksR0FBRyxDQUFDO3FCQUNqQjs7QUFFRCwwQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7O0FBRXZCLDJCQUFPLE1BQU0sQ0FBQztpQkFDakI7O0FBdkNRLHdCQUFRLFdBeUNqQixNQUFNLEdBQUEsZ0JBQUMsS0FBSyxFQUFFO0FBQ1Ysd0JBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3ZDLCtCQUFPLEtBQUssQ0FBQztxQkFDaEI7O0FBRUQsd0JBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUM3RCwrQkFBTyxLQUFLLENBQUM7cUJBQ2hCOztBQUVELDJCQUFPLElBQUksQ0FBQztpQkFDZjs7dUJBbkRRLFFBQVEiLCJmaWxlIjoidXRpbHMvdGltZXNwYW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGltZXNwYW4ge1xyXG4gICAgY29uc3RydWN0b3IodGltZXNwYW4pIHtcclxuICAgICAgICB2YXIgaG91cnMgPSAwO1xyXG4gICAgICAgIHZhciBtaW51dGVzID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIHRpbWVzcGFuID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB2YXIgZnJhZ21lbnRzID0gdGltZXNwYW4uc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgaWYgKGZyYWdtZW50cy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgICAgaG91cnMgPSBwYXJzZUludChmcmFnbWVudHNbMF0sIDEwKTtcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChmcmFnbWVudHNbMV0sIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPCAwIHx8IGhvdXJzID4gMjMpIHtcclxuICAgICAgICAgICAgICAgICAgICBob3VycyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhvdXJzID0gaG91cnM7XHJcbiAgICAgICAgdGhpcy5taW51dGVzID0gbWludXRlcztcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuaG91cnMgPCAxMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ICs9IHRoaXMuaG91cnMgKyAnOic7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1pbnV0ZXMgPCAxMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ICs9IHRoaXMubWludXRlcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBlcXVhbHMob3RoZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIgPT09IHVuZGVmaW5lZCB8fCBvdGhlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmhvdXJzICE9PSBvdGhlci5ob3VycyB8fCB0aGlzLm1pbnV0ZXMgIT09IG90aGVyLm1pbnV0ZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iXX0=