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

First you need to add a reference to typedescriptor to your application:

```javascript
const { Type } = require('typedescriptor');
```

If you use TypeScript, use the following code instead:

```typescript
import { Type } from 'typedescriptor';
```

Then, to identify a value's type, call the static `of` function and hand over the value:

```javascript
const type = Type.of('the native web');

console.log(type);
// => 'string'
```

The types `array`, `boolean`, `function`, `null`, `number`, `object`, `string`, `symbol` and `undefined` are supported.

### Getting detailed type descriptions

To get a detailed type descriptor object, call the static `from` function and hand over the value:

```javascript
const typeDescriptor = Type.from('the native web');

console.log(typeDescriptor);
// => {
//      name: 'string',
//
//      isValueType: true,
//      isReferenceType: false,
//
//      isArray: false,
//      isBoolean: false,
//      isFunction: false,
//      isNull: false,
//      isNumber: false,
//      isObject: false,
//      isString: true,
//      isSymbol: false,
//      isUndefined: false
//    }
```

### Using TypeScript type guards

Since using the descriptors above doesn't tell TypeScript anything, there are type guards for every type check:

```typescript
import Type from 'typedescriptor';

const someValue = getSomeValue() as any;

if (Type.isArray(someValue)) {
  // TypeScript now realizes that `someValue` is of type []
}

if (Type.isValueType(someValue)) {
  // TypeScript now realizes that `someValue` is of type string | number | boolean | null | undefined
}
```

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
