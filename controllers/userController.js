const { User } = require('../app/models');
const bcript = require('bcryptjs');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    res.send({ users });
  },

  async register(req, res) {
    const { login, password } = req.query;

    if (await User.findOne({ where: { login } })) {
      return res.send({ message: '😒 Esse login ja existe' });
    }

    try {
      const criptedPassword = await bcript.hash(password, 3);
      await User.create({ login, password: criptedPassword });
      res.send({ message: '✔ Usuario cadastrado com sucesso' });
    } catch (error) {
      res.send({ message: '❌ Erro ao cadastrar um usuario', error: error.message });
    }
  },

  async authenticate(req, res) {
    const { login, password } = req.query;
    const user = await User.findOne({ where: { login } });
    if (!user) return res.send('😢 Usuario inexistente');
    if (!(await bcript.compare(password, user.password))) {
      return res.status(400).json({ message: '❌ Senha incorreta' });
    }
    return res.send({ message: '✔ Login efetuado' });
  },
};
