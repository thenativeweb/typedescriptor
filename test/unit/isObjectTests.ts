import { assert } from 'assertthat';
import { isObject } from '../../lib/isObject';
import { nonObjects } from '../shared/nonObjects';
import { objects } from '../shared/objects';

suite('isObject', (): void => {
  for (const value of objects) {
    test(`returns true if given an object.`, async (): Promise<void> => {
      assert.that(isObject(value)).is.true();
    });
  }

  for (const value of nonObjects) {
    test(`returns false if given a non-object.`, async (): Promise<void> => {
      assert.that(isObject(value)).is.false();
    });
  }
});
