const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddlewares');

const booksRouter = require('./routes/booksRouter');


const PORT = 3000;

app = express()

app.use(express.json());
app.use('/book', booksRouter);
app.use(errorMiddleware);

app.listen(PORT, () => { console.log('App runnig on port 3000') });