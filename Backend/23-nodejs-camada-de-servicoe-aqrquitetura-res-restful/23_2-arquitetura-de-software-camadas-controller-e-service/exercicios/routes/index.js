const pingRouter = require('./pingRouter');
const cepRouter = require('./cepRouter');

module.exports = (app) => {
  app.use('/ping', pingRouter);
  app.use('/cep', cepRouter);
};
