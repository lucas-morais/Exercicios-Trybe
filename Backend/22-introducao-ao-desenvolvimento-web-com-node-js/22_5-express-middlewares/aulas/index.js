const express = require('express');
const authMiddleware = require('./middlewares/authMiddleware');
const recipesRouter = require('./routes/recipesRouter')

const app = express();
app.use(express.json());


app.get('/open', (req, res) => {
  return res.json({message: 'open'})
})

app.get('/closed', authMiddleware, (req, res) => {
  return res.json({message: 'closed'})
})

app.use('/recipes', recipesRouter)

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});