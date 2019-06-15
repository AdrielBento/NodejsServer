const bcript = require('bcryptjs');
const Sequelize = require('sequelize');
const fs = require('fs');
const skillController = require('./skillController');
const { Mutant, Skill } = require('../app/models');

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
      } = req.body;

      if (await Mutant.findOne({ where: { name, active: 1 } })) {
        return res.send({ message: 'Esse Mutantante ja existe', error: '' });
      }
      //   await saveImage.
      await Mutant.create({
        name,
        photo,
        id_user,
        active: 1,
        skill1,
        skill2,
        skill3,
      });

      res.send({ message: 'Mutante cadastrado com sucesso', error: '' });
    } catch (error) {
      res.send({ message: 'Erro ao cadastrar um mutante', error: error.message });
    }
  },

  async saveImage() {
    const base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA';
    fs.writeFile('image.png', base64Image, { encoding: 'base64' }, (err) => {
      console.log('File created');
    });
  },

  async destroy(req, res) {
    try {
      const { id } = req.query;

      Mutant.destroy({ where: { id } });
      res.send({ message: 'Mutante excluido com sucesso' });
    } catch (error) {
      res.send({ message: 'Erro ao deletar esse mutante', error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.query;
      const mutant = await Mutant.findByPk(id);
      await mutant.update({ active: 0 });
      res.send({ message: 'Mutante excluido com sucesso' });
    } catch (error) {
      res.send({ message: 'Erro ao deletar esse mutante', error: error.message });
    }
  },

  async update(req, res) {
    try {
      const {
        name, skill1, skill2, skill3, photo, id,
      } = req.body;
      const mutant = await Mutant.findByPk(id);

      await mutant.update({
        name,
        photo,
        skill1,
        skill2,
        skill3,
      });

      res.send({ message: 'Mutante atualizado com sucesso' });
    } catch (error) {
      res.send({ message: 'Erro ao atualizar esse mutante', error: error.message });
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
      res.send({ message: 'Erro ao buscar mutantes', error: error.message });
    }
  },
};
