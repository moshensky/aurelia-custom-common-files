'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _aureliaValidationValidationValidateCustomAttributeViewStrategy = require('aurelia-validation/validation/validate-custom-attribute-view-strategy');

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