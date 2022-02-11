const express = require('express');
const autenticacao = require('./autenticacao');
const generalRouter = require('./general');
const simpsonsRouter = require('./simpsons');
const signupRouter = require('./signup');

const PORT = 3000;

const app = express();
app.use(express.json())
app.use(autenticacao);
app.use(generalRouter);
app.use('/simpsons', simpsonsRouter);
app.use(signupRouter);

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
})