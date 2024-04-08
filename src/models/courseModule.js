const CourseModuleSchema = (sequelize, DataTypes) => {
    const CourseModuleTable = sequelize.define(
      "CourseModule",
      {},
      {
        timestamps: false,
        tableName: "course_modules",
        underscored: true,
      },
    );
  
    CourseModuleTable.associate = ({ Module, Course }) => {
      Course.belongsToMany(Module, {
        as: "modules",
        through: CourseModuleTable,
        foreignKey: "idCourse",
        otherKey: "idModule",
      });
  
      Module.belongsToMany(Course, {
        as: "courses",
        through: CourseModuleTable,
        foreignKey: "idModule",
        otherKey: "idCourse",
      });
    };
  
    return CourseModuleTable;
  };
  
  module.exports = CourseModuleSchema;