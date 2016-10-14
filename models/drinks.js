var mongoose = require('mongoose');

var DrinkSchema = mongoose.Schema({
	name: String,
	score: Number
});

module.exports = mongoose.model('Drink', DrinkSchema);