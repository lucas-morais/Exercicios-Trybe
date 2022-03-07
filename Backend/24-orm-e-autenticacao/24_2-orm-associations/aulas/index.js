const express = require('express');
const { Address, Employee } = require('./models');

const PORT = 3000;

app = express()

app.use(express.json());

app.get('/employees', async(_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: {model: Address, as: 'addresses'}
    })
    return res.status(200).json(employees);
  } catch(e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
})


app.listen(PORT, () => { console.log('App runnig on port 3000') });