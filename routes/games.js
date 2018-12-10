var express = require('express');
var SwitchEshop = require('nintendo-switch-eshop');

var router = express.Router();
var currentGameList = { games: {}, updateTime: '' };

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('GET /games');
  const returnValue = updateGames()
    .then(() => {
      res.send(currentGameList);
    })
    .catch(() => {
      res.send(currentGameList);
    });
});

const updateGames = async () => {
  const requestOptions = {
    locale: '',
    shop: 'all'
  };
  const updateData = true;

  if (currentGameList.updateTime !== '') {
    const lastUpdateTime = new Date(currentGameList.updateTime);
    const hourago = new Date(new Date() - 1000 * 60 * 60);
    //const hourago = new Date(new Date());

    console.log(`updateGames updateTime: ${lastUpdateTime}`);
    console.log(`updateGames hourago: ${hourago}`);

    if (lastUpdateTime > hourago) {
      console.log("don't update");
      updateData = false;
    } else {
      console.log('do update');
      updateData = true;
    }
  }

  if (updateData) {
    try {
      const value = await SwitchEshop.getGamesAmerica([requestOptions]);
      //console.log(value);
      currentGameList = {
        games: value,
        updateTime: new Date()
        // .toJSON()
        // .slice(0, 19)
        // .replace(/[-T]/g, ':')
      };
      console.log(`After updateGames, games length: ${Object.keys(currentGameList.games).length}`);
    } catch (error) {
      console.log('Request Error: ' + error);
    }
  }
};

var minutes = 60,
  the_interval = minutes * 60 * 1000;

setInterval(() => {
  console.log(
    `grabbing new data ${new Date()
      .toJSON()
      .slice(0, 19)
      .replace(/[-T]/g, ':')}`
  );
  console.log(`Before updateGames, games length: ${Object.keys(currentGameList.games).length}`);
  updateGames();
  // do your stuff here
}, the_interval);

module.exports = router;
