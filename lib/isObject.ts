// eslint-disable-next-line @typescript-eslint/ban-types
const isObject = function (value: any): value is object {
  return typeof value === 'object' && value !== null;
};

export {
  isObject
};
