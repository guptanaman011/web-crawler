import { sortPages } from "./report.js";
import { test, expect } from "@jest/globals";

test("sortPages", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev/path2": 6,
    "https://wagslane.dev/path3": 4,
    "https://wagslane.dev": 3,
  };
  const actual = sortPages(input);

  const expected = [
    ["https://wagslane.dev/path2", 6],
    ["https://wagslane.dev/path3", 4],
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path", 1],
  ]; // Correct structure of expected output
  expect(actual).toEqual(expected);
});
