"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.frenchSentimentAnalyser = void 0;
var natural_1 = require("natural");
var stopword_1 = __importDefault(require("stopword"));
var enums_1 = require("./enums");
var tokenizer = new natural_1.AggressiveTokenizerFr();
var analyzer = new natural_1.SentimentAnalyzer("French", natural_1.PorterStemmerFr, "pattern");
function frenchSentimentAnalyser(sentence) {
    if (!sentence.trim()) {
        return enums_1.Sentiment.NEUTRAL;
    }
    //remove special caracters
    var tokenized = tokenizer.tokenize(sentence);
    //remove stop words
    var stopWordsRemoved = stopword_1.default.removeStopwords(tokenized);
    return analyzer.getSentiment(stopWordsRemoved) < 0 ? enums_1.Sentiment.NEGATIVE : enums_1.Sentiment.POSITIVE;
}
exports.frenchSentimentAnalyser = frenchSentimentAnalyser;
