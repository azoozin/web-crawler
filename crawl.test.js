import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";

// check url has https://
test("normalizeURL strip protocol", () => {
    const input = "https://blog.boot.dev/path";
    const actual = normizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

// check for https://www. and http://www. in url
test("normalizeURL protocol and www.", () => {
    const httpsInput = "https://www.blog.test.testing/path";
    const httpInput = "http://www.blog.test.testing/path";
    const expected = "blog.test.testing/path";
    expect(normalizeURL(httpsInput)).toEqual(expected);
    expect(normalizeURL(httpInput)).toEqual(expected);
});

// check for trailing slashes in the url
test("normalizeURL trailing slashes", () => {
    const oneInput = "https://blog.test.testing/path/";
    const twoInput = "https://blog.test.testing/path//";
    const threeInput = "https://blog.test.testing/path///";
    const expected = "blog.test.testing/path";
    expect(normalizeURL(oneInput)).toEqual(expected);
    expect(normalizeURL(twoInput)).toEqual(expected);
    expect(normalizeURL(threeInput)).toEqual(expected);
});

// check for uppercase in the url
test("normalizeURL check uppercase", () => {
    const testCases = [
        ["https://Blog.Test.Testing/path", "blog.test.testing/path"],
        ["http://Blog.Test.Testing/path", "blog.test.testing/path"],
        ["https://Blog.Test.Testing/path/", "blog.test.testing/path"],
        ["https://Blog.Test.Testing/path//", "blog.test.testing/path"],
        ["https://Blog.Test.Testing/path///", "blog.test.testing/path"],
        ["http://Blog.Test.Testing/path/", "blog.test.testing/path"],
        ["http://Blog.Test.Testing/path//", "blog.test.testing/path"],
        ["http://Blog.Test.Testing/path///", "blog.test.testing/path"],
        ["HTTPS://BLOG.TEST.TESTING/PATH", "blog.test.testing/path"],
        ["HTTP://BLOG.TEST.TESTING/PATH", "blog.test.testing/path"],
        ["HTTPS://BLOG.TEST.TESTING/PATH/", "blog.test.testing/path"],
        ["HTTPS://BLOG.TEST.TESTING/PATH//", "blog.test.testing/path"],
        ["HTTPS://BLOG.TEST.TESTING/PATH///", "blog.test.testing/path"],
        ["HTTP://BLOG.TEST.TESTING/PATH/", "blog.test.testing/path"],
        ["HTTP://BLOG.TEST.TESTING/PATH//", "blog.test.testing/path"],
        ["HTTP://BLOG.TEST.TESTING/PATH///", "blog.test.testing/path"],
    ];
    testCases.forEach(([input, expected]) => {
        expect(normalizeURL(input)).toEqual(expected);
    });
});

// check invalid url and empty url
test("normalizeURL invalid cases", () => {
    const testCases = [
        ["https://blog.test.testing", "blog.test.testing"],
        ["https://blog.test.testing/", "blog.test.testing"],
        ["http://blog.test.testing", "blog.test.testing"],
        ["http://blog.test.testing/", "blog.test.testing"],
        ["https://blog.test.testing", "blog.test.testing/path"],
        ["https://blog.test.testing/", "blog.test.testing/path"],
        ["http://blog.test.testing", "blog.test.testing/path"],
        ["http://blog.test.testing/", "blog.test.testing/path"],
        ["invalid url here", null],
        ["", null],
        ["https://", null],
    ];

    testCases.forEach(([input, expected]) => {
        expect(normalizeURL(input)).toEqual(expected);
    });
});
