# french-sentiment-analysis
Sentiment analysis is the process of detecting positive or negative sentiment in **french** text



## Install package

```sh
npm i french-sentiment-analysis 
```



## Usage

```js
const { FrenchSentimentAnalyzer, Sentiment } = require("./lib/index.js")

console.log(FrenchSentimentAnalyzer.getSentiment("ce programme est super"))
//1

console.log(FrenchSentimentAnalyzer.getSentiment("ce programme est mauvais"))
//-1

const positiveResult = FrenchSentimentAnalyzer.getSentiment("ce programme est super")
console.log(positiveResult === Sentiment.POSITIVE)
//true

const positiveResult = FrenchSentimentAnalyzer.getSentiment("ce programme est super")
console.log(positiveResult === Sentiment.NEGATIVE)
//false

const negativeResult = FrenchSentimentAnalyzer.getSentiment("ce programme est mauvais")
console.log(positiveResult === Sentiment.NEGATIVE)
//true

const negativeResult = FrenchSentimentAnalyzer.getSentiment("ce programme est mauvais")
console.log(positiveResult === Sentiment.POSITIVE)
//false


```

