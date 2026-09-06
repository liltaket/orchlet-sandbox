import { test } from "node:test";
import assert from "node:assert/strict";

import { slugify, default as defaultSlugify } from "../src/slugify.js";

test("slugify converts basic strings to lowercase kebab slugs", () => {
  assert.equal(slugify("Hello World"), "hello-world");
  assert.equal(slugify("Already A Slug"), "already-a-slug");
});

test("slugify trims and collapses whitespace and punctuation", () => {
  assert.equal(slugify("  Hello,   World!  "), "hello-world");
  assert.equal(slugify("foo & bar"), "foo-bar");
  assert.equal(slugify("multiple!!!punctuation???here"), "multiple-punctuation-here");
});

test("slugify strips diacritics from accented characters", () => {
  assert.equal(slugify("Crème brûlée"), "creme-brulee");
  assert.equal(slugify("Über Café"), "uber-cafe");
  assert.equal(slugify("naïve résumé"), "naive-resume");
});

test("slugify keeps numbers and mixed alphanumeric input", () => {
  assert.equal(slugify("Version 2 of 10"), "version-2-of-10");
  assert.equal(slugify("abc123def"), "abc123def");
});

test("slugify supports a custom separator", () => {
  assert.equal(slugify("Hello World", { separator: "_" }), "hello_world");
  assert.equal(slugify("a b & c", { separator: "+" }), "a+b+c");
});

test("slugify handles edge cases", () => {
  assert.equal(slugify(""), "");
  assert.equal(slugify("   "), "");
  assert.equal(slugify("!!!"), "");
  assert.equal(slugify("---hello---", { separator: "-" }), "hello");
  assert.equal(slugify("A--B", { separator: "-" }), "a-b");
});

test("slugify throws on invalid input", () => {
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(null), TypeError);
  assert.throws(() => slugify(undefined), TypeError);
  assert.throws(() => slugify("hello", { separator: "" }), TypeError);
  assert.throws(() => slugify("hello", { separator: 5 }), TypeError);
});

test("slugify has a default export", () => {
  assert.equal(defaultSlugify, slugify);
  assert.equal(defaultSlugify("Test Value"), "test-value");
});
