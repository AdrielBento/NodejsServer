module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('Mutants', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    photo: {
      allowNull: false,
      type: DataTypes.BLOB,
    },
    id_user: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    active: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    skill1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    skill2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    skill3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }),

  down: queryInterface => queryInterface.dropTable('Mutants'),
};
