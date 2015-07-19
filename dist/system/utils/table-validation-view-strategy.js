System.register(['aurelia-validation/validation/validate-custom-attribute-view-strategy'], function (_export) {
  'use strict';

  var ValidateCustomAttributeViewStrategyBase, TableValidationViewStrategy;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_aureliaValidationValidationValidateCustomAttributeViewStrategy) {
      ValidateCustomAttributeViewStrategyBase = _aureliaValidationValidationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategyBase;
    }],
    execute: function () {
      TableValidationViewStrategy = (function (_ValidateCustomAttributeViewStrategyBase) {
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
      })(ValidateCustomAttributeViewStrategyBase);

      _export('TableValidationViewStrategy', TableValidationViewStrategy);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0NBT2EsMkJBQTJCOzs7Ozs7OztnSEFGaEMsdUNBQXVDOzs7QUFFbEMsaUNBQTJCO0FBQzNCLGlCQURBLDJCQUEyQixHQUV0QztnQ0FGVywyQkFBMkI7O0FBR3BDLDZEQUFPLENBQUM7QUFDUixjQUFJLENBQUMsY0FBYyxHQUFHLDRCQUE0QixDQUFDO1NBQ3BEOztrQkFMVSwyQkFBMkI7O0FBQTNCLG1DQUEyQixXQU90QyxlQUFlLEdBQUEseUJBQUMsY0FBYyxFQUFFLFlBQVksRUFBRTtBQUM1QyxjQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDdEIsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7QUFDRCxjQUFJLGNBQWMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDL0UsbUJBQU8sY0FBYyxDQUFDO1dBQ3ZCO0FBQ0QsaUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztTQUMxRTs7QUFmVSxtQ0FBMkIsV0FpQnRDLHNCQUFzQixHQUFBLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxjQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLGNBQUksU0FBUyxFQUFFO0FBQ2IsZ0JBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0FBQ3hCLHVCQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ2xCLE1BQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtBQUMzRCx1QkFBUyxHQUFHLElBQUksQ0FBQzthQUNsQjtXQUNGOztBQUVELGNBQUksQ0FBQyxTQUFTLEVBQUU7QUFDZCxxQkFBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMscUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLHFCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRTdDLGdCQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDdkIscUJBQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakUsTUFDSTtBQUNILHFCQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztXQUNGO0FBQ0QsY0FBSSxrQkFBa0IsRUFBRTtBQUN0QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7QUFDbkQsZ0JBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUN2Qyx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQ2xDLE1BQU07QUFDTCx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ25DO1dBQ0YsTUFBTTtBQUNMLHFCQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMscUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1dBQzVCO1NBQ0Y7O0FBbkRVLG1DQUEyQixXQXFEdEMsZUFBZSxHQUFBLHlCQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUNsRCxjQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxjQUFJLFNBQVMsRUFBRTtBQUNiLGdCQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtBQUNwRCxrQkFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7QUFDOUIseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLHlCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztlQUN4QyxNQUNJO0FBQ0gseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLHlCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztlQUN4QzthQUNGLE1BQ0k7QUFDSCx1QkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsdUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzNDOztBQUVELGdCQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7V0FDakU7U0FDRjs7QUF6RVUsbUNBQTJCLFdBMEV0QyxjQUFjLEdBQUEsd0JBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFDO0FBQ3pDLGNBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDOztBQTVFVSxtQ0FBMkIsV0E2RXRDLGFBQWEsR0FBQSx1QkFBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUM7QUFDeEMsY0FBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDs7ZUEvRVUsMkJBQTJCO1NBQVMsdUNBQXVDOzs2Q0FBM0UsMkJBQTJCIiwiZmlsZSI6InV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtb3NoZW5za3kgb24gNS8yNC8xNS5cbiAqL1xuLy9pbXBvcnQge1ZhbGlkYXRlQ3VzdG9tQXR0cmlidXRlVmlld1N0cmF0ZWd5fSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xuLy8gVE9ETzogbW92ZSB0byB1cHBlciBpbXBvcnQsIGJlY2F1c2UgaXQgc2hvdWxkIGJlIGZpeGVkIGluIG5lYXIgY29tbWl0XG5pbXBvcnQge1ZhbGlkYXRlQ3VzdG9tQXR0cmlidXRlVmlld1N0cmF0ZWd5QmFzZX0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uL3ZhbGlkYXRpb24vdmFsaWRhdGUtY3VzdG9tLWF0dHJpYnV0ZS12aWV3LXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIFRhYmxlVmFsaWRhdGlvblZpZXdTdHJhdGVneSBleHRlbmRzIFZhbGlkYXRlQ3VzdG9tQXR0cmlidXRlVmlld1N0cmF0ZWd5QmFzZSB7XG4gIGNvbnN0cnVjdG9yKClcbiAge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oZWxwQmxvY2tDbGFzcyA9ICdhdXJlbGlhLXZhbGlkYXRpb24tbWVzc2FnZSc7XG4gIH1cblxuICBzZWFyY2hGb3JtR3JvdXAoY3VycmVudEVsZW1lbnQsIGN1cnJlbnREZXB0aCkge1xuICAgIGlmIChjdXJyZW50RGVwdGggPT09IDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0ICYmIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1ncm91cCcpKSB7XG4gICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlLCAxICsgY3VycmVudERlcHRoKTtcbiAgfVxuXG4gIGFwcGVuZE1lc3NhZ2VUb0VsZW1lbnQoZWxlbWVudCwgdmFsaWRhdGlvblByb3BlcnR5KSB7XG4gICAgdmFyIGhlbHBCbG9jayA9IGVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgaWYgKGhlbHBCbG9jaykge1xuICAgICAgaWYgKCFoZWxwQmxvY2suY2xhc3NMaXN0KSB7XG4gICAgICAgIGhlbHBCbG9jayA9IG51bGw7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaGVscEJsb2NrLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmhlbHBCbG9ja0NsYXNzKSkge1xuICAgICAgICBoZWxwQmxvY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGVscEJsb2NrKSB7XG4gICAgICBoZWxwQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGhlbHBCbG9jay5jbGFzc0xpc3QuYWRkKCdoZWxwLWJsb2NrJyk7XG4gICAgICBoZWxwQmxvY2suY2xhc3NMaXN0LmFkZCh0aGlzLmhlbHBCbG9ja0NsYXNzKTtcblxuICAgICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShoZWxwQmxvY2ssIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoZWxwQmxvY2spO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5KSB7XG4gICAgICBoZWxwQmxvY2sudGV4dENvbnRlbnQgPSB2YWxpZGF0aW9uUHJvcGVydHkubWVzc2FnZTtcbiAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkuaXNWYWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBoZWxwQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlbHBCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBoZWxwQmxvY2sudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICBhcHBlbmRVSVZpc3VhbHModmFsaWRhdGlvblByb3BlcnR5LCBjdXJyZW50RWxlbWVudCkge1xuICAgIHZhciBmb3JtR3JvdXAgPSB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudCwgMCk7XG4gICAgaWYgKGZvcm1Hcm91cCkge1xuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eSAmJiB2YWxpZGF0aW9uUHJvcGVydHkuaXNEaXJ0eSkge1xuICAgICAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5LmlzVmFsaWQpIHtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXdhcm5pbmcnKTtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXdhcm5pbmcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtd2FybmluZycpO1xuICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcHBlbmRNZXNzYWdlVG9FbGVtZW50KGN1cnJlbnRFbGVtZW50LCB2YWxpZGF0aW9uUHJvcGVydHkpO1xuICAgIH1cbiAgfVxuICBwcmVwYXJlRWxlbWVudCh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpe1xuICAgIHRoaXMuYXBwZW5kVUlWaXN1YWxzKG51bGwsIGVsZW1lbnQpO1xuICB9XG4gIHVwZGF0ZUVsZW1lbnQodmFsaWRhdGlvblByb3BlcnR5LCBlbGVtZW50KXtcbiAgICB0aGlzLmFwcGVuZFVJVmlzdWFscyh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpO1xuICB9XG59XG4iXX0=