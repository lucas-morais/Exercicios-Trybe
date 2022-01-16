const myFizzBuzz = (num) => {
  let res = '';
  
  if(typeof num !== 'number') {
    return false;
  }
  res = (num % 3) === 0 ? res.concat('fizz') : res;  
  res = (num % 5) === 0 ? res.concat('buzz') : res;
  return res.length === 0 ? num : res;
};

module.exports = myFizzBuzz;
