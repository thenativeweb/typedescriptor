import { assert } from 'assertthat';
import { isError } from '../../lib/isError';
import { values } from '../shared/values';

suite('isError', (): void => {
  for (const value of values.error) {
    test(`returns true if given an error.`, async (): Promise<void> => {
      assert.that(isError(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'error') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isError(value)).is.false();
      });
    }
  }
});
