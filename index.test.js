const { toSnakeCase } = require('./index');

test('converts "Hello World" to "hello_world"', () => {
  expect(toSnakeCase('Hello World')).toBe('hello_world');
});