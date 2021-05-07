import { assert } from 'assertthat';
import { isString } from '../../lib/isString';
import { values } from '../shared/values';

suite('isString', (): void => {
  for (const value of values.string) {
    test(`returns true if given a string.`, async (): Promise<void> => {
      assert.that(isString(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'string') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isString(value)).is.false();
      });
    }
  }
});
