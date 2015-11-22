System.register(['aurelia-validation'], function (_export) {
  'use strict';

  var ValidationViewStrategy, TableValidationViewStrategy;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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
      })(ValidationViewStrategy);

      _export('TableValidationViewStrategy', TableValidationViewStrategy);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OEJBT2EsMkJBQTJCOzs7Ozs7Ozs7Ozs7a0RBRmhDLHNCQUFzQjs7O0FBRWpCLGlDQUEyQjtBQUMzQixpQkFEQSwyQkFBMkIsR0FDeEI7Z0NBREgsMkJBQTJCOztBQUVwQyxxQ0FGUywyQkFBMkIsNkNBRTVCO0FBQ1IsY0FBSSxDQUFDLGNBQWMsR0FBRyw0QkFBNEIsQ0FBQztTQUNwRDs7a0JBSlUsMkJBQTJCOztxQkFBM0IsMkJBQTJCOztpQkFNdkIseUJBQUMsY0FBYyxFQUFFLFlBQVksRUFBRTtBQUM1QyxnQkFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO0FBQ3RCLHFCQUFPLElBQUksQ0FBQzthQUNiO0FBQ0QsZ0JBQUksY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUMvRSxxQkFBTyxjQUFjLENBQUM7YUFDdkI7QUFDRCxtQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1dBQzFFOzs7aUJBRXFCLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxnQkFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxnQkFBSSxTQUFTLEVBQUU7QUFDYixrQkFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDeEIseUJBQVMsR0FBRyxJQUFJLENBQUM7ZUFDbEIsTUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQzNELHlCQUFTLEdBQUcsSUFBSSxDQUFDO2VBQ2xCO2FBQ0Y7O0FBRUQsZ0JBQUksQ0FBQyxTQUFTLEVBQUU7QUFDZCx1QkFBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsdUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLHVCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRTdDLGtCQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDdkIsdUJBQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7ZUFDakUsTUFDSTtBQUNILHVCQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztlQUMzQzthQUNGO0FBQ0QsZ0JBQUksa0JBQWtCLEVBQUU7QUFDdEIsdUJBQVMsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO0FBQ25ELGtCQUFJLGtCQUFrQixDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDdkMseUJBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztlQUNsQyxNQUFNO0FBQ0wseUJBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztlQUNuQzthQUNGLE1BQU07QUFDTCx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2pDLHVCQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzthQUM1QjtXQUNGOzs7aUJBRWMseUJBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFO0FBQ2xELGdCQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxnQkFBSSxTQUFTLEVBQUU7QUFDYixrQkFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7QUFDcEQsb0JBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQzlCLDJCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQywyQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ3hDLE1BQ0k7QUFDSCwyQkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsMkJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN4QztlQUNGLE1BQ0k7QUFDSCx5QkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2VBQzNDOztBQUVELGtCQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7YUFDakU7V0FDRjs7O2lCQUVhLHdCQUFDLGtCQUFrQixFQUFFLE9BQU8sRUFBRTtBQUMxQyxnQkFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7V0FDckM7OztpQkFFWSx1QkFBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUU7QUFDekMsZ0JBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7V0FDbkQ7OztlQWhGVSwyQkFBMkI7U0FBUyxzQkFBc0I7OzZDQUExRCwyQkFBMkIiLCJmaWxlIjoidXRpbHMvdGFibGUtdmFsaWRhdGlvbi12aWV3LXN0cmF0ZWd5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI0LzE1LlxuICovXG4vL2ltcG9ydCB7VmFsaWRhdGVDdXN0b21BdHRyaWJ1dGVWaWV3U3RyYXRlZ3l9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG4vLyBUT0RPOiBtb3ZlIHRvIHVwcGVyIGltcG9ydCwgYmVjYXVzZSBpdCBzaG91bGQgYmUgZml4ZWQgaW4gbmVhciBjb21taXRcbmltcG9ydCB7VmFsaWRhdGlvblZpZXdTdHJhdGVneX0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJzsvLy92YWxpZGF0ZS1jdXN0b20tYXR0cmlidXRlLXZpZXctc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgVGFibGVWYWxpZGF0aW9uVmlld1N0cmF0ZWd5IGV4dGVuZHMgVmFsaWRhdGlvblZpZXdTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oZWxwQmxvY2tDbGFzcyA9ICdhdXJlbGlhLXZhbGlkYXRpb24tbWVzc2FnZSc7XG4gIH1cblxuICBzZWFyY2hGb3JtR3JvdXAoY3VycmVudEVsZW1lbnQsIGN1cnJlbnREZXB0aCkge1xuICAgIGlmIChjdXJyZW50RGVwdGggPT09IDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0ICYmIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1ncm91cCcpKSB7XG4gICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlLCAxICsgY3VycmVudERlcHRoKTtcbiAgfVxuXG4gIGFwcGVuZE1lc3NhZ2VUb0VsZW1lbnQoZWxlbWVudCwgdmFsaWRhdGlvblByb3BlcnR5KSB7XG4gICAgdmFyIGhlbHBCbG9jayA9IGVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgaWYgKGhlbHBCbG9jaykge1xuICAgICAgaWYgKCFoZWxwQmxvY2suY2xhc3NMaXN0KSB7XG4gICAgICAgIGhlbHBCbG9jayA9IG51bGw7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaGVscEJsb2NrLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmhlbHBCbG9ja0NsYXNzKSkge1xuICAgICAgICBoZWxwQmxvY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGVscEJsb2NrKSB7XG4gICAgICBoZWxwQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGhlbHBCbG9jay5jbGFzc0xpc3QuYWRkKCdoZWxwLWJsb2NrJyk7XG4gICAgICBoZWxwQmxvY2suY2xhc3NMaXN0LmFkZCh0aGlzLmhlbHBCbG9ja0NsYXNzKTtcblxuICAgICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShoZWxwQmxvY2ssIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoZWxwQmxvY2spO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5KSB7XG4gICAgICBoZWxwQmxvY2sudGV4dENvbnRlbnQgPSB2YWxpZGF0aW9uUHJvcGVydHkubWVzc2FnZTtcbiAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkuaXNWYWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBoZWxwQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlbHBCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBoZWxwQmxvY2sudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICBhcHBlbmRVSVZpc3VhbHModmFsaWRhdGlvblByb3BlcnR5LCBjdXJyZW50RWxlbWVudCkge1xuICAgIHZhciBmb3JtR3JvdXAgPSB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudCwgMCk7XG4gICAgaWYgKGZvcm1Hcm91cCkge1xuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eSAmJiB2YWxpZGF0aW9uUHJvcGVydHkuaXNEaXJ0eSkge1xuICAgICAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5LmlzVmFsaWQpIHtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXdhcm5pbmcnKTtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXdhcm5pbmcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtd2FybmluZycpO1xuICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcHBlbmRNZXNzYWdlVG9FbGVtZW50KGN1cnJlbnRFbGVtZW50LCB2YWxpZGF0aW9uUHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVFbGVtZW50KHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCkge1xuICAgIHRoaXMuYXBwZW5kVUlWaXN1YWxzKG51bGwsIGVsZW1lbnQpO1xuICB9XG5cbiAgdXBkYXRlRWxlbWVudCh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcGVuZFVJVmlzdWFscyh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=