

const assert = require("node:assert/strict")

const caseConverter = require("./index");

assert.strictEqual(
    caseConverter.getUpperCase("hello world!"),
    "HELLO WORLD!",
)

assert.strictEqual(
    caseConverter.getLowerCase("hello world!"),
    "hello world!",
)

assert.strictEqual(
    caseConverter.getProperCase("hello world!"),
    "Hello World!",
)

assert.strictEqual(
    caseConverter.getSentenceCase("hello world!"),
    "Hello world!",
)