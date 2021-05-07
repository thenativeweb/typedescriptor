import { values } from './values';

const nonObjects = [
  ...values.boolean,
  ...values.function,
  ...values.null,
  ...values.number,
  ...values.string,
  ...values.symbol,
  ...values.undefined
];

export {
  nonObjects
};
