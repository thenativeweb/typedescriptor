import { assert } from 'assertthat';
import { isArray } from '../../lib/isArray';
import { values } from '../shared/values';

suite('isArray', (): void => {
  for (const value of values.array) {
    test(`returns true if given an array.`, async (): Promise<void> => {
      assert.that(isArray(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'array') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isArray(value)).is.false();
      });
    }
  }
});
