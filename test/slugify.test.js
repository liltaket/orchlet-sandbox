import { test } from "node:test";
import assert from "node:assert/strict";
import slugify from "../src/slugify.js";

test("lowercases and hyphenates spaces", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("collapses consecutive separators", () => {
  assert.equal(slugify("Hello   World!"), "hello-world");
});

test("trims leading and trailing separators", () => {
  assert.equal(slugify("  --Hello World--  "), "hello-world");
});

test("removes diacritics", () => {
  assert.equal(slugify("Crème Brûlée"), "creme-brulee");
  assert.equal(slugify("Über Straße"), "uber-strasse");
});

test("keeps digits", () => {
  assert.equal(slugify("Version 2 Release"), "version-2-release");
});

test("handles already-slugged input idempotently", () => {
  assert.equal(slugify("hello-world"), "hello-world");
});

test("returns empty string for input with no alphanumerics", () => {
  assert.equal(slugify("!!! --- ???"), "");
  assert.equal(slugify(""), "");
  assert.equal(slugify("   "), "");
});

test("handles mixed case and punctuation", () => {
  assert.equal(slugify("Foo_Bar & Baz.Qux"), "foo-bar-baz-qux");
});

test("throws on non-string input", () => {
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(null), TypeError);
  assert.throws(() => slugify(undefined), TypeError);
  assert.throws(() => slugify({}), TypeError);
});
