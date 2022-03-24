import { assert } from 'assertthat';
import { values } from '../shared/values';
import { Type, typeOf } from '../../lib';

suite('typeOf', (): void => {
  for (const [ type, valuesOfType ] of Object.entries(values)) {
    test(`returns the correct type name for values of type ${type}.`, async (): Promise<void> => {
      for (const value of valuesOfType) {
        assert.that(typeOf(value)).is.equalTo(type as Type);
      }
    });
  }
});
