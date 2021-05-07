# typedescriptor

typedescriptor identifies and describes types.

## Status

| Category         | Status                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/typedescriptor)](https://www.npmjs.com/package/typedescriptor)     |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/typedescriptor)                                      |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/typedescriptor)                                  |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/typedescriptor/workflows/Release/badge.svg?branch=main) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/typedescriptor)                            |

## Installation

```shell
$ npm install typedescriptor
```

## Quick Start

First you need to import the functions you are interested in:

```javascript
const { 
  isArray,
  isBoolean,
  isError,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isReference,
  isScalar,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  typeOf
} = require('typedescriptor');
```

If you use TypeScript, use the following code instead:

```typescript
import {
  isArray,
  isBoolean,
  isError,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isReference,
  isScalar,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  typeOf
} from 'typedescriptor';
```

Then, use the type-guards to determine a variable's type or to narrow a variable's type in TypeScript:

```typescript
if (isNumber(value)) {
  // Do something with the number.
}
```

The types `array`, `boolean`, `error`, `function`, `map`, `null`, `number`, `object`, `set`, `string`, `symbol` and `undefined` are supported.

The `isError` implementation is re-exported from [`defekt`](https://github.com/thenativeweb/defekt/).

### Getting a variable's type name

To get a variable's type as a string, use `typeOf`:

```typescript
const typeName = typeOf('foo');
//=> 'string'
```

This is *not* compatible with the builtin `typeof` operator. Most notably: `null` is not considered to be an `object`, since TypeScript differentiates between the two. `null` is considered a separate type.

## Caveats

The `isObject` predicate overlaps with multiple others. If, for example, you want to treat a variable differently based on whether it is an array or any other object, you have to first check whether the variable is an array and only then check whether it is an object. If you would first check whether the variable is an object, the result would be `true` even for arrays.

```typescript
const doStuff = function (value: any): void {
  if (isArray(value)) {
    // Do things with the array and return!
  }
  if (isObject(value)) {
    // Do things with the object, which now can not be an array.
  }
}
```

The same is true for `isError`, `isMap` and `isSet`.

## Running the quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
