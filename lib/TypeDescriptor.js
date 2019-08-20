'use strict';

const valueTypes = [ 'boolean', 'number', 'null', 'string', 'undefined' ];
const referenceTypes = [ 'array', 'function', 'object', 'symbol' ];

const detectableTypes = [ 'boolean', 'function', 'number', 'string', 'symbol' ];
const typeConstructors = [ Boolean, Number, String ];

class TypeDescriptor {
  constructor (value) {
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
  }
}

TypeDescriptor.of = function (value) {
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }

  const detectedType = typeof value;

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
