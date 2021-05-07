import { values } from './values';

const scalars = [
  ...values.boolean,
  ...values.null,
  ...values.number,
  ...values.string,
  ...values.undefined
];

export {
  scalars
};
