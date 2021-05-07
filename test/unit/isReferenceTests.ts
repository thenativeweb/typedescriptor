import { assert } from 'assertthat';
import { isReference } from '../../lib/isReference';
import { references } from '../shared/references';
import { scalars } from '../shared/scalars';

suite('isReference', (): void => {
  for (const value of references) {
    test(`returns true if given a reference.`, async (): Promise<void> => {
      assert.that(isReference(value)).is.true();
    });
  }

  for (const value of scalars) {
    test(`returns false if given a scalar.`, async (): Promise<void> => {
      assert.that(isReference(value)).is.false();
    });
  }
});
