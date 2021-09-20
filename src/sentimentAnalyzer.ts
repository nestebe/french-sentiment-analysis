import { AggressiveTokenizerFr, SentimentAnalyzer, PorterStemmerFr } from 'natural'
import stopword from 'stopword';

import { Sentiment } from './enums'

const tokenizer = new AggressiveTokenizerFr();
const analyzer = new SentimentAnalyzer("French", PorterStemmerFr, "pattern")


export class FrenchSentimentAnalyzer {

    static getSentiment(sentence: string): Sentiment {
        if (!sentence.trim()) {
            return Sentiment.NEUTRAL
        }

        //remove special caracters
        const tokenized = tokenizer.tokenize(sentence)
        //remove stop words
        const stopWordsRemoved = stopword.removeStopwords(tokenized)

        return analyzer.getSentiment(stopWordsRemoved) < 0 ? Sentiment.NEGATIVE : Sentiment.POSITIVE
    }

}