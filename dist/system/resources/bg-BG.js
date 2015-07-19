System.register([], function (_export) {
  'use strict';

  var data;
  return {
    setters: [],
    execute: function () {
      data = {
        messages: {
          sessionTimedOut: 'Сесията Ви е изтекла!',
          accessDenied: 'Отказан достъп!',
          internalServerError: 'Грешка на сървъра!',
          requestTimeout: 'Времето за заявката изтече!',
          notAuthorized: 'Отказан достъп!',
          pleaseLogin: 'Моля влезте в системата!'
        }
      };

      _export('data', data);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9iZy1CRy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBVyxJQUFJOzs7O0FBQUosVUFBSSxHQUFHO0FBQ2hCLGdCQUFRLEVBQUU7QUFDUix5QkFBZSxFQUFFLHVCQUF1QjtBQUN4QyxzQkFBWSxFQUFFLGlCQUFpQjtBQUMvQiw2QkFBbUIsRUFBRSxvQkFBb0I7QUFDekMsd0JBQWMsRUFBRSw2QkFBNkI7QUFDN0MsdUJBQWEsRUFBRSxpQkFBaUI7QUFDaEMscUJBQVcsRUFBRSwwQkFBMEI7U0FDeEM7T0FDRjs7c0JBVFUsSUFBSSIsImZpbGUiOiJyZXNvdXJjZXMvYmctQkcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IGRhdGEgPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgc2Vzc2lvblRpbWVkT3V0OiAn0KHQtdGB0LjRj9GC0LAg0JLQuCDQtSDQuNC30YLQtdC60LvQsCEnLFxuICAgIGFjY2Vzc0RlbmllZDogJ9Ce0YLQutCw0LfQsNC9INC00L7RgdGC0YrQvyEnLFxuICAgIGludGVybmFsU2VydmVyRXJyb3I6ICfQk9GA0LXRiNC60LAg0L3QsCDRgdGK0YDQstGK0YDQsCEnLFxuICAgIHJlcXVlc3RUaW1lb3V0OiAn0JLRgNC10LzQtdGC0L4g0LfQsCDQt9Cw0Y/QstC60LDRgtCwINC40LfRgtC10YfQtSEnLFxuICAgIG5vdEF1dGhvcml6ZWQ6ICfQntGC0LrQsNC30LDQvSDQtNC+0YHRgtGK0L8hJyxcbiAgICBwbGVhc2VMb2dpbjogJ9Cc0L7Qu9GPINCy0LvQtdC30YLQtSDQsiDRgdC40YHRgtC10LzQsNGC0LAhJ1xuICB9XG59O1xuIl19