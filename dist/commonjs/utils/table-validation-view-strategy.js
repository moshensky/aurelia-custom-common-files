'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _aureliaValidation = require('aurelia-validation');

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