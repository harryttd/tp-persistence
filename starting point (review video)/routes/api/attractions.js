const router = require('express').Router();
const db = require('../../models/_db');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/hotels', function(req, res, next) {
  Hotel.findAll()
  .then((result) => {
    res.send(result);
  });
});

router.get('/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then((result) => {
    res.send(result);
  });
});

router.get('/activities', function(req, res, next) {
  Activity.findAll()
  .then((result) => {
    res.send(result);
  });
});

module.exports = router;
