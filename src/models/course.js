const CourseSchema = (sequelize, DataTypes) => {
  const CourseTable = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
  },
  {
    tableName: 'courses',
    underscored: true,
  });
  //O hasMany é usado em tabelas que não possuem a foreign key, assumindo que essa referência vai estar na outra tabela.
  CourseTable.associate = (models) => {
    CourseTable.hasMany(models.Student, {
      as: 'students',
      foreignKey: 'id_course',
    });
  };

  return CourseTable;
};

module.exports = CourseSchema;