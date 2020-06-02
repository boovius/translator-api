// set up env config
require('dotenv').config()

// set up express
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 8080

// set up google translate
const { Translate } = require('@google-cloud/translate').v2;

const translater = new Translate();

async function translateText(from, target) {
  // Translates the text into the target language. "from" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translater.translate(from, target);
  console.log('translations', translations);
  return Array.isArray(translations) ? translations : [translations];
}


app.post('/', async (req, res) => {
  console.log(req.body);
  const { from, target } = req.body;
  const translations = await translateText(from, target);
  res.json({translations});
})

app.listen(port, () => { console.log('listening on port: ', port) })
