import { assert } from 'assertthat';
import { isBoolean } from '../../lib/isBoolean';
import { values } from '../shared/values';

suite('isBoolean', (): void => {
  for (const value of values.boolean) {
    test(`returns true if given a boolean.`, async (): Promise<void> => {
      assert.that(isBoolean(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'boolean') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isBoolean(value)).is.false();
      });
    }
  }
});
