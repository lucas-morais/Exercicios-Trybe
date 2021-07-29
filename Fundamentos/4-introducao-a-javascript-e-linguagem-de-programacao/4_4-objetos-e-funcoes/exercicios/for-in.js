let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1.
console.log("Exercicío 1\n");

console.log("Bem vinda, " + info.personagem);


// 2. 
console.log("\n\nExercício 2\n");

info.recorrente = 'Sim';
console.log(info);


// 3. 
console.log("\n\nExercício 3\n");

for (let key in info){
  console.log(key);
}


// 4.
console.log("\n\nExercício 4\n");

for (let key in info){
  console.log(info[key]);
}


// 5.
console.log("\n\nExercício 5\n");

let tio = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim'
}

for (let key in info){

  if (key ==='recorrente' && info[key] === tio[key] ){
    console.log('Ambos recorrentes');
  }
  else{
    console.log(info[key] + ' e ' + tio[key]);
  }
}
