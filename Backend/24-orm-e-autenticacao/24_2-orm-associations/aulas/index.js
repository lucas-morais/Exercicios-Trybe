const express = require('express');
const { Address, Employee, Book, User } = require('./models');

const Sequelize = require('sequelize');

const config = require('./config/config');

const sequelize = new Sequelize(config.development);

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

app.get('/employees/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where:{ id },
      include:[{ 
        model: Address, 
        as: 'addresses',
        attributes: { exclude: ['number']}
      }]
    })

    if(!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado'})
    }

    return res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado'});
  }
});

app.get('/userbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        userId: id
      },
      include: [{ model: Book, as: 'books', trough: { attributes: [] } }]
    });

    if(!user) {
      return res.status(404).json({ message: 'Ususário não encontrado' })
    }

    return res.status(200).json(user);
  } catch( error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

app.post('/employees', async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;
    
    await sequelize.transaction( async (t) => {
      const employee = await Employee.create(
        {firstName, lastName, age},
        {transaction: t},
      )

      console.log(employee)
      await Address.create(
        {city, street, number, employeeId: employee.id },
        { transaction: t}
      )

      return res.status(201).json({message: 'Cadastrado com sucesso'});
    })
  

  } catch(error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  } 
})


app.listen(PORT, () => { console.log('App runnig on port 3000') });