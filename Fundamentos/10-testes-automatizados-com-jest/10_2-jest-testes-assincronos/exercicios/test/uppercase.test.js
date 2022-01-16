const uppercase = require('../src/uppercase.js');
const string = 'this is a test';
test('if the string is transformed to uppercase', (done) => {
  uppercase(string, (result) => {
    try {
      expect(result).toBe('THIS IS A TEST');
      done();
    } catch(error){
      done(error);
    }  
  });
});