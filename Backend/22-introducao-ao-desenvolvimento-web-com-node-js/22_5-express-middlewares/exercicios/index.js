const express = require('express');
const userRouter = require('./routes/userRouter');
const btcRouter = require('./routes/btcRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/btc', btcRouter);
app.use(errorMiddleware);

app.listen(PORT, () =>{
  console.log(`App rodando na prota ${PORT}`);
})

