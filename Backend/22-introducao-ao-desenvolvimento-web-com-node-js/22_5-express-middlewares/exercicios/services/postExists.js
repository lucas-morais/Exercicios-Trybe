const posts = require('../mock/postsData');


function postExists(id) {
  const index = posts.findIndex((post) => post.id === parseInt(id))
  return index === - 1 ? false : posts[index]
}

module.exports = postExists