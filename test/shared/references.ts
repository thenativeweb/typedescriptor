import { values } from './values';

const references = [
  ...values.array,
  ...values.error,
  ...values.function,
  ...values.map,
  ...values.object,
  ...values.set,
  ...values.symbol
];

export {
  references
};
