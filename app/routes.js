const express = require('express');
// const multer = require('multer');
const usersController = require('../controllers/userController');
const mutantsController = require('../controllers/mutantController');

// const upload = multer({ dest: 'uploads/' });
const routes = express.Router();
routes.get('/users', usersController.index);
routes.get('/authenticate', usersController.authenticate);
routes.post('/register/user', usersController.register);

routes.get('/list', mutantsController.list);
routes.post('/register/mutant', mutantsController.register);
routes.delete('/delete/mutant', mutantsController.delete);
routes.post('/update/mutant', mutantsController.update);
routes.get('/search/mutant', mutantsController.search);

routes.get('/', (req, res) => {
  res.send('Bem vindo ao cadastro de mutantes');
});

module.exports = routes;
