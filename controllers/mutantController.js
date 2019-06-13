const { Mutant, Skill } = require('../app/models');
const skillController = require('./skillController');
const bcript = require('bcryptjs');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

module.exports = {
  async list(req, res) {
    const mutants = await Mutant.findAll({ where: { active: 1 } });
    res.send(mutants);
  },

  async register(req, res) {
    try {
      const {
        name, skill1, skill2, skill3, photo, id_user,
      } = req.query;

      if (await Mutant.findOne({ where: { name, active: 1 } })) {
        return res.send({ message: '😒 Esse Mutantante ja existe' });
      }

      await Mutant.create({
        name,
        photo,
        id_user,
        active: 1,
        skill1,
        skill2,
        skill3,
      });

      res.send({ message: '✔ Mutante cadastrado com sucesso' });
    } catch (error) {
      res.send({ message: '❌ Erro ao cadastrar um mutante', error: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.query;

      Mutant.destroy({ where: { id } });
      res.send({ message: '✔ Mutante excluido com sucesso' });
    } catch (error) {
      res.send({ message: '❌ Erro ao deletar esse mutante', error });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.query;
      const mutant = await Mutant.findByPk(id);
      await mutant.update({ active: 0 });
      res.send({ message: '✔ Mutante excluido com sucesso' });
    } catch (error) {
      res.send({ message: '❌ Erro ao deletar esse mutante', error: error.message });
    }
  },

  async update(req, res) {
    try {
      const {
        name, skill1, skill2, skill3, photo, id,
      } = req.query;
      const mutant = await Mutant.findByPk(id);

      await mutant.update({
        name,
        photo,
        skill1,
        skill2,
        skill3,
      });

      res.send({ message: '✔ Mutante atualizado com sucesso' });
    } catch (error) {
      res.send({ message: '❌ Erro ao atualizar esse mutante', error: error.message });
    }
  },

  async search(req, res) {
    try {
      const { skill } = req.query;
      const mutant = await Mutant.findAll({
        where: {
          [Op.or]: [
            {
              skill1: {
                [Op.like]: `%${skill}%`,
              },
            },
            {
              skill2: {
                [Op.like]: `%${skill}%`,
              },
            },
            {
              skill3: {
                [Op.like]: `%${skill}%`,
              },
            },
          ],
        },
      });

      res.send(mutant);
    } catch (error) {
      res.send({ message: '❌ Erro ao buscar mutantes', error: error.message });
    }
  },
};
