import assert from 'assertthat';
import Type from '../../lib/TypeDescriptor';
import values from '../shared/values';

suite('TypeDescriptor', (): void => {
  suite('of', (): void => {
    test('is a function.', async (): Promise<void> => {
      assert.that(Type.of).is.ofType('function');
    });

    test(`returns 'array' for array values.`, async (): Promise<void> => {
      for (const value of values.array) {
        assert.that(Type.of(value)).is.equalTo('array');
      }
    });

    test(`returns 'boolean' for boolean values.`, async (): Promise<void> => {
      for (const value of values.boolean) {
        assert.that(Type.of(value)).is.equalTo('boolean');
      }
    });

    test(`returns 'function' for function values.`, async (): Promise<void> => {
      for (const value of values.function) {
        assert.that(Type.of(value)).is.equalTo('function');
      }
    });

    test(`returns 'null' for null values.`, async (): Promise<void> => {
      for (const value of values.null) {
        assert.that(Type.of(value)).is.equalTo('null');
      }
    });

    test(`returns 'number' for number values.`, async (): Promise<void> => {
      for (const value of values.number) {
        assert.that(Type.of(value)).is.equalTo('number');
      }
    });

    test(`returns 'object' for object values.`, async (): Promise<void> => {
      for (const value of values.object) {
        assert.that(Type.of(value)).is.equalTo('object');
      }
    });

    test(`returns 'string' for string values.`, async (): Promise<void> => {
      for (const value of values.string) {
        assert.that(Type.of(value)).is.equalTo('string');
      }
    });

    test(`returns 'symbol' for symbol values.`, async (): Promise<void> => {
      for (const value of values.symbol) {
        assert.that(Type.of(value)).is.equalTo('symbol');
      }
    });

    test(`returns 'undefined' for undefined values.`, async (): Promise<void> => {
      for (const value of values.undefined) {
        assert.that(Type.of(value)).is.equalTo('undefined');
      }
    });
  });

  suite('from', (): void => {
    test('is a function.', async (): Promise<void> => {
      assert.that(Type.from).is.ofType('function');
    });

    test(`returns an array descriptor for array values.`, async (): Promise<void> => {
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

    test(`returns a boolean descriptor for boolean values.`, async (): Promise<void> => {
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

    test(`returns a function descriptor for function values.`, async (): Promise<void> => {
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

    test(`returns a null descriptor for null values.`, async (): Promise<void> => {
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

    test(`returns a number descriptor for number values.`, async (): Promise<void> => {
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

    test(`returns an object descriptor for object values.`, async (): Promise<void> => {
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

    test(`returns a string descriptor for string values.`, async (): Promise<void> => {
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

    test(`returns a symbol descriptor for symbol values.`, async (): Promise<void> => {
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

    test(`returns an undefined descriptor for undefined values.`, async (): Promise<void> => {
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

  suite('type guards', (): void => {
    suite('isValueType', (): void => {
      test('returns true for values.', async (): Promise<void> => {
        for (const value of values.valueTypes) {
          assert.that(Type.isValueType(value)).is.true();
        }
      });

      test('returns false for references.', async (): Promise<void> => {
        for (const value of values.referenceTypes) {
          assert.that(Type.isValueType(value)).is.false();
        }
      });
    });

    suite('isReferenceType', (): void => {
      test('returns true for references.', async (): Promise<void> => {
        for (const value of values.referenceTypes) {
          assert.that(Type.isReferenceType(value)).is.true();
        }
      });

      test('returns false for values.', async (): Promise<void> => {
        for (const value of values.valueTypes) {
          assert.that(Type.isReferenceType(value)).is.false();
        }
      });
    });

    suite('isArray', (): void => {
      test('returns true for arrays.', async (): Promise<void> => {
        for (const value of values.array) {
          assert.that(Type.isArray(value)).is.true();
        }
      });

      test('returns false for non-arrays.', async (): Promise<void> => {
        for (const value of [
          ...values.boolean,
          ...values.function,
          ...values.null,
          ...values.number,
          ...values.object,
          ...values.string,
          ...values.symbol,
          ...values.undefined
        ]) {
          assert.that(Type.isArray(value)).is.false();
        }
      });
    });

    suite('isBoolean', (): void => {
      test('returns true for booleans.', async (): Promise<void> => {
        for (const value of values.boolean) {
          assert.that(Type.isBoolean(value)).is.true();
        }
      });

      test('returns false for non-booleans.', async (): Promise<void> => {
        for (const value of [
          ...values.array,
          ...values.function,
          ...values.null,
          ...values.number,
          ...values.object,
          ...values.string,
          ...values.symbol,
          ...values.undefined
        ]) {
          assert.that(Type.isBoolean(value)).is.false();
        }
      });
    });

    suite('isFunction', (): void => {
      test('returns true for functions.', async (): Promise<void> => {
        for (const value of values.function) {
          assert.that(Type.isFunction(value)).is.true();
        }
      });

      test('returns false for non-functions.', async (): Promise<void> => {
        for (const value of [
          ...values.array,
          ...values.boolean,
          ...values.null,
          ...values.number,
          ...values.object,
          ...values.string,
          ...values.symbol,
          ...values.undefined
        ]) {
          assert.that(Type.isFunction(value)).is.false();
        }
      });
    });

    suite('isNull', (): void => {
      test('returns true for null.', async (): Promise<void> => {
        for (const value of values.null) {
          assert.that(Type.isNull(value)).is.true();
        }
      });

      test('returns false for non-null.', async (): Promise<void> => {
        for (const value of [
          ...values.array,
          ...values.boolean,
          ...values.function,
          ...values.number,
          ...values.object,
          ...values.string,
          ...values.symbol,
          ...values.undefined
        ]) {
          assert.that(Type.isNull(value)).is.false();
        }
      });
    });

    suite('isNumber', (): void => {
      test('returns true for numbers.', async (): Promise<void> => {
        for (const value of values.number) {
          assert.that(Type.isNumber(value)).is.true();
        }
      });

      test('returns false for non-numbers.', async (): Promise<void> => {
        for (const value of [
          ...values.array,
          ...values.boolean,
          ...values.function,
          ...values.null,
          ...values.object,
          ...values.string,
          ...values.symbol,
          ...values.undefined
        ]) {
          assert.that(Type.isNumber(value)).is.false();
        }
      });
    });

    suite('isObject', (): void => {
      test('returns true for objects.', async (): Promise<void> => {
        for (const value of values.object) {
          assert.that(Type.isObject(value)).is.true();
        }
      });

      test('returns false for non-objects.', async (): Promise<void> => {
        for (const value of [
          ...values.array,
          ...values.boolean,
          ...values.function,
          ...values.null,
          ...values.number,
          ...values.string,
          ...values.symbol,
          ...values.undefined
        ]) {
          assert.that(Type.isObject(value)).is.false();
        }
      });
    });

    suite('isString', (): void => {
      test('returns true for strings.', async (): Promise<void> => {
        for (const value of values.string) {
          assert.that(Type.isString(value)).is.true();
        }
      });

      test('returns false for non-strings.', async (): Promise<void> => {
        for (const value of [
          ...values.array,
          ...values.boolean,
          ...values.function,
          ...values.null,
          ...values.number,
          ...values.object,
          ...values.symbol,
          ...values.undefined
        ]) {
          assert.that(Type.isString(value)).is.false();
        }
      });
    });

    suite('isSymbol', (): void => {
      test('returns true for symbols.', async (): Promise<void> => {
        for (const value of values.symbol) {
          assert.that(Type.isSymbol(value)).is.true();
        }
      });

      test('returns false for non-symbols.', async (): Promise<void> => {
        for (const value of [
          ...values.array,
          ...values.boolean,
          ...values.function,
          ...values.null,
          ...values.number,
          ...values.object,
          ...values.string,
          ...values.undefined
        ]) {
          assert.that(Type.isSymbol(value)).is.false();
        }
      });
    });

    suite('isUndefined', (): void => {
      test('returns true for undefined.', async (): Promise<void> => {
        for (const value of values.undefined) {
          assert.that(Type.isUndefined(value)).is.true();
        }
      });

      test('returns false for non-undefined.', async (): Promise<void> => {
        for (const value of [
          ...values.array,
          ...values.boolean,
          ...values.function,
          ...values.null,
          ...values.number,
          ...values.object,
          ...values.string,
          ...values.symbol
        ]) {
          assert.that(Type.isUndefined(value)).is.false();
        }
      });
    });
  });
});
