var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');

var Day = db.define('day', {
	number: Sequelize.INTEGER
});

Day.hook('beforeSave', function(day) {
	return Day.findAll()
	.then(days => {
		day.number = days.length + 1;
	});
});

module.exports = Day;
