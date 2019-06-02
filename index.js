const express = require('express');
const { User } = require('./app/models');
const routes = require('./app/routes');

const app = express();

// User.create({ login: 'adriel', password: '123' });
app.use('/', routes);
// app.get('/user', (req, res) => {});

app.listen(3000);
console.log('Rodando');
