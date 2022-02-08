const fs = require('fs').promises;

const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
const files = Array.from(Array(strings.length).keys(), (_, index) => (
  `file${index + 1}.txt`
))

async function readAndCreatAllFiles() {
  
  try {
    await Promise.all(
      strings.map((string, index) => fs.writeFile(`file${index + 1}.txt`, string))
    );

    await Promise.all(
      files.map((file) => fs.readFile(file, 'utf-8'))
    ).then((content) => {
      return content.join(' ');
    }).then((fullContent) => fs.writeFile('fileAll.txt', fullContent))
      .catch(error => console.log(error.message));



  } catch(error) {
    console.log(error.message)
  } 
}


readAndCreatAllFiles();
