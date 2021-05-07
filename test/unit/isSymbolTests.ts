import { assert } from 'assertthat';
import { isSymbol } from '../../lib/isSymbol';
import { values } from '../shared/values';

suite('isSymbol', (): void => {
  for (const value of values.symbol) {
    test(`returns true if given a symbol.`, async (): Promise<void> => {
      assert.that(isSymbol(value)).is.true();
    });
  }

  for (const [ type, valuesOfType ] of Object.entries(values)) {
    if (type === 'symbol') {
      continue;
    }
    for (const value of valuesOfType) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isSymbol(value)).is.false();
      });
    }
  }
});
