const express = require('express');
const routes = require('./routes');

const PORT = 3000;

app = express()

app.use(express.json());

//rotas
routes(app);

app.listen(PORT, () => { console.log('App runnig on port 3000') });