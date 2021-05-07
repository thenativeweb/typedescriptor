import { isBoolean } from './isBoolean';
import { isNull } from './isNull';
import { isNumber } from './isNumber';
import { isString } from './isString';
import { isUndefined } from './isUndefined';

const isScalar = function (value: any): value is number | string | boolean | undefined | null {
  return isNumber(value) ||
        isString(value) ||
        isBoolean(value) ||
        isUndefined(value) ||
        isNull(value);
};

export {
  isScalar
};
