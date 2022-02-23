const express = require('express');
const movieRouter = require('./routes/movieRouter');


const PORT = 3000;

app = express()

app.use(express.json());

app.use('/movie', movieRouter);

app.listen(PORT, () => { console.log('App runnig on port 3000') });