const express = require('express');
const generalRouter = require('./general');
const simpsonsRouter = require('./simpsons');

const PORT = 3000;

const app = express();
app.use(express.json())
app.use(generalRouter);
app.use('/simpsons', simpsonsRouter);

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
})