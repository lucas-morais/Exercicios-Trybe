/* auth-middleware.js */
const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenha' },
  { username: 'McRonald', password: 'Senha123' },
  { username: 'Burger Queen', password: 'Senha123' },
  { username: 'UpWay', password: 'Senha123' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  if (!(username === foundUser.username  && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.

  next();
};

module.exports = authMiddleware;