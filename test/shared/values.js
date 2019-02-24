'use strict';

const values = {
  array: [
    [],
    [ 2, 3, 5, 7, 11 ],
    /* eslint-disable no-array-constructor */
    new Array(),
    new Array(2, 3, 5, 7, 11)
    /* eslint-enable no-array-constructor */
  ],

  boolean: [
    true,
    false,
    /* eslint-disable no-new-wrappers */
    new Boolean(true)
    /* eslint-enable no-new-wrappers */
  ],

  function: [
    /* eslint-disable no-empty-function, no-new-func */
    function () {},
    () => {},
    function * () {},
    async function () {},
    new Function('left', 'right', 'return left + right')
    /* eslint-enable no-empty-function, no-new-func */
  ],

  null: [
    null
  ],

  number: [
    23,
    3.14,
    0,
    -0,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NaN,
    /* eslint-disable no-new-wrappers */
    new Number(23)
    /* eslint-enable no-new-wrappers */
  ],

  object: [
    {},
    { name: 'the native web' },
    new Map(),
    new Set(),
    new WeakMap(),
    new WeakSet(),
    /* eslint-disable no-new-object */
    new Object()
    /* eslint-enable no-new-object */
  ],

  string: [
    'the native web',
    '',
    /* eslint-disable no-new-wrappers */
    new String('the native web')
    /* eslint-enable no-new-wrappers */
  ],

  symbol: [
    /* eslint-disable symbol-description */
    Symbol(),
    /* eslint-enable symbol-description */
    Symbol('a symbol')
  ],

  undefined: [
    undefined
  ]
};

module.exports = values;
