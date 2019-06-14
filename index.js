const express = require('express');
const { User } = require('./app/models');
const routes = require('./app/routes');
const bodyParser = require('body-parser');

const app = express();

// User.create({ login: 'adriel', password: '123' });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
// app.get('/user', (req, res) => {});

app.listen(3000);
console.log('============ RODANDO NA PORTA 3000 ============');
