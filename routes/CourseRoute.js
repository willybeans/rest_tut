const express = require('express');
const app = express();
const router = express.Router();

const Course = require('../models/course');

router.route('/add').post(function (req, res) {
	const course = new Course(req.body);
	console.log("course : " + course);
	console.log("req.body : " + JSON.stringify(req.body));
	//console.log(req);
	course.save()
	.then (course => {
	res.status(200).json({'course': 'course added successfully'})
	})
	.catch(err => {
	res.status(400).send('unable to save the course into db');
	});
});

router.route('/').get(function (req, res) {
	Course.find(function (err, courses){
		if(err) {
			console.log(err);
		} else {
			res.json(courses);
		}
	});
});

router.route('/updata/:id').put(function (req, res) {
	Courses.findById(req.params.id, function(err, course) {
		if (!course)
		return next(new Error('could not load document'));
		else {
			course.course_name = req.body.course_name;
			course.course_price = req.body.course_price;

			course.save().then(course => {
				res.json('Successfully Updated');
			})
			.catch(err => {
				res.status(400).send('unable to update the sdatabase');
			});
		}
	});
});

router.route('/delete/:id').delete(function (req,res) {
	Course.findByIdAndRemove({_id: req.params.id}, function(err,course){
		if(err) res.json(err);
		else res.json('Succesfully removed');
	});
});

module.exports = router;
