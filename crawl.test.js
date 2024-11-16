import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";

// Test #1
// check url has https://
test("normalizeURL strip protocol", () => {
    const input = "https://blog.boot.dev/path";
    const actual = normizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

// Test #2
// check for https://www. in url
test("normalizeURL www.", () => {
    const input = "https://www.blog.test.testing/path";
    const actual = normalizeURL(input);
    const expected = "blog.test.testing/path";
    expect(actual).toEqual(expected);
});
