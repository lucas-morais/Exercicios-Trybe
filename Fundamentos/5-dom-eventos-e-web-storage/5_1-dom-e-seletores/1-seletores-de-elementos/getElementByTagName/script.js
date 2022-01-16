const paragrafos = document.getElementsByTagName('p');
for (let i = 0; i < paragrafos.length; i += 1){
  console.log(paragrafos[i].innerText);
}

const divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i += 1){
  console.log(divs[i].innerText);
}