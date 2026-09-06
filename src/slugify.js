/**
 * Convert a string into a URL-friendly slug.
 *
 * @param {string} input - The string to slugify.
 * @param {object} [options]
 * @param {string} [options.separator="-"] - Character used to replace spaces and non-alphanumerics.
 * @returns {string} The slugified string.
 */
export function slugify(input, options = {}) {
  const { separator = "-" } = options;

  if (typeof input !== "string") {
    throw new TypeError("slugify expects a string input");
  }

  if (typeof separator !== "string" || separator.length === 0) {
    throw new TypeError("separator must be a non-empty string");
  }

  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, separator)
    .split(separator)
    .filter((part) => part.length > 0)
    .join(separator);
}

export default slugify;
