const { Course, Student, Module, sequelize } = require('../models');

const createCourse = async ({ name, description, creationDate, active, duration,
  modules,
}) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newCourse = await Course.create(
        { name, description, creationDate, active, duration, modules },
        {
          include: [{ model: Module, as: 'modules' }],
          transaction: t,
        },
      );

      return newCourse;
    });
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getCourses = async () => Course.findAll({
  include: [
    {
      model: Student, 
      as: 'students',
      attributes: { exclude: 'idCourse' },
    },
    {
      model: Module,
      as: 'modules',
      through: { attributes: [] },
    },
  ],
});

const updateCourse = async (id, { name, description, creationDate, active, duration }) => {
  const [qtdUpdated] = await Course.update(
    { name, description, creationDate, active, duration },
    { where: { id } },
  );

  return qtdUpdated > 0;
};

const removeCourse = async (id) => {
  const qtdRemoved = await Course.destroy({ where: { id } });

  return qtdRemoved > 0;
};

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  removeCourse,
};