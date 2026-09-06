const SPECIAL_CHARS = {
  ß: "ss",
  æ: "ae",
  Æ: "ae",
  œ: "oe",
  Œ: "oe",
  ø: "o",
  Ø: "o",
  đ: "d",
  Đ: "d",
  ł: "l",
  Ł: "l",
};

export default function slugify(input) {
  if (typeof input !== "string") {
    throw new TypeError("slugify expects a string");
  }
  return input
    .replace(/[ßæÆœŒøØđĐłŁ]/g, (char) => SPECIAL_CHARS[char])
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
