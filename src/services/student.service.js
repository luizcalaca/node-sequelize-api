const { Student, Course } = require('../models');

const createStudent = async ({ name, email, birthday, active, idCourse }) =>
  Student.create({ name, email, birthday, active, idCourse });

const getStudents = async () =>
  Student.findAll({
    attributes: ['name', 'email'],
    include: { model: Course, as: 'course' },
    where: { active: true },
  });

module.exports = { getStudents, createStudent };