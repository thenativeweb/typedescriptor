import { isArray } from './isArray';
import { isBoolean } from './isBoolean';
import { isError } from 'defekt';
import { isFunction } from './isFunction';
import { isMap } from './isMap';
import { isNull } from './isNull';
import { isNumber } from './isNumber';
import { isObject } from './isObject';
import { isSet } from './isSet';
import { isString } from './isString';
import { isSymbol } from './isSymbol';
import { isUndefined } from './isUndefined';
import { Type } from './Type';

const typeOf = function (value: any): Type {
  if (isArray(value)) {
    return 'array';
  }
  if (isBoolean(value)) {
    return 'boolean';
  }
  if (isError(value)) {
    return 'error';
  }
  if (isFunction(value)) {
    return 'function';
  }
  if (isMap(value)) {
    return 'map';
  }
  if (isNull(value)) {
    return 'null';
  }
  if (isNumber(value)) {
    return 'number';
  }
  if (isSet(value)) {
    return 'set';
  }
  if (isString(value)) {
    return 'string';
  }
  if (isSymbol(value)) {
    return 'symbol';
  }
  if (isUndefined(value)) {
    return 'undefined';
  }
  if (isObject(value)) {
    return 'object';
  }

  throw new Error('This should not have happened! Did you invent a new scalar type?');
};

export {
  typeOf
};
