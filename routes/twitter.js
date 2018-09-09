const express = require('express');
const router  = express.Router();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.TOKEN_SECRET
});

/* GET home page. */
router.get('/twitter', (req, res, next) => {
  client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=sgnclexus&count=5', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites.
    console.log(response);  // Raw response object.
    var myJSON = JSON.stringify(response);
    res.render('twitter',{ message: "consultando twitter", tweets, datos: response.body, data: myJSON});  
  });  
});

router.get('/twitter/:word', (req, res, next) => {
  console.log(req.params.word);
  client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+ req.params.word +'&count=3', function(error, tweets, response) {
    if(error) throw error;
    //console.log(tweets);  // The favorites.
    //console.log(response);  // Raw response object.
    var myJSON = JSON.stringify(response.body);
    // console.log(response.body);
    var valor = response.body;
    console.log(typeof(valor))
    // var res = valor.split(" ");
    // console.log(res);
    var res2 = valor.split(",");
    console.log(res2[4]);
    res.status(200).json(res2[4]);
    // res.render('twitter',{ message: "consultando twitter", tweets, datos: response.body, data: myJSON});  
  });  
});


module.exports = router;
