const express = require('express');
const usersController = require('../controllers/userController');

const routes = express.Router();
routes.get('/users', usersController.index);
routes.get('/authenticate', usersController.authenticate);
routes.post('/register/user', usersController.register);
routes.get;

routes.get('/', (req, res) => {
  res.send('Bem vindo ao cadastro de mutantes');
});

module.exports = routes;
