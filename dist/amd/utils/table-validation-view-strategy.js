define(['exports', 'aurelia-validation'], function (exports, _aureliaValidation) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var TableValidationViewStrategy = (function (_ValidationViewStrategy) {
    function TableValidationViewStrategy() {
      _classCallCheck(this, TableValidationViewStrategy);

      _ValidationViewStrategy.call(this);
      this.helpBlockClass = 'aurelia-validation-message';
    }

    _inherits(TableValidationViewStrategy, _ValidationViewStrategy);

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
  })(_aureliaValidation.ValidationViewStrategy);

  exports.TableValidationViewStrategy = TableValidationViewStrategy;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7TUFPYSwyQkFBMkI7QUFDM0IsYUFEQSwyQkFBMkIsR0FDeEI7NEJBREgsMkJBQTJCOztBQUVwQyx3Q0FBTyxDQUFDO0FBQ1IsVUFBSSxDQUFDLGNBQWMsR0FBRyw0QkFBNEIsQ0FBQztLQUNwRDs7Y0FKVSwyQkFBMkI7O0FBQTNCLCtCQUEyQixXQU10QyxlQUFlLEdBQUEseUJBQUMsY0FBYyxFQUFFLFlBQVksRUFBRTtBQUM1QyxVQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDdEIsZUFBTyxJQUFJLENBQUM7T0FDYjtBQUNELFVBQUksY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUMvRSxlQUFPLGNBQWMsQ0FBQztPQUN2QjtBQUNELGFBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztLQUMxRTs7QUFkVSwrQkFBMkIsV0FnQnRDLHNCQUFzQixHQUFBLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxVQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLFVBQUksU0FBUyxFQUFFO0FBQ2IsWUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDeEIsbUJBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEIsTUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQzNELG1CQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO09BQ0Y7O0FBRUQsVUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNkLGlCQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsaUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFN0MsWUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO0FBQ3ZCLGlCQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pFLE1BQ0k7QUFDSCxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7T0FDRjtBQUNELFVBQUksa0JBQWtCLEVBQUU7QUFDdEIsaUJBQVMsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO0FBQ25ELFlBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUN2QyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ2xDLE1BQU07QUFDTCxtQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ25DO09BQ0YsTUFBTTtBQUNMLGlCQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMsaUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO09BQzVCO0tBQ0Y7O0FBbERVLCtCQUEyQixXQW9EdEMsZUFBZSxHQUFBLHlCQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUNsRCxVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxVQUFJLFNBQVMsRUFBRTtBQUNiLFlBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQ3BELGNBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQzlCLHFCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDeEMsTUFDSTtBQUNILHFCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDeEM7U0FDRixNQUNJO0FBQ0gsbUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLG1CQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQzs7QUFFRCxZQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7T0FDakU7S0FDRjs7QUF4RVUsK0JBQTJCLFdBMEV0QyxjQUFjLEdBQUEsd0JBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFO0FBQzFDLFVBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDOztBQTVFVSwrQkFBMkIsV0E4RXRDLGFBQWEsR0FBQSx1QkFBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUU7QUFDekMsVUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNuRDs7V0FoRlUsMkJBQTJCO3dCQUZoQyxzQkFBc0I7O1VBRWpCLDJCQUEyQixHQUEzQiwyQkFBMkIiLCJmaWxlIjoidXRpbHMvdGFibGUtdmFsaWRhdGlvbi12aWV3LXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI0LzE1LlxuICovXG4vL2ltcG9ydCB7VmFsaWRhdGVDdXN0b21BdHRyaWJ1dGVWaWV3U3RyYXRlZ3l9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG4vLyBUT0RPOiBtb3ZlIHRvIHVwcGVyIGltcG9ydCwgYmVjYXVzZSBpdCBzaG91bGQgYmUgZml4ZWQgaW4gbmVhciBjb21taXRcbmltcG9ydCB7VmFsaWRhdGlvblZpZXdTdHJhdGVneX0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJzsvLy92YWxpZGF0ZS1jdXN0b20tYXR0cmlidXRlLXZpZXctc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgVGFibGVWYWxpZGF0aW9uVmlld1N0cmF0ZWd5IGV4dGVuZHMgVmFsaWRhdGlvblZpZXdTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oZWxwQmxvY2tDbGFzcyA9ICdhdXJlbGlhLXZhbGlkYXRpb24tbWVzc2FnZSc7XG4gIH1cblxuICBzZWFyY2hGb3JtR3JvdXAoY3VycmVudEVsZW1lbnQsIGN1cnJlbnREZXB0aCkge1xuICAgIGlmIChjdXJyZW50RGVwdGggPT09IDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0ICYmIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1ncm91cCcpKSB7XG4gICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlLCAxICsgY3VycmVudERlcHRoKTtcbiAgfVxuXG4gIGFwcGVuZE1lc3NhZ2VUb0VsZW1lbnQoZWxlbWVudCwgdmFsaWRhdGlvblByb3BlcnR5KSB7XG4gICAgdmFyIGhlbHBCbG9jayA9IGVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgaWYgKGhlbHBCbG9jaykge1xuICAgICAgaWYgKCFoZWxwQmxvY2suY2xhc3NMaXN0KSB7XG4gICAgICAgIGhlbHBCbG9jayA9IG51bGw7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaGVscEJsb2NrLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmhlbHBCbG9ja0NsYXNzKSkge1xuICAgICAgICBoZWxwQmxvY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGVscEJsb2NrKSB7XG4gICAgICBoZWxwQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGhlbHBCbG9jay5jbGFzc0xpc3QuYWRkKCdoZWxwLWJsb2NrJyk7XG4gICAgICBoZWxwQmxvY2suY2xhc3NMaXN0LmFkZCh0aGlzLmhlbHBCbG9ja0NsYXNzKTtcblxuICAgICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShoZWxwQmxvY2ssIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoZWxwQmxvY2spO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5KSB7XG4gICAgICBoZWxwQmxvY2sudGV4dENvbnRlbnQgPSB2YWxpZGF0aW9uUHJvcGVydHkubWVzc2FnZTtcbiAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkuaXNWYWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBoZWxwQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlbHBCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBoZWxwQmxvY2sudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICBhcHBlbmRVSVZpc3VhbHModmFsaWRhdGlvblByb3BlcnR5LCBjdXJyZW50RWxlbWVudCkge1xuICAgIHZhciBmb3JtR3JvdXAgPSB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudCwgMCk7XG4gICAgaWYgKGZvcm1Hcm91cCkge1xuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eSAmJiB2YWxpZGF0aW9uUHJvcGVydHkuaXNEaXJ0eSkge1xuICAgICAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5LmlzVmFsaWQpIHtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXdhcm5pbmcnKTtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXdhcm5pbmcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtd2FybmluZycpO1xuICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcHBlbmRNZXNzYWdlVG9FbGVtZW50KGN1cnJlbnRFbGVtZW50LCB2YWxpZGF0aW9uUHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVFbGVtZW50KHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCkge1xuICAgIHRoaXMuYXBwZW5kVUlWaXN1YWxzKG51bGwsIGVsZW1lbnQpO1xuICB9XG5cbiAgdXBkYXRlRWxlbWVudCh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcGVuZFVJVmlzdWFscyh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpO1xuICB9XG59XG4iXX0=