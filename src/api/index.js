const express = require('express');

const emojis = require('./emojis');
const marsWeather = require('./marsWeather');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/mars-weathers', marsWeather);

module.exports = router;
