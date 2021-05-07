import { assert } from 'assertthat';
import { isSet } from '../../lib/isSet';
import { values } from '../shared/values';

suite('isSet', (): void => {
  for (const value of values.set) {
    test(`returns true if given a set.`, async (): Promise<void> => {
      assert.that(isSet(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'set') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isSet(value)).is.false();
      });
    }
  }
});
