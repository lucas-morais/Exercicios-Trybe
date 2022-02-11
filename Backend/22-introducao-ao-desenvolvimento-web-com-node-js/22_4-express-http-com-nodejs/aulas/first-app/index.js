const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.get('/hello', handleHelloWorldRequest);
app.listen(3000, () => console.log('App rodando na porta 3000'));


function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello, World!');
}