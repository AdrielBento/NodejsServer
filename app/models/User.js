module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('User', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return Usuario;
};
