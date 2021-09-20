# french-sentiment-analysis
Sentiment analysis is the process of detecting positive or negative sentiment in **french** text



## Install package

```sh
npm i french-sentiment-analysis 
```



## Usage

```js
const sentiment = require("french-sentiment-analysis")

console.log(sentiment.getSentiment("ce programme est super"))
//1

console.log(sentiment.getSentiment("ce programme est mauvais"))
//-1
```

