import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";

// Test #1
test("normalizeURL strip protocol", () => {
    const input = "https://blog.boot.dev/path";
    const actual = normizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});
