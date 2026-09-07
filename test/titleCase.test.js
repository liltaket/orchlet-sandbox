import assert from 'assert';
import titleCase from '../src/titleCase.js';

import { describe, it } from 'node:test';

describe('titleCase', () => {
  it('should title case a single word', () => {
    assert.strictEqual(titleCase('word'), 'Word');
  });

  it('should title case a sentence', () => {
    assert.strictEqual(titleCase('hello world'), 'Hello World');
  });

  it('should handle already title cased sentences', () => {
    assert.strictEqual(titleCase('Hello World'), 'Hello World');
  });

  it('should handle sentences with mixed casing', () => {
    assert.strictEqual(titleCase('hElLo wOrLd'), 'Hello World');
  });

  it('should handle empty strings', () => {
    assert.strictEqual(titleCase(''), '');
  });

  it('should handle strings with only spaces', () => {
    assert.strictEqual(titleCase('   '), '   ');
  });

  it('should handle strings with leading/trailing spaces', () => {
    assert.strictEqual(titleCase(' hello world '), ' Hello World ');
  });

  it('should handle numbers in strings', () => {
    assert.strictEqual(titleCase('hello world 123'), 'Hello World 123');
  });

  it('should handle special characters', () => {
    assert.strictEqual(titleCase('hello-world'), 'Hello-world');
  });
});
