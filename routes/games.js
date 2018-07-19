var express = require('express');
var SwitchEshop = require('nintendo-switch-eshop');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');
  const requestOptions = {
    locale: '',
    limit: 100,
    shop: 'all'
  };

  SwitchEshop.getGamesAmerica([requestOptions])
    .then(value => {
      //console.log(value);
      //return value; //set state here
      res.send(value);
    })
    .catch(error => {
      console.log('Promise Error: ' + error);
    });
});

module.exports = router;
