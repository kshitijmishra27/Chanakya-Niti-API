const quotes = require('./niti.json');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let quotesLength = quotes.length;
let randomQuoteIndex;

app.get('/' , (req, res)=>{
    randomQuoteIndex = (Math.random() * quotesLength) | 0;
    res.send(quotes[randomQuoteIndex]);
});  

app.listen(4000, ()=>{
    console.log(`server started at 4000`);
});