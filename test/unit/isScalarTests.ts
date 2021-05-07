import { assert } from 'assertthat';
import { isScalar } from '../../lib/isScalar';
import { references } from '../shared/references';
import { scalars } from '../shared/scalars';

suite('isScalar', (): void => {
  for (const value of scalars) {
    test(`returns true if given a scalar.`, async (): Promise<void> => {
      assert.that(isScalar(value)).is.true();
    });
  }

  for (const value of references) {
    test(`returns false if given a reference.`, async (): Promise<void> => {
      assert.that(isScalar(value)).is.false();
    });
  }
});
