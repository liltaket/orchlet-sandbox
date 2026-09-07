
import assert from 'assert';
import slugify from '../src/slugify.js';

import { test } from 'node:test';

test('slugify', (t) => {
  test('should convert a string to a slug', () => {
    assert.strictEqual(slugify('Hello World'), 'hello-world');
  });

  test('should handle special characters', () => {
    assert.strictEqual(slugify('Hello, World!'), 'hello-world');
  });

  test('should handle multiple spaces', () => {
    assert.strictEqual(slugify('Hello   World'), 'hello-world');
  });

  test('should handle leading and trailing spaces', () => {
    assert.strictEqual(slugify('  Hello World  '), 'hello-world');
  });

  test('should handle empty string', () => {
    assert.strictEqual(slugify(''), '');
  });

  test('should handle accented characters', () => {
    assert.strictEqual(slugify('Crème brûlée'), 'creme-brulee');
  });

  test('should handle long strings with various characters', () => {
    const longString = "This is a long string with !@#$%^&*() special characters, numbers 12345, and some spaces   .";
    const expectedSlug = "this-is-a-long-string-with-special-characters-numbers-12345-and-some-spaces";
    assert.strictEqual(slugify(longString), expectedSlug);
  });
});
