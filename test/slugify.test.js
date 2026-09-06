import assert from 'assert';
import { test, suite } from 'node:test';
import slugify from '../src/slugify.js';

suite('slugify', () => {
  test('should convert a string to a slug', () => {
    assert.strictEqual(slugify('Hello World'), 'hello-world');
  });

  test('should handle special characters', () => {
    assert.strictEqual(slugify('Hello World!'), 'hello-world');
  });

  test('should replace spaces with hyphens', () => {
    assert.strictEqual(slugify('Hello   World'), 'hello-world');
  });

  test('should convert to lowercase', () => {
    assert.strictEqual(slugify('HELLO WORLD'), 'hello-world');
  });

  test('should remove leading/trailing spaces', () => {
    assert.strictEqual(slugify('  Hello World  '), 'hello-world');
  });

  test('should handle accented characters', () => {
    assert.strictEqual(slugify('Crème brûlée'), 'creme-brulee');
  });

  test('should handle multiple hyphens', () => {
    assert.strictEqual(slugify('Hello--World'), 'hello-world');
  });

  test('should handle empty strings', () => {
    assert.strictEqual(slugify(''), '');
  });

  test('should handle numbers', () => {
    assert.strictEqual(slugify('123 Test'), '123-test');
  });

  test('should handle strings with only special characters', () => {
    assert.strictEqual(slugify('!@#$%^&*'), '');
  });
});