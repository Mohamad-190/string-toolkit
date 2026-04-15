function toSnakeCase(str) {
  return str.trim().replace(/\s+/g, '_').toLowerCase();
}

function toKebabCase(str) {
  return str.trim().replace(/\s+/g, '-').toLowerCase();
}

module.exports = { toSnakeCase, toKebabCase };