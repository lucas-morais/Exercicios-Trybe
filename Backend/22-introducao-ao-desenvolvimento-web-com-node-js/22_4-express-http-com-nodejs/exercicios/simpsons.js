const express = require('express');
const { readSimpsonsFile, createSimpsonsFile } = require('./simpsonsFile');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const conteudo = await readSimpsonsFile();
    return res.status(200).json(conteudo);
  } catch (error) {
    res.status(500).json({ message: 'Arquivo inexistente' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const conteudo = await readSimpsonsFile();
    const personagem = conteudo.find((p) => p.id === id);
    console.log(personagem)
    return personagem
      ? res.status(200).json(personagem)
      : res.status(404).json({ message: 'simpson not found' });
  } catch (error) {
    res.status(500).json({ message: 'Arquivo inexistente' });
  }
});

router.post('/', async (req, res) => {
  const { id, name} = req.body;
  console.log(id)
  try {
    const conteudo = await readSimpsonsFile();
    const idExiste = conteudo.some((p) => p.id === `${id}`);
    console.log(idExiste)
    if(idExiste) {
      return res.status(409).json({message: 'id already exists'});
    }
    conteudo.push({id: `${id}`, name})
    await createSimpsonsFile(conteudo);
    res.status(204).end();

  } catch (error) {
    res.status(500).json({ message: 'Arquivo inexistente' });
  }
});

module.exports = router;
