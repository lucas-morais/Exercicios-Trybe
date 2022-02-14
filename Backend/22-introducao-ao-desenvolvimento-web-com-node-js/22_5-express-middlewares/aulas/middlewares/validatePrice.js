module.exports = (req, res, next) => {
  const { price } = req.body;
  if(!price || price === '')
    return res.status(400).json({message: 'Invalid data! \'price\' is required'});
  
  next();
}