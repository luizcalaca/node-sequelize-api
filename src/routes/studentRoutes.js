const express = require('express');
const studentController = require('../controllers/student.controller');

const routers = express.Router();

routers.post('/', studentController.createStudent);
routers.get('/', studentController.getStudents);

module.exports = routers;