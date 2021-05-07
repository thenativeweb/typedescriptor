import { values } from './values';

const objects = [
  ...values.array,
  ...values.error,
  ...values.map,
  ...values.object,
  ...values.set
];

export {
  objects
};
