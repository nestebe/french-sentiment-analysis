const lib = require("./lib/index.js")


test("test positive sentiment", () => {
  expect(lib.getSentiment("ce programme est super")).toBeGreaterThan(0)
})

test("test negative sentiment", () => {
  expect(lib.getSentiment("ce programme est très mauvais")).toBeLessThan(0)
})

