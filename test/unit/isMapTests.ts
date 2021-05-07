import { assert } from 'assertthat';
import { isMap } from '../../lib/isMap';
import { values } from '../shared/values';

suite('isMap', (): void => {
  for (const value of values.map) {
    test(`returns true if given a map.`, async (): Promise<void> => {
      assert.that(isMap(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'map') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isMap(value)).is.false();
      });
    }
  }
});
