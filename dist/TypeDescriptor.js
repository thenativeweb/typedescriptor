'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var valueTypes = ['boolean', 'number', 'null', 'string', 'undefined'];
var referenceTypes = ['array', 'function', 'object', 'symbol'];
var detectableTypes = ['boolean', 'function', 'number', 'string', 'symbol'];
var typeConstructors = [Boolean, Number, String];

var TypeDescriptor = function TypeDescriptor(value) {
  (0, _classCallCheck2.default)(this, TypeDescriptor);
  this.name = TypeDescriptor.of(value);
  this.isValueType = valueTypes.includes(this.name);
  this.isReferenceType = referenceTypes.includes(this.name);
  this.isArray = this.name === 'array';
  this.isBoolean = this.name === 'boolean';
  this.isFunction = this.name === 'function';
  this.isNull = this.name === 'null';
  this.isNumber = this.name === 'number';
  this.isObject = this.name === 'object';
  this.isString = this.name === 'string';
  this.isSymbol = this.name === 'symbol';
  this.isUndefined = this.name === 'undefined';
};

TypeDescriptor.of = function (value) {
  if (value === null) {
    return 'null';
  }

  if (value === undefined) {
    return 'undefined';
  }

  var detectedType = (0, _typeof2.default)(value);

  if (detectableTypes.includes(detectedType)) {
    return detectedType;
  }

  if (detectedType === 'object') {
    if (Array.isArray(value)) {
      return 'array';
    }

    if (typeConstructors.includes(value.constructor)) {
      return value.constructor.name.toLowerCase();
    }

    return detectedType;
  }

  throw new Error('Failed due to an unknown type.');
};

TypeDescriptor.from = function (value) {
  return new TypeDescriptor(value);
};

module.exports = TypeDescriptor;