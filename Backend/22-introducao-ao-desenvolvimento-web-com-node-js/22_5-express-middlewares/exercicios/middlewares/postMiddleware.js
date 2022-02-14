const postExists = require('../services/postExists')

function postIdValidate(req, res, next) {
    const { id } = req.params;
    const post = postExists(id)    
    if(!post){
      return res.status(200).json({message:'post not found'})
    }
    req.post = post;
    next();  
}

module.exports = postIdValidate;