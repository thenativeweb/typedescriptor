# typedescriptor

typedescriptor identifies and describes types.

## Installation

```shell
$ npm install typedescriptor
```

## Quick Start

First you need to add a reference to typedescriptor to your application:

```javascript
const Type = require('typedescriptor');
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

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```

## License

The MIT License (MIT)
Copyright (c) 2019 the native web. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
