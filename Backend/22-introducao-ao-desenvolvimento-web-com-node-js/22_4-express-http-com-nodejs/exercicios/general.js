const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  console.log('teste');
  res.send('Exercícios');
});

// 1.
router.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

// 2.
router.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` });
});

router.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  return age > parseInt(17) ? 
    res.status(200).json({message: `Hello, ${name}!`}) :
    res.status(401).json({message: 'Unauthorized'}) 
})

router.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`
  })
});

module.exports = router;
