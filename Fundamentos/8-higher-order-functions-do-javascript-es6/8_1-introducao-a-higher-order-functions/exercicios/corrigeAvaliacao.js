const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correctTests = (test, template, callback) => {
  return callback(test, template);  
}

const punctuation = (test, template) => {
  let totalPunctuation = 0;
  for (let index = 0; index < test.length; index += 1) {
    if( test[index] === template[index]) {
      totalPunctuation += 1;
    } else if (test[index] !== 'N.A') {
      totalPunctuation -= 0.5;
    }
  }
  if (totalPunctuation < 0) {
    totalPunctuation = 0;
  }
  return totalPunctuation;
}

console.log(correctTests(STUDENT_ANSWERS, RIGHT_ANSWERS, punctuation));