module.exports = (sequelize, DataTypes) => {
  const Mutant = sequelize.define('Mutant', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    active: DataTypes.INTEGER,
    skill1: DataTypes.STRING,
    skill2: DataTypes.STRING,
    skill3: DataTypes.STRING,
  });

  return Mutant;
};
