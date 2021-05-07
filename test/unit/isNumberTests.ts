import { assert } from 'assertthat';
import { isNumber } from '../../lib/isNumber';
import { values } from '../shared/values';

suite('isNumber', (): void => {
  for (const value of values.number) {
    test(`returns true if given a number.`, async (): Promise<void> => {
      assert.that(isNumber(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'number') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isNumber(value)).is.false();
      });
    }
  }
});
