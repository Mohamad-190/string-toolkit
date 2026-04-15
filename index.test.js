const { toSnakeCase, toKebabCase } = require('./index');

test('converts "Hello World" to "hello_world"', () => {
  expect(toSnakeCase('Hello World')).toBe('hello_world');
});

test('converts "Hello World" to "hello-world"', () => {
  expect(toKebabCase('Hello World')).toBe('hello-world');
});