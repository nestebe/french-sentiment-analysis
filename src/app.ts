import { AggressiveTokenizerFr, SentimentAnalyzer, PorterStemmerFr } from 'natural'
import stopword from 'stopword';


const sfd = require("./pattern-sentiment-fr.json")

const tokenizer = new AggressiveTokenizerFr();
const analyzer = new SentimentAnalyzer("French", PorterStemmerFr, "pattern")



function getSentiment(sentence: string): any {
    if (!sentence.trim()) {
        return 0
    }

    console.log(sentence)
    //remove special caracters


    const tokenized = tokenizer.tokenize(sentence)

    const stopWordsRemoved = stopword.removeStopwords(tokenized)

    console.log(stopWordsRemoved)


    return analyzer.getSentiment(stopWordsRemoved)
}

