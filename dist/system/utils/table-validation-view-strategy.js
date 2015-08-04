System.register(['aurelia-validation/validation/validate-custom-attribute-view-strategy'], function (_export) {
  'use strict';

  var ValidateCustomAttributeViewStrategyBase, TableValidationViewStrategy;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_aureliaValidationValidationValidateCustomAttributeViewStrategy) {
      ValidateCustomAttributeViewStrategyBase = _aureliaValidationValidationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategyBase;
    }],
    execute: function () {
      TableValidationViewStrategy = (function (_ValidateCustomAttributeViewStrategyBase) {
        _inherits(TableValidationViewStrategy, _ValidateCustomAttributeViewStrategyBase);

        function TableValidationViewStrategy() {
          _classCallCheck(this, TableValidationViewStrategy);

          _ValidateCustomAttributeViewStrategyBase.call(this);
          this.helpBlockClass = 'aurelia-validation-message';
        }

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
            helpBlock = document.createElement("p");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0NBT2EsMkJBQTJCOzs7Ozs7OztnSEFGaEMsdUNBQXVDOzs7QUFFbEMsaUNBQTJCO2tCQUEzQiwyQkFBMkI7O0FBQzNCLGlCQURBLDJCQUEyQixHQUV0QztnQ0FGVywyQkFBMkI7O0FBR3BDLDZEQUFPLENBQUM7QUFDUixjQUFJLENBQUMsY0FBYyxHQUFHLDRCQUE0QixDQUFDO1NBQ3BEOztBQUxVLG1DQUEyQixXQU90QyxlQUFlLEdBQUEseUJBQUMsY0FBYyxFQUFFLFlBQVksRUFBRTtBQUM1QyxjQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDdEIsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7QUFDRCxjQUFJLGNBQWMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDL0UsbUJBQU8sY0FBYyxDQUFDO1dBQ3ZCO0FBQ0QsaUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztTQUMxRTs7QUFmVSxtQ0FBMkIsV0FpQnRDLHNCQUFzQixHQUFBLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxjQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLGNBQUksU0FBUyxFQUFFO0FBQ2IsZ0JBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0FBQ3hCLHVCQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ2xCLE1BQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtBQUMzRCx1QkFBUyxHQUFHLElBQUksQ0FBQzthQUNsQjtXQUNGOztBQUVELGNBQUksQ0FBQyxTQUFTLEVBQUU7QUFDZCxxQkFBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMscUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLHFCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRTdDLGdCQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDdkIscUJBQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakUsTUFDSTtBQUNILHFCQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztXQUNGO0FBQ0QsY0FBSSxrQkFBa0IsRUFBRTtBQUN0QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7QUFDbkQsZ0JBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUN2Qyx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQ2xDLE1BQU07QUFDTCx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ25DO1dBQ0YsTUFBTTtBQUNMLHFCQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMscUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1dBQzVCO1NBQ0Y7O0FBbkRVLG1DQUEyQixXQXFEdEMsZUFBZSxHQUFBLHlCQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUNsRCxjQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxjQUFJLFNBQVMsRUFBRTtBQUNiLGdCQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtBQUNwRCxrQkFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7QUFDOUIseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLHlCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztlQUN4QyxNQUNJO0FBQ0gseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLHlCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztlQUN4QzthQUNGLE1BQ0k7QUFDSCx1QkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsdUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzNDOztBQUVELGdCQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7V0FDakU7U0FDRjs7QUF6RVUsbUNBQTJCLFdBMEV0QyxjQUFjLEdBQUEsd0JBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFDO0FBQ3pDLGNBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDOztBQTVFVSxtQ0FBMkIsV0E2RXRDLGFBQWEsR0FBQSx1QkFBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUM7QUFDeEMsY0FBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDs7ZUEvRVUsMkJBQTJCO1NBQVMsdUNBQXVDIiwiZmlsZSI6InV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI0LzE1LlxyXG4gKi9cclxuLy9pbXBvcnQge1ZhbGlkYXRlQ3VzdG9tQXR0cmlidXRlVmlld1N0cmF0ZWd5fSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG4vLyBUT0RPOiBtb3ZlIHRvIHVwcGVyIGltcG9ydCwgYmVjYXVzZSBpdCBzaG91bGQgYmUgZml4ZWQgaW4gbmVhciBjb21taXRcclxuaW1wb3J0IHtWYWxpZGF0ZUN1c3RvbUF0dHJpYnV0ZVZpZXdTdHJhdGVneUJhc2V9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbi92YWxpZGF0aW9uL3ZhbGlkYXRlLWN1c3RvbS1hdHRyaWJ1dGUtdmlldy1zdHJhdGVneSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVWYWxpZGF0aW9uVmlld1N0cmF0ZWd5IGV4dGVuZHMgVmFsaWRhdGVDdXN0b21BdHRyaWJ1dGVWaWV3U3RyYXRlZ3lCYXNlIHtcclxuICBjb25zdHJ1Y3RvcigpXHJcbiAge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaGVscEJsb2NrQ2xhc3MgPSAnYXVyZWxpYS12YWxpZGF0aW9uLW1lc3NhZ2UnO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RGVwdGgpIHtcclxuICAgIGlmIChjdXJyZW50RGVwdGggPT09IDUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0ICYmIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1ncm91cCcpKSB7XHJcbiAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlLCAxICsgY3VycmVudERlcHRoKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZE1lc3NhZ2VUb0VsZW1lbnQoZWxlbWVudCwgdmFsaWRhdGlvblByb3BlcnR5KSB7XHJcbiAgICB2YXIgaGVscEJsb2NrID0gZWxlbWVudC5uZXh0U2libGluZztcclxuICAgIGlmIChoZWxwQmxvY2spIHtcclxuICAgICAgaWYgKCFoZWxwQmxvY2suY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgaGVscEJsb2NrID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghaGVscEJsb2NrLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmhlbHBCbG9ja0NsYXNzKSkge1xyXG4gICAgICAgIGhlbHBCbG9jayA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWhlbHBCbG9jaykge1xyXG4gICAgICBoZWxwQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgaGVscEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hlbHAtYmxvY2snKTtcclxuICAgICAgaGVscEJsb2NrLmNsYXNzTGlzdC5hZGQodGhpcy5oZWxwQmxvY2tDbGFzcyk7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZykge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaGVscEJsb2NrLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaGVscEJsb2NrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eSkge1xyXG4gICAgICBoZWxwQmxvY2sudGV4dENvbnRlbnQgPSB2YWxpZGF0aW9uUHJvcGVydHkubWVzc2FnZTtcclxuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eS5pc1ZhbGlkID09PSB0cnVlKSB7XHJcbiAgICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWxwQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaGVscEJsb2NrLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBlbmRVSVZpc3VhbHModmFsaWRhdGlvblByb3BlcnR5LCBjdXJyZW50RWxlbWVudCkge1xyXG4gICAgdmFyIGZvcm1Hcm91cCA9IHRoaXMuc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LCAwKTtcclxuICAgIGlmIChmb3JtR3JvdXApIHtcclxuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eSAmJiB2YWxpZGF0aW9uUHJvcGVydHkuaXNEaXJ0eSkge1xyXG4gICAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkuaXNWYWxpZCkge1xyXG4gICAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy13YXJuaW5nJyk7XHJcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXN1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcclxuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdoYXMtd2FybmluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXdhcm5pbmcnKTtcclxuICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hcHBlbmRNZXNzYWdlVG9FbGVtZW50KGN1cnJlbnRFbGVtZW50LCB2YWxpZGF0aW9uUHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcmVwYXJlRWxlbWVudCh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpe1xyXG4gICAgdGhpcy5hcHBlbmRVSVZpc3VhbHMobnVsbCwgZWxlbWVudCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUVsZW1lbnQodmFsaWRhdGlvblByb3BlcnR5LCBlbGVtZW50KXtcclxuICAgIHRoaXMuYXBwZW5kVUlWaXN1YWxzKHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==