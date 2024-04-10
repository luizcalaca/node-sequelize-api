const bcrypt = require('bcrypt');
const { Student, Course } = require('../models');

const login = async ({ name, password }) => {
  if (!name || !password) throw new Error('É necessário usuário e senha para fazer login'); 
  const userSearch = await Student.findAll({
    where: {
      name,
    },
  });
  const isMatch = bcrypt.compareSync(password, userSearch.password);
  
  if (!isMatch) throw new Error('Pessoa não existe ou senha inválida');
  
  return true;
};

const createStudent = async ({ name, email, birthday, active, idCourse, password }) => {
  const salt = bcrypt.genSaltSync(5);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  await Student.create({ name, email, birthday, active, idCourse, encryptedPassword });
};

const getStudents = async () =>
  Student.findAll({
    attributes: ['name', 'email'],
    include: { model: Course, as: 'course' },
    where: { active: true },
  });

module.exports = { getStudents, createStudent, login };