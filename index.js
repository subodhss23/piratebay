const piratebay = require('thepiratebay');

const express = require('express');
const app = express();
const router = express.Router();

app.get('/',function(req, res){
  const result = piratebay.search('lightroom')
  .then(results => res.json(results))
  .catch(err => console.log(err));
})

app.listen(3000, function(){
  console.log('listening to port 3000');
})


