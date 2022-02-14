const express = require('express');
const userRouter = require('./routes/userRouter');
const btcRouter = require('./routes/btcRouter');
const postsRouter = require('./routes/postsRouter');
const teamsRouter = require('./routes/teamsRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');
const rootNotFoundMiddleware = require('./middlewares/routeNotFoundMiddleware');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/btc', btcRouter);
app.use('/posts', postsRouter);
app.use('/teams', teamsRouter);
app.use('*', rootNotFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`App rodando na prota ${PORT}`);
});
