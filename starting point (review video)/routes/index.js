const Promise = require('bluebird');
const router = require('express').Router();
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Day = require('../models/day');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/options', function (req, res, next) {

    Promise.all([
        Hotel.findAll(),
        Restaurant.findAll(),
        Activity.findAll()
    ])
        .spread(function (hotels, restaurants, activities) {
            res.send({
                hotels: hotels,
                restaurants: restaurants,
                activities: activities
            });
        });

});

router.use('/attractions', require('./api/attractions'));
router.use('/days', require('./api/days'));


module.exports = router;
