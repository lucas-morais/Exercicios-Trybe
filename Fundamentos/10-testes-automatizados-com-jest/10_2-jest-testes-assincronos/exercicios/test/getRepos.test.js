const getRepos = require('../src/getRepos.js');
const URL = 'https://api.github.com/orgs/tryber/repos';

describe('Testing getRepos', () => {
  it('The response should contain the repository: sd-01-week4-5-project-todo-list', () => {
    return expect(getRepos(URL)).resolves.toContain('sd-01-week4-5-project-todo-list');
  });
  it('The response should contain the repository: sd-01-week4-5-project-meme-generator', () => {
    
  return expect(getRepos(URL)).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});