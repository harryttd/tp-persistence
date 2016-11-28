const router = require('express').Router();
const db = require('../../models/_db');
const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');
const Day = require('../../models/day');

router.route('/')

	.get((req,res,next) => {
		Day.findAll({
      include: [Hotel, Restaurant, Activity],
      order: 'number ASC'
    })
    .then(function (days) {
      res.send(days);
    })
    .catch(next);
	})

	.post((req, res, next) => {
		console.log(req.body);
	  return Day.create(req.body)
		  .then(function (createdDay) {
		    res.status(201).send(createdDay);
		  })
		  .catch(next);
	});

router.route('/:id')

	.delete((req,res,next) => {
		let id = req.params.id;
		Day.findById(id)
			.then(function(day) {
				return day.destroy();
			})
			.then(function () {
        res.sendStatus(204);
       })
			.catch(next);
	});

router.route('/:id/hotels')

	.get((req,res,next) => {
		let id = req.params.id;
		Hotel.findById(id)
			.then(function(foundHotel) {
				return foundHotel;
			})
			.catch(next);
	})

	.post((req,res,next) => {

	})

	.delete((req,res,next) => {

	})


router.route('/:id/restaurants')

	.get((req,res,next) => {
		let id = req.params.id;
		Restaurant.findById(id)
			.then(function(foundRestaurant) {
				return foundRestaurant;
			})
			.catch(next);
	})

	.post((req,res,next) => {

	})

	.delete((req,res,next) => {

	})

router.route('/:id/activities')

	.get((req,res,next) => {
		let id = req.params.id;
		Activity.findById(id)
			.then(function(foundActivity) {
				return foundActivity;
			})
			.catch(next);
	})

	.post((req,res,next) => {

	})

	.delete((req,res,next) => {

	})

module.exports = router;
