const values = {
  array: [
    [],
    [ 2, 3, 5, 7, 11 ],
    /* eslint-disable @typescript-eslint/no-array-constructor */
    new Array(),
    new Array(2, 3, 5, 7, 11)
    /* eslint-enable @typescript-eslint/no-array-constructor */
  ],

  boolean: [
    true,
    false
  ],

  error: [
    new Error('foo'),
    new class extends Error {}('foo')
  ],

  function: [
    /* eslint-disable no-new-func, @typescript-eslint/no-empty-function, @typescript-eslint/no-implied-eval */
    function (): void {},
    (): void => {},
    function * (): IterableIterator<any> {},
    async function (): Promise<void> {},
    new Function('left', 'right', 'return left + right')
    /* eslint-enable no-new-func, @typescript-eslint/no-empty-function, @typescript-eslint/no-implied-eval */
  ],

  map: [
    new Map(),
    new Map([[ 'foo', 'foo' ], [ 'bar', 'bar' ]])
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
    Number.NaN
  ],

  object: [
    {},
    { name: 'the native web' },
    /* eslint-disable no-new-object */
    new Object()
    /* eslint-enable no-new-object */
  ],

  set: [
    new Set(),
    new Set([ 'foo', 'bar' ])
  ],

  string: [
    'the native web',
    ''
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

export { values };
