System.register(['aurelia-validation'], function (_export) {
  'use strict';

  var ValidationViewStrategy, TableValidationViewStrategy;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_aureliaValidation) {
      ValidationViewStrategy = _aureliaValidation.ValidationViewStrategy;
    }],
    execute: function () {
      TableValidationViewStrategy = (function (_ValidationViewStrategy) {
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
      })(ValidationViewStrategy);

      _export('TableValidationViewStrategy', TableValidationViewStrategy);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OEJBT2EsMkJBQTJCOzs7Ozs7OztrREFGaEMsc0JBQXNCOzs7QUFFakIsaUNBQTJCO0FBQzNCLGlCQURBLDJCQUEyQixHQUN4QjtnQ0FESCwyQkFBMkI7O0FBRXBDLDRDQUFPLENBQUM7QUFDUixjQUFJLENBQUMsY0FBYyxHQUFHLDRCQUE0QixDQUFDO1NBQ3BEOztrQkFKVSwyQkFBMkI7O0FBQTNCLG1DQUEyQixXQU10QyxlQUFlLEdBQUEseUJBQUMsY0FBYyxFQUFFLFlBQVksRUFBRTtBQUM1QyxjQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDdEIsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7QUFDRCxjQUFJLGNBQWMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDL0UsbUJBQU8sY0FBYyxDQUFDO1dBQ3ZCO0FBQ0QsaUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztTQUMxRTs7QUFkVSxtQ0FBMkIsV0FnQnRDLHNCQUFzQixHQUFBLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxjQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLGNBQUksU0FBUyxFQUFFO0FBQ2IsZ0JBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0FBQ3hCLHVCQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ2xCLE1BQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtBQUMzRCx1QkFBUyxHQUFHLElBQUksQ0FBQzthQUNsQjtXQUNGOztBQUVELGNBQUksQ0FBQyxTQUFTLEVBQUU7QUFDZCxxQkFBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMscUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLHFCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRTdDLGdCQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDdkIscUJBQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakUsTUFDSTtBQUNILHFCQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztXQUNGO0FBQ0QsY0FBSSxrQkFBa0IsRUFBRTtBQUN0QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7QUFDbkQsZ0JBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUN2Qyx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQ2xDLE1BQU07QUFDTCx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ25DO1dBQ0YsTUFBTTtBQUNMLHFCQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMscUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1dBQzVCO1NBQ0Y7O0FBbERVLG1DQUEyQixXQW9EdEMsZUFBZSxHQUFBLHlCQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUNsRCxjQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxjQUFJLFNBQVMsRUFBRTtBQUNiLGdCQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtBQUNwRCxrQkFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7QUFDOUIseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLHlCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztlQUN4QyxNQUNJO0FBQ0gseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLHlCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztlQUN4QzthQUNGLE1BQ0k7QUFDSCx1QkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsdUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzNDOztBQUVELGdCQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7V0FDakU7U0FDRjs7QUF4RVUsbUNBQTJCLFdBMEV0QyxjQUFjLEdBQUEsd0JBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFO0FBQzFDLGNBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDOztBQTVFVSxtQ0FBMkIsV0E4RXRDLGFBQWEsR0FBQSx1QkFBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUU7QUFDekMsY0FBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDs7ZUFoRlUsMkJBQTJCO1NBQVMsc0JBQXNCOzs2Q0FBMUQsMkJBQTJCIiwiZmlsZSI6InV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtb3NoZW5za3kgb24gNS8yNC8xNS5cbiAqL1xuLy9pbXBvcnQge1ZhbGlkYXRlQ3VzdG9tQXR0cmlidXRlVmlld1N0cmF0ZWd5fSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xuLy8gVE9ETzogbW92ZSB0byB1cHBlciBpbXBvcnQsIGJlY2F1c2UgaXQgc2hvdWxkIGJlIGZpeGVkIGluIG5lYXIgY29tbWl0XG5pbXBvcnQge1ZhbGlkYXRpb25WaWV3U3RyYXRlZ3l9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7Ly8vdmFsaWRhdGUtY3VzdG9tLWF0dHJpYnV0ZS12aWV3LXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIFRhYmxlVmFsaWRhdGlvblZpZXdTdHJhdGVneSBleHRlbmRzIFZhbGlkYXRpb25WaWV3U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGVscEJsb2NrQ2xhc3MgPSAnYXVyZWxpYS12YWxpZGF0aW9uLW1lc3NhZ2UnO1xuICB9XG5cbiAgc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RGVwdGgpIHtcbiAgICBpZiAoY3VycmVudERlcHRoID09PSA1KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdCAmJiBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tZ3JvdXAnKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWFyY2hGb3JtR3JvdXAoY3VycmVudEVsZW1lbnQucGFyZW50Tm9kZSwgMSArIGN1cnJlbnREZXB0aCk7XG4gIH1cblxuICBhcHBlbmRNZXNzYWdlVG9FbGVtZW50KGVsZW1lbnQsIHZhbGlkYXRpb25Qcm9wZXJ0eSkge1xuICAgIHZhciBoZWxwQmxvY2sgPSBlbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgIGlmIChoZWxwQmxvY2spIHtcbiAgICAgIGlmICghaGVscEJsb2NrLmNsYXNzTGlzdCkge1xuICAgICAgICBoZWxwQmxvY2sgPSBudWxsO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWhlbHBCbG9jay5jbGFzc0xpc3QuY29udGFpbnModGhpcy5oZWxwQmxvY2tDbGFzcykpIHtcbiAgICAgICAgaGVscEJsb2NrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhlbHBCbG9jaykge1xuICAgICAgaGVscEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBoZWxwQmxvY2suY2xhc3NMaXN0LmFkZCgnaGVscC1ibG9jaycpO1xuICAgICAgaGVscEJsb2NrLmNsYXNzTGlzdC5hZGQodGhpcy5oZWxwQmxvY2tDbGFzcyk7XG5cbiAgICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaGVscEJsb2NrLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaGVscEJsb2NrKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eSkge1xuICAgICAgaGVscEJsb2NrLnRleHRDb250ZW50ID0gdmFsaWRhdGlvblByb3BlcnR5Lm1lc3NhZ2U7XG4gICAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5LmlzVmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWxwQmxvY2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlbHBCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgaGVscEJsb2NrLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgYXBwZW5kVUlWaXN1YWxzKHZhbGlkYXRpb25Qcm9wZXJ0eSwgY3VycmVudEVsZW1lbnQpIHtcbiAgICB2YXIgZm9ybUdyb3VwID0gdGhpcy5zZWFyY2hGb3JtR3JvdXAoY3VycmVudEVsZW1lbnQsIDApO1xuICAgIGlmIChmb3JtR3JvdXApIHtcbiAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkgJiYgdmFsaWRhdGlvblByb3BlcnR5LmlzRGlydHkpIHtcbiAgICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eS5pc1ZhbGlkKSB7XG4gICAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy13YXJuaW5nJyk7XG4gICAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2hhcy1zdWNjZXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1zdWNjZXNzJyk7XG4gICAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2hhcy13YXJuaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXdhcm5pbmcnKTtcbiAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1zdWNjZXNzJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBwZW5kTWVzc2FnZVRvRWxlbWVudChjdXJyZW50RWxlbWVudCwgdmFsaWRhdGlvblByb3BlcnR5KTtcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlRWxlbWVudCh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcGVuZFVJVmlzdWFscyhudWxsLCBlbGVtZW50KTtcbiAgfVxuXG4gIHVwZGF0ZUVsZW1lbnQodmFsaWRhdGlvblByb3BlcnR5LCBlbGVtZW50KSB7XG4gICAgdGhpcy5hcHBlbmRVSVZpc3VhbHModmFsaWRhdGlvblByb3BlcnR5LCBlbGVtZW50KTtcbiAgfVxufVxuIl19