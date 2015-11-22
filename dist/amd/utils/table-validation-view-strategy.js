define(['exports', 'aurelia-validation'], function (exports, _aureliaValidation) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var TableValidationViewStrategy = (function (_ValidationViewStrategy) {
    function TableValidationViewStrategy() {
      _classCallCheck(this, TableValidationViewStrategy);

      _get(Object.getPrototypeOf(TableValidationViewStrategy.prototype), 'constructor', this).call(this);
      this.helpBlockClass = 'aurelia-validation-message';
    }

    _inherits(TableValidationViewStrategy, _ValidationViewStrategy);

    _createClass(TableValidationViewStrategy, [{
      key: 'searchFormGroup',
      value: function searchFormGroup(currentElement, currentDepth) {
        if (currentDepth === 5) {
          return null;
        }
        if (currentElement.classList && currentElement.classList.contains('form-group')) {
          return currentElement;
        }
        return this.searchFormGroup(currentElement.parentNode, 1 + currentDepth);
      }
    }, {
      key: 'appendMessageToElement',
      value: function appendMessageToElement(element, validationProperty) {
        var helpBlock = element.nextSibling;
        if (helpBlock) {
          if (!helpBlock.classList) {
            helpBlock = null;
          } else if (!helpBlock.classList.contains(this.helpBlockClass)) {
            helpBlock = null;
          }
        }

        if (!helpBlock) {
          helpBlock = document.createElement('p');
          helpBlock.classList.add('help-block');
          helpBlock.classList.add(this.helpBlockClass);

          if (element.nextSibling) {
            element.parentNode.insertBefore(helpBlock, element.nextSibling);
          } else {
            element.parentNode.appendChild(helpBlock);
          }
        }
        if (validationProperty) {
          helpBlock.textContent = validationProperty.message;
          if (validationProperty.isValid === true) {
            helpBlock.style.display = 'none';
          } else {
            helpBlock.style.display = 'block';
          }
        } else {
          helpBlock.style.display = 'none';
          helpBlock.textContent = '';
        }
      }
    }, {
      key: 'appendUIVisuals',
      value: function appendUIVisuals(validationProperty, currentElement) {
        var formGroup = this.searchFormGroup(currentElement, 0);
        if (formGroup) {
          if (validationProperty && validationProperty.isDirty) {
            if (validationProperty.isValid) {
              formGroup.classList.remove('has-warning');
              formGroup.classList.add('has-success');
            } else {
              formGroup.classList.remove('has-success');
              formGroup.classList.add('has-warning');
            }
          } else {
            formGroup.classList.remove('has-warning');
            formGroup.classList.remove('has-success');
          }

          this.appendMessageToElement(currentElement, validationProperty);
        }
      }
    }, {
      key: 'prepareElement',
      value: function prepareElement(validationProperty, element) {
        this.appendUIVisuals(null, element);
      }
    }, {
      key: 'updateElement',
      value: function updateElement(validationProperty, element) {
        this.appendUIVisuals(validationProperty, element);
      }
    }]);

    return TableValidationViewStrategy;
  })(_aureliaValidation.ValidationViewStrategy);

  exports.TableValidationViewStrategy = TableValidationViewStrategy;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFPYSwyQkFBMkI7QUFDM0IsYUFEQSwyQkFBMkIsR0FDeEI7NEJBREgsMkJBQTJCOztBQUVwQyxpQ0FGUywyQkFBMkIsNkNBRTVCO0FBQ1IsVUFBSSxDQUFDLGNBQWMsR0FBRyw0QkFBNEIsQ0FBQztLQUNwRDs7Y0FKVSwyQkFBMkI7O2lCQUEzQiwyQkFBMkI7O2FBTXZCLHlCQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUU7QUFDNUMsWUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO0FBQ3RCLGlCQUFPLElBQUksQ0FBQztTQUNiO0FBQ0QsWUFBSSxjQUFjLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO0FBQy9FLGlCQUFPLGNBQWMsQ0FBQztTQUN2QjtBQUNELGVBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztPQUMxRTs7O2FBRXFCLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxZQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLFlBQUksU0FBUyxFQUFFO0FBQ2IsY0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDeEIscUJBQVMsR0FBRyxJQUFJLENBQUM7V0FDbEIsTUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQzNELHFCQUFTLEdBQUcsSUFBSSxDQUFDO1dBQ2xCO1NBQ0Y7O0FBRUQsWUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNkLG1CQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsbUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFN0MsY0FBSSxPQUFPLENBQUMsV0FBVyxFQUFFO0FBQ3ZCLG1CQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1dBQ2pFLE1BQ0k7QUFDSCxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7V0FDM0M7U0FDRjtBQUNELFlBQUksa0JBQWtCLEVBQUU7QUFDdEIsbUJBQVMsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO0FBQ25ELGNBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUN2QyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1dBQ2xDLE1BQU07QUFDTCxxQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1dBQ25DO1NBQ0YsTUFBTTtBQUNMLG1CQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMsbUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQzVCO09BQ0Y7OzthQUVjLHlCQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUNsRCxZQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxZQUFJLFNBQVMsRUFBRTtBQUNiLGNBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQ3BELGdCQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtBQUM5Qix1QkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsdUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3hDLE1BQ0k7QUFDSCx1QkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsdUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3hDO1dBQ0YsTUFDSTtBQUNILHFCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDM0M7O0FBRUQsY0FBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2pFO09BQ0Y7OzthQUVhLHdCQUFDLGtCQUFrQixFQUFFLE9BQU8sRUFBRTtBQUMxQyxZQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztPQUNyQzs7O2FBRVksdUJBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFO0FBQ3pDLFlBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDbkQ7OztXQWhGVSwyQkFBMkI7d0JBRmhDLHNCQUFzQjs7VUFFakIsMkJBQTJCLEdBQTNCLDJCQUEyQiIsImZpbGUiOiJ1dGlscy90YWJsZS12YWxpZGF0aW9uLXZpZXctc3RyYXRlZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbW9zaGVuc2t5IG9uIDUvMjQvMTUuXG4gKi9cbi8vaW1wb3J0IHtWYWxpZGF0ZUN1c3RvbUF0dHJpYnV0ZVZpZXdTdHJhdGVneX0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcbi8vIFRPRE86IG1vdmUgdG8gdXBwZXIgaW1wb3J0LCBiZWNhdXNlIGl0IHNob3VsZCBiZSBmaXhlZCBpbiBuZWFyIGNvbW1pdFxuaW1wb3J0IHtWYWxpZGF0aW9uVmlld1N0cmF0ZWd5fSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nOy8vL3ZhbGlkYXRlLWN1c3RvbS1hdHRyaWJ1dGUtdmlldy1zdHJhdGVneSc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVZhbGlkYXRpb25WaWV3U3RyYXRlZ3kgZXh0ZW5kcyBWYWxpZGF0aW9uVmlld1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhlbHBCbG9ja0NsYXNzID0gJ2F1cmVsaWEtdmFsaWRhdGlvbi1tZXNzYWdlJztcbiAgfVxuXG4gIHNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudCwgY3VycmVudERlcHRoKSB7XG4gICAgaWYgKGN1cnJlbnREZXB0aCA9PT0gNSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QgJiYgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWdyb3VwJykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LnBhcmVudE5vZGUsIDEgKyBjdXJyZW50RGVwdGgpO1xuICB9XG5cbiAgYXBwZW5kTWVzc2FnZVRvRWxlbWVudChlbGVtZW50LCB2YWxpZGF0aW9uUHJvcGVydHkpIHtcbiAgICB2YXIgaGVscEJsb2NrID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICBpZiAoaGVscEJsb2NrKSB7XG4gICAgICBpZiAoIWhlbHBCbG9jay5jbGFzc0xpc3QpIHtcbiAgICAgICAgaGVscEJsb2NrID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFoZWxwQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuaGVscEJsb2NrQ2xhc3MpKSB7XG4gICAgICAgIGhlbHBCbG9jayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFoZWxwQmxvY2spIHtcbiAgICAgIGhlbHBCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgaGVscEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hlbHAtYmxvY2snKTtcbiAgICAgIGhlbHBCbG9jay5jbGFzc0xpc3QuYWRkKHRoaXMuaGVscEJsb2NrQ2xhc3MpO1xuXG4gICAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZykge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhlbHBCbG9jaywgZWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhlbHBCbG9jayk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkpIHtcbiAgICAgIGhlbHBCbG9jay50ZXh0Q29udGVudCA9IHZhbGlkYXRpb25Qcm9wZXJ0eS5tZXNzYWdlO1xuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eS5pc1ZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgIGhlbHBCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoZWxwQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGhlbHBCbG9jay50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGFwcGVuZFVJVmlzdWFscyh2YWxpZGF0aW9uUHJvcGVydHksIGN1cnJlbnRFbGVtZW50KSB7XG4gICAgdmFyIGZvcm1Hcm91cCA9IHRoaXMuc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LCAwKTtcbiAgICBpZiAoZm9ybUdyb3VwKSB7XG4gICAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5ICYmIHZhbGlkYXRpb25Qcm9wZXJ0eS5pc0RpcnR5KSB7XG4gICAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkuaXNWYWxpZCkge1xuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtd2FybmluZycpO1xuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdoYXMtc3VjY2VzcycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtc3VjY2VzcycpO1xuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdoYXMtd2FybmluZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy13YXJuaW5nJyk7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtc3VjY2VzcycpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFwcGVuZE1lc3NhZ2VUb0VsZW1lbnQoY3VycmVudEVsZW1lbnQsIHZhbGlkYXRpb25Qcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZUVsZW1lbnQodmFsaWRhdGlvblByb3BlcnR5LCBlbGVtZW50KSB7XG4gICAgdGhpcy5hcHBlbmRVSVZpc3VhbHMobnVsbCwgZWxlbWVudCk7XG4gIH1cblxuICB1cGRhdGVFbGVtZW50KHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCkge1xuICAgIHRoaXMuYXBwZW5kVUlWaXN1YWxzKHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==