define(['exports', 'aurelia-validation/validation/validate-custom-attribute-view-strategy'], function (exports, _aureliaValidationValidationValidateCustomAttributeViewStrategy) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var TableValidationViewStrategy = (function (_ValidateCustomAttributeViewStrategyBase) {
    function TableValidationViewStrategy() {
      _classCallCheck(this, TableValidationViewStrategy);

      _ValidateCustomAttributeViewStrategyBase.call(this);
      this.helpBlockClass = 'aurelia-validation-message';
    }

    _inherits(TableValidationViewStrategy, _ValidateCustomAttributeViewStrategyBase);

    TableValidationViewStrategy.prototype.searchFormGroup = function searchFormGroup(currentElement, currentDepth) {
      if (currentDepth === 5) {
        return null;
      }
      if (currentElement.classList && currentElement.classList.contains('form-group')) {
        return currentElement;
      }
      return this.searchFormGroup(currentElement.parentNode, 1 + currentDepth);
    };

    TableValidationViewStrategy.prototype.appendMessageToElement = function appendMessageToElement(element, validationProperty) {
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
    };

    TableValidationViewStrategy.prototype.appendUIVisuals = function appendUIVisuals(validationProperty, currentElement) {
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
    };

    TableValidationViewStrategy.prototype.prepareElement = function prepareElement(validationProperty, element) {
      this.appendUIVisuals(null, element);
    };

    TableValidationViewStrategy.prototype.updateElement = function updateElement(validationProperty, element) {
      this.appendUIVisuals(validationProperty, element);
    };

    return TableValidationViewStrategy;
  })(_aureliaValidationValidationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategyBase);

  exports.TableValidationViewStrategy = TableValidationViewStrategy;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7TUFPYSwyQkFBMkI7QUFDM0IsYUFEQSwyQkFBMkIsR0FFdEM7NEJBRlcsMkJBQTJCOztBQUdwQyx5REFBTyxDQUFDO0FBQ1IsVUFBSSxDQUFDLGNBQWMsR0FBRyw0QkFBNEIsQ0FBQztLQUNwRDs7Y0FMVSwyQkFBMkI7O0FBQTNCLCtCQUEyQixXQU90QyxlQUFlLEdBQUEseUJBQUMsY0FBYyxFQUFFLFlBQVksRUFBRTtBQUM1QyxVQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDdEIsZUFBTyxJQUFJLENBQUM7T0FDYjtBQUNELFVBQUksY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUMvRSxlQUFPLGNBQWMsQ0FBQztPQUN2QjtBQUNELGFBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztLQUMxRTs7QUFmVSwrQkFBMkIsV0FpQnRDLHNCQUFzQixHQUFBLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxVQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLFVBQUksU0FBUyxFQUFFO0FBQ2IsWUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDeEIsbUJBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEIsTUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQzNELG1CQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO09BQ0Y7O0FBRUQsVUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNkLGlCQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsaUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFN0MsWUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO0FBQ3ZCLGlCQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pFLE1BQ0k7QUFDSCxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7T0FDRjtBQUNELFVBQUksa0JBQWtCLEVBQUU7QUFDdEIsaUJBQVMsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO0FBQ25ELFlBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUN2QyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ2xDLE1BQU07QUFDTCxtQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ25DO09BQ0YsTUFBTTtBQUNMLGlCQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMsaUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO09BQzVCO0tBQ0Y7O0FBbkRVLCtCQUEyQixXQXFEdEMsZUFBZSxHQUFBLHlCQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUNsRCxVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxVQUFJLFNBQVMsRUFBRTtBQUNiLFlBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQ3BELGNBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQzlCLHFCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDeEMsTUFDSTtBQUNILHFCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDeEM7U0FDRixNQUNJO0FBQ0gsbUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLG1CQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQzs7QUFFRCxZQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7T0FDakU7S0FDRjs7QUF6RVUsK0JBQTJCLFdBMEV0QyxjQUFjLEdBQUEsd0JBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFDO0FBQ3pDLFVBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDOztBQTVFVSwrQkFBMkIsV0E2RXRDLGFBQWEsR0FBQSx1QkFBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUM7QUFDeEMsVUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNuRDs7V0EvRVUsMkJBQTJCO3FFQUZoQyx1Q0FBdUM7O1VBRWxDLDJCQUEyQixHQUEzQiwyQkFBMkIiLCJmaWxlIjoidXRpbHMvdGFibGUtdmFsaWRhdGlvbi12aWV3LXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI0LzE1LlxuICovXG4vL2ltcG9ydCB7VmFsaWRhdGVDdXN0b21BdHRyaWJ1dGVWaWV3U3RyYXRlZ3l9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG4vLyBUT0RPOiBtb3ZlIHRvIHVwcGVyIGltcG9ydCwgYmVjYXVzZSBpdCBzaG91bGQgYmUgZml4ZWQgaW4gbmVhciBjb21taXRcbmltcG9ydCB7VmFsaWRhdGVDdXN0b21BdHRyaWJ1dGVWaWV3U3RyYXRlZ3lCYXNlfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24vdmFsaWRhdGlvbi92YWxpZGF0ZS1jdXN0b20tYXR0cmlidXRlLXZpZXctc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgVGFibGVWYWxpZGF0aW9uVmlld1N0cmF0ZWd5IGV4dGVuZHMgVmFsaWRhdGVDdXN0b21BdHRyaWJ1dGVWaWV3U3RyYXRlZ3lCYXNlIHtcbiAgY29uc3RydWN0b3IoKVxuICB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhlbHBCbG9ja0NsYXNzID0gJ2F1cmVsaWEtdmFsaWRhdGlvbi1tZXNzYWdlJztcbiAgfVxuXG4gIHNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudCwgY3VycmVudERlcHRoKSB7XG4gICAgaWYgKGN1cnJlbnREZXB0aCA9PT0gNSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QgJiYgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWdyb3VwJykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LnBhcmVudE5vZGUsIDEgKyBjdXJyZW50RGVwdGgpO1xuICB9XG5cbiAgYXBwZW5kTWVzc2FnZVRvRWxlbWVudChlbGVtZW50LCB2YWxpZGF0aW9uUHJvcGVydHkpIHtcbiAgICB2YXIgaGVscEJsb2NrID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICBpZiAoaGVscEJsb2NrKSB7XG4gICAgICBpZiAoIWhlbHBCbG9jay5jbGFzc0xpc3QpIHtcbiAgICAgICAgaGVscEJsb2NrID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFoZWxwQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuaGVscEJsb2NrQ2xhc3MpKSB7XG4gICAgICAgIGhlbHBCbG9jayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFoZWxwQmxvY2spIHtcbiAgICAgIGhlbHBCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgaGVscEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hlbHAtYmxvY2snKTtcbiAgICAgIGhlbHBCbG9jay5jbGFzc0xpc3QuYWRkKHRoaXMuaGVscEJsb2NrQ2xhc3MpO1xuXG4gICAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZykge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhlbHBCbG9jaywgZWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhlbHBCbG9jayk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkpIHtcbiAgICAgIGhlbHBCbG9jay50ZXh0Q29udGVudCA9IHZhbGlkYXRpb25Qcm9wZXJ0eS5tZXNzYWdlO1xuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eS5pc1ZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgIGhlbHBCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoZWxwQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGhlbHBCbG9jay50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGFwcGVuZFVJVmlzdWFscyh2YWxpZGF0aW9uUHJvcGVydHksIGN1cnJlbnRFbGVtZW50KSB7XG4gICAgdmFyIGZvcm1Hcm91cCA9IHRoaXMuc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LCAwKTtcbiAgICBpZiAoZm9ybUdyb3VwKSB7XG4gICAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5ICYmIHZhbGlkYXRpb25Qcm9wZXJ0eS5pc0RpcnR5KSB7XG4gICAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkuaXNWYWxpZCkge1xuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtd2FybmluZycpO1xuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdoYXMtc3VjY2VzcycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtc3VjY2VzcycpO1xuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdoYXMtd2FybmluZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy13YXJuaW5nJyk7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtc3VjY2VzcycpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFwcGVuZE1lc3NhZ2VUb0VsZW1lbnQoY3VycmVudEVsZW1lbnQsIHZhbGlkYXRpb25Qcm9wZXJ0eSk7XG4gICAgfVxuICB9XG4gIHByZXBhcmVFbGVtZW50KHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCl7XG4gICAgdGhpcy5hcHBlbmRVSVZpc3VhbHMobnVsbCwgZWxlbWVudCk7XG4gIH1cbiAgdXBkYXRlRWxlbWVudCh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpe1xuICAgIHRoaXMuYXBwZW5kVUlWaXN1YWxzKHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==