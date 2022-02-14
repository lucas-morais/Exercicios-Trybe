const posts = require('../mock/postsData');
function getPostById(req, res) {
  const { post } = req;
  return res.status(200).json({post})
} 

function getPosts(req, res) {
  return res.status(200).json({posts});
}

module.exports = { getPostById, getPosts }