const express = require('express');
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');

const PORT = 3000;

app = express()

app.use(express.json());

app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.listen(PORT, () => { console.log('App runnig on port 3000') });