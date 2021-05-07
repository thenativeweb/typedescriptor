import { assert } from 'assertthat';
import { isFunction } from '../../lib/isFunction';
import { values } from '../shared/values';

suite('isFunction', (): void => {
  for (const value of values.function) {
    test(`returns true if given a function.`, async (): Promise<void> => {
      assert.that(isFunction(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'function') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isFunction(value)).is.false();
      });
    }
  }
});
