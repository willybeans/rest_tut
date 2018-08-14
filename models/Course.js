const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Course = new Schema({
	course_name: {
		type: String
	},
	course_price: {
		type: Number
	}
},{
	collect: 'courses'
});

let model
try {
	model = mongoose.model('Course')
} catch (error) {
	model = mongoose.model('Course', Course);
}

module.exports = model;
