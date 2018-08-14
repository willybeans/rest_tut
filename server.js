const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Course = require('./models/Course');
const CourseRoute = require('./routes/CourseRoute');

const PORT = 4000;

const config = require('./db');

mongoose.connect(config.DB).then(
	() => {console.log('Database is connected') },
	err => {console.log('can not connectto the db' + err)}

);

app.use(bodyParser.json());
app.use('/course', CourseRoute);

app.listen(PORT, function() {
	console.log('Node server running on : ', PORT);
});
