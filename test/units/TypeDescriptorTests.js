'use strict';

const assert = require('assertthat');

const Type = require('../../src/TypeDescriptor'),
      values = require('../shared/values');

suite('TypeDescriptor', () => {
  test('is a function.', async () => {
    assert.that(Type).is.ofType('function');
  });

  suite('of', () => {
    test('is a function.', async () => {
      assert.that(Type.of).is.ofType('function');
    });

    test(`returns 'array' for array values.`, async () => {
      for (const value of values.array) {
        assert.that(Type.of(value)).is.equalTo('array');
      }
    });

    test(`returns 'boolean' for boolean values.`, async () => {
      for (const value of values.boolean) {
        assert.that(Type.of(value)).is.equalTo('boolean');
      }
    });

    test(`returns 'function' for function values.`, async () => {
      for (const value of values.function) {
        assert.that(Type.of(value)).is.equalTo('function');
      }
    });

    test(`returns 'null' for null values.`, async () => {
      for (const value of values.null) {
        assert.that(Type.of(value)).is.equalTo('null');
      }
    });

    test(`returns 'number' for number values.`, async () => {
      for (const value of values.number) {
        assert.that(Type.of(value)).is.equalTo('number');
      }
    });

    test(`returns 'object' for object values.`, async () => {
      for (const value of values.object) {
        assert.that(Type.of(value)).is.equalTo('object');
      }
    });

    test(`returns 'string' for string values.`, async () => {
      for (const value of values.string) {
        assert.that(Type.of(value)).is.equalTo('string');
      }
    });

    test(`returns 'symbol' for symbol values.`, async () => {
      for (const value of values.symbol) {
        assert.that(Type.of(value)).is.equalTo('symbol');
      }
    });

    test(`returns 'undefined' for undefined values.`, async () => {
      for (const value of values.undefined) {
        assert.that(Type.of(value)).is.equalTo('undefined');
      }
    });
  });

  suite('from', () => {
    test('is a function.', async () => {
      assert.that(Type.from).is.ofType('function');
    });

    test(`returns an array descriptor for array values.`, async () => {
      for (const value of values.array) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'array',

          isValueType: false,
          isReferenceType: true,

          isArray: true,
          isBoolean: false,
          isFunction: false,
          isNull: false,
          isNumber: false,
          isObject: false,
          isString: false,
          isSymbol: false,
          isUndefined: false
        });
      }
    });

    test(`returns a boolean descriptor for boolean values.`, async () => {
      for (const value of values.boolean) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'boolean',

          isValueType: true,
          isReferenceType: false,

          isArray: false,
          isBoolean: true,
          isFunction: false,
          isNull: false,
          isNumber: false,
          isObject: false,
          isString: false,
          isSymbol: false,
          isUndefined: false
        });
      }
    });

    test(`returns a function descriptor for function values.`, async () => {
      for (const value of values.function) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'function',

          isValueType: false,
          isReferenceType: true,

          isArray: false,
          isBoolean: false,
          isFunction: true,
          isNull: false,
          isNumber: false,
          isObject: false,
          isString: false,
          isSymbol: false,
          isUndefined: false
        });
      }
    });

    test(`returns a null descriptor for null values.`, async () => {
      for (const value of values.null) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'null',

          isValueType: true,
          isReferenceType: false,

          isArray: false,
          isBoolean: false,
          isFunction: false,
          isNull: true,
          isNumber: false,
          isObject: false,
          isString: false,
          isSymbol: false,
          isUndefined: false
        });
      }
    });

    test(`returns a number descriptor for number values.`, async () => {
      for (const value of values.number) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'number',

          isValueType: true,
          isReferenceType: false,

          isArray: false,
          isBoolean: false,
          isFunction: false,
          isNull: false,
          isNumber: true,
          isObject: false,
          isString: false,
          isSymbol: false,
          isUndefined: false
        });
      }
    });

    test(`returns an object descriptor for object values.`, async () => {
      for (const value of values.object) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'object',

          isValueType: false,
          isReferenceType: true,

          isArray: false,
          isBoolean: false,
          isFunction: false,
          isNull: false,
          isNumber: false,
          isObject: true,
          isString: false,
          isSymbol: false,
          isUndefined: false
        });
      }
    });

    test(`returns a string descriptor for string values.`, async () => {
      for (const value of values.string) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'string',

          isValueType: true,
          isReferenceType: false,

          isArray: false,
          isBoolean: false,
          isFunction: false,
          isNull: false,
          isNumber: false,
          isObject: false,
          isString: true,
          isSymbol: false,
          isUndefined: false
        });
      }
    });

    test(`returns a symbol descriptor for symbol values.`, async () => {
      for (const value of values.symbol) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'symbol',

          isValueType: false,
          isReferenceType: true,

          isArray: false,
          isBoolean: false,
          isFunction: false,
          isNull: false,
          isNumber: false,
          isObject: false,
          isString: false,
          isSymbol: true,
          isUndefined: false
        });
      }
    });

    test(`returns an undefined descriptor for undefined values.`, async () => {
      for (const value of values.undefined) {
        assert.that(Type.from(value)).is.equalTo({
          name: 'undefined',

          isValueType: true,
          isReferenceType: false,

          isArray: false,
          isBoolean: false,
          isFunction: false,
          isNull: false,
          isNumber: false,
          isObject: false,
          isString: false,
          isSymbol: false,
          isUndefined: true
        });
      }
    });
  });
});
