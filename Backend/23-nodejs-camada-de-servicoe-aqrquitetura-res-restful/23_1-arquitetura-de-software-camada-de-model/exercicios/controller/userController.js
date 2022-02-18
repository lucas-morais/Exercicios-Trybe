const User = require('../models/User');

async function createUser(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.create(firstName, lastName, email, password);

  return res.status(201).json(user);
}

async function getAllUsers(_req, res) {
  const users = await User.getAll();
  return res.status(200).json(users);
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.getById(parseInt(id));
    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    return res.status(404).json({ message: 'Not found' });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const user = await User.update(
    firstName,
    lastName,
    email,
    password,
    parseInt(id)
  );
  if (!user) {
    return res.status(404).json({ message: 'not found' });
  }
  return res.status(200).json(user);
}
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
};
