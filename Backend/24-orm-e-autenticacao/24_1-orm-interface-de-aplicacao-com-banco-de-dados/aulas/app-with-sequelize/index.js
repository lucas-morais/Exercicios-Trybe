const express = require('express');
const userController = require('./controllers/userContorller');

const PORT = 3000;

app = express();

app.use(express.json());

app.use('/user', userController);

app.listen(PORT, () => { console.log('App runnig on port 3000') });