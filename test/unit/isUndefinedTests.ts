import { assert } from 'assertthat';
import { isUndefined } from '../../lib/isUndefined';
import { values } from '../shared/values';

suite('isUndefined', (): void => {
  for (const value of values.undefined) {
    test(`returns true if given undefined.`, async (): Promise<void> => {
      assert.that(isUndefined(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'undefined') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isUndefined(value)).is.false();
      });
    }
  }
});
