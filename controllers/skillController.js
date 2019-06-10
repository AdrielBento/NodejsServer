const { Skill } = require('../app/models');
const bcript = require('bcryptjs');

module.exports = {
  /**
   *
   * @param {Array} ListSkills - [{ description:"Forte" },{ description:"Forte" },{ description:"Forte" }]
   */
  async register(ListSkills = []) {
    try {
      ListSkills.forEach((sk, index) => Skill.create({ description }));
    } catch (error) {
      throw { name: 'SkillException', message: error };
    }
  },

  async update() {},
};
