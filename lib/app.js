"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSentiment = void 0;
var natural_1 = require("natural");
var stopword_1 = __importDefault(require("stopword"));
var sfd = require("../pattern/pattern-sentiment-fr.json");
var tokenizer = new natural_1.AggressiveTokenizerFr();
var analyzer = new natural_1.SentimentAnalyzer("French", natural_1.PorterStemmerFr, "pattern");
function getSentiment(sentence) {
    if (!sentence.trim()) {
        return 0;
    }
    console.log(sentence);
    //remove special caracters
    var tokenized = tokenizer.tokenize(sentence);
    var stopWordsRemoved = stopword_1.default.removeStopwords(tokenized);
    console.log(stopWordsRemoved);
    return analyzer.getSentiment(stopWordsRemoved);
}
exports.getSentiment = getSentiment;
