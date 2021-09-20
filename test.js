const { FrenchSentimentAnalyzer, Sentiment } = require("./lib/index.js")


test("test positive sentiment", () => {

  expect(FrenchSentimentAnalyzer.getSentiment("ce programme est super")).toBeGreaterThan(0)
  expect(FrenchSentimentAnalyzer.getSentiment("ce programme est super")).toBe(Sentiment.POSITIVE)


})

test("test negative sentiment", () => {
  expect(FrenchSentimentAnalyzer.getSentiment("ce programme est très mauvais")).toBeLessThan(0)
  expect(FrenchSentimentAnalyzer.getSentiment("ce programme est très mauvais")).toBe(Sentiment.NEGATIVE)
})

