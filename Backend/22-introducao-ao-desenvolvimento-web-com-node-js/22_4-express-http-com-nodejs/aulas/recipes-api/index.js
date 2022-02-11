const express = require('express');

const app = express();
app.use(express.json())

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes',(req, res) => {
  res.json(recipes.sort(( recipe1, recipe2 ) => {
    if(recipe1.name > recipe2.name)
      return 1
    else if(recipe1.name < recipe2.name)
      return -1
    return 0
  }));
})

app.get('/recipe/search', (req, res) => {
  const { name = '', maxValue = 1000, minValue = 0 } = req.query;
  const filteredRecipes = recipes.filter((r) => { 
    return r.name.includes(name) && r.price <= maxValue && r.price >= minValue
  });
  
  return res.status(200).json(filteredRecipes);
})


app.get('/recipe/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  return recipe ? res.status(200).json(recipe) : res.status(404).json({message: 'recipe not found'});
})

app.post('/recipe', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({id, name, price})
  res.status(201).json({message: 'Recipe created successfuly'});
})



app.get('/drinks',(req, res) => {
  res.json(drinks.sort((drink1, drink2 ) => {
    if(drink1.name > drink2.name)
    return 1
    else if(drink1.name < drink2.name)
    return -1
    return 0
  }));
})


app.get('/drink/search', (req, res) => {
  const { name = '', maxValue = 1000, minValue = 0 } = req.query;
  const filteredDrinks = drinks.filter((d) => { 
    return d.name.includes(name) && d.price <= maxValue && d.price >= minValue
  });
  
  return res.status(200).json(filteredDrinks);
})

app.get('/drink/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));
  return drink ? res.status(200).json(drink) : res.status(404).json({message: 'drink not found'});
})


app.listen(3000, () => {
  console.log('App rodando na porta 3000')
});