# @mohamad-190/string-toolkit

A small JavaScript library for string manipulation functions.

## Installation

```bash
npm install @mohamad-190/string-toolkit
```

```bash
yarn add @mohamad-190/string-toolkit
```

## Usage

```js
const { toSnakeCase, toKebabCase } = require('@mohamad-190/string-toolkit');

// Convert to snake_case
toSnakeCase('Hello World'); // => 'hello_world'

// Convert to kebab-case
toKebabCase('Hello World'); // => 'hello-world'
```

## Functions

### toSnakeCase(str)
Converts a string to snake_case (lowercase words separated by underscores).

### toKebabCase(str)
Converts a string to kebab-case (lowercase words separated by dashes).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute.

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for details.
