const studentService = require('../services/student.service');

const createStudent = async (req, res) => {
    const student = await studentService.createStudent(req.body);
    
    return res.status(201).json(student);
  };

const getStudents = async (_req, res) => {
  const students = await studentService.getStudents();

  return res.status(200).json(students);
};

const loginStudent = async (req, res) => {
  const student = await studentService.login(req.body);
  
  return res.status(200).json(student);
};

module.exports = {
  getStudents, createStudent, loginStudent,
};