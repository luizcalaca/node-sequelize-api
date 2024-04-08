const express = require('express');
const courseController = require('../controllers/course.controller');

const routers = express.Router();

routers.post('/', courseController.createCourse);
routers.get('/', courseController.getCourses);
routers.put('/:id', courseController.updateCourse);
routers.delete('/:id', courseController.removeCourse);

module.exports = routers;