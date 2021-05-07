import { isFunction } from './isFunction';
import { isObject } from './isObject';
import { isSymbol } from './isSymbol';

// eslint-disable-next-line @typescript-eslint/ban-types
const isReference = function (value: any): value is object | Function | symbol {
  return isObject(value) ||
      isFunction(value) ||
      isSymbol(value);
};

export {
  isReference
};
