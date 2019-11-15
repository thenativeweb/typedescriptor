const values = {
  array: [
    [],
    [ 2, 3, 5, 7, 11 ],
    /* eslint-disable no-array-constructor, @typescript-eslint/no-array-constructor */
    new Array(),
    new Array(2, 3, 5, 7, 11)
    /* eslint-enable no-array-constructor, @typescript-eslint/no-array-constructor */
  ],

  boolean: [
    true,
    false,
    /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
    new Boolean(true)
    /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */
  ],

  function: [
    /* eslint-disable no-empty-function, no-new-func, @typescript-eslint/no-empty-function */
    function (): void {},
    (): void => {},
    function * (): IterableIterator<any> {},
    async function (): Promise<void> {},
    new Function('left', 'right', 'return left + right')
    /* eslint-enable no-empty-function, no-new-func, @typescript-eslint/no-empty-function */
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
    /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
    new Number(23)
    /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */
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
    /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
    new String('the native web')
    /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */
  ],

  symbol: [
    /* eslint-disable symbol-description */
    Symbol(),
    /* eslint-enable symbol-description */
    Symbol('a symbol')
  ],

  undefined: [
    undefined
  ],

  valueTypes: [] as any[],

  referenceTypes: [] as any[]
};

values.valueTypes = [
  ...values.boolean,
  ...values.null,
  ...values.number,
  ...values.string,
  ...values.undefined
];

values.referenceTypes = [
  ...values.array,
  ...values.function,
  ...values.object,
  ...values.symbol
];

export { values };
