module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    mutant_skills: DataTypes.INTEGER,
  });

  return Skill;
};
