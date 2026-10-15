const express = require('express');
const path = require('path');
const portfolioRoutes = require('./routes/portifolio.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', portfolioRoutes);

app.use((erro, req, res, next) => {
  console.error('Erro ao processar a requisição:', erro.code || erro.name || 'erro desconhecido');
  if (res.headersSent) return next(erro);
  res.status(500).send('Não foi possível carregar o portfólio. Verifique a conexão com o banco de dados.');
});

module.exports = app;
