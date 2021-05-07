import { assert } from 'assertthat';
import { isNull } from '../../lib/isNull';
import { values } from '../shared/values';

suite('isNull', (): void => {
  for (const value of values.null) {
    test(`returns true if given null.`, async (): Promise<void> => {
      assert.that(isNull(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'null') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isNull(value)).is.false();
      });
    }
  }
});
