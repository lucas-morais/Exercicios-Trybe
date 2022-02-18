const express = require('express');
const userRouter = require('./routes/userRouter');

const PORT = 3000;

app = express()

app.use(express.json());
app.use('/user', userRouter);

app.listen(PORT, () => { console.log('App runnig on port 3000') });