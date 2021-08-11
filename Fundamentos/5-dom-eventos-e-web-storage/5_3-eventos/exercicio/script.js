function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// 1.
function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');
  for (let day of dezDaysList) {
    const dayItem = document.createElement('li');
    dayItem.innerText = day;
    dayItem.classList.add('day');

    if (day === 24 || day === 25 || day === 31){
      dayItem.classList.add('holiday');
    }

    if ((day % 7) === 4 ){
      dayItem.classList.add('friday');
    }

    daysList.appendChild(dayItem);
  }
}

// Criando dias
createDays();

// 2.

function criaBotaoFeriado(nomeDoBotao){
  const containerDeBotoes = document.querySelector('.buttons-container');

  const botao = document.createElement('button');
  botao.id = 'btn-holiday';
  botao.innerText = nomeDoBotao;
  
  containerDeBotoes.appendChild(botao);
  
}
criaBotaoFeriado('Feriado');

// 3.
function mudaCorDoBotao() {
  const botaoFeriado = document.querySelector('#btn-holiday');
  const estadoDoBotao = false;
  const corInicial = 'rgb(238, 238, 238)'; 

  botaoFeriado.addEventListener('click', function(evento) {
    
    if (evento.target.style.backgroundColor !== 'seagreen') {
      botaoFeriado.style.backgroundColor = 'seagreen';
    } else {
      botaoFeriado.style.backgroundColor = corInicial;
    }

    !estadoDoBotao;
  });
}

mudaCorDoBotao();

// 4.
function criaBotaoSexta(nomeDoBotao) {
  
  const containerDeBotoes = document.querySelector('.buttons-container');

  const botao = document.createElement('button');
  botao.id = 'btn-friday';
  botao.innerText = nomeDoBotao;

  containerDeBotoes.appendChild(botao);
}

criaBotaoSexta('Sexta-Feira');

// 5.
function modificaValorSextas() { 
  const diasSextas = [4, 11, 18, 25];
  const novoTexto = 'SEXTA';
  const sextas = document.querySelectorAll('.friday');

  const botaoSexta = document.querySelector('#btn-friday');
  botaoSexta.addEventListener('click', function() {
  
    for (let index = 0; index < diasSextas.length; index += 1) {
      if (sextas[index].innerText == novoTexto){
        sextas[index].innerText = diasSextas[index];
      } else {
        sextas[index].innerText = novoTexto;
      }
    }
  });
}

modificaValorSextas();

// 6.

function zoomIn() {
  const dias = document.querySelectorAll('.day');

  dias.forEach( dia => {
    dia.addEventListener ('mouseover', function(evento) {
      evento.target.style.transform = 'scale(2, 2)';
    })
  });
}

function zoomOut() {
  const dias = document.querySelectorAll('.day');

  dias.forEach( dia => {
    dia.addEventListener ('mouseleave', function (evento) {
      evento.target.style.transform = 'scale(1, 1)';
    })
  });  
}

zoomIn();
zoomOut();



// 7.
function adicionaTarefa(tarefa) {
  const minhaLista = document.querySelector('.my-tasks');
  const elementoTarefa = document.createElement('span');
  elementoTarefa.innerText = tarefa;
  minhaLista.appendChild(elementoTarefa);
}

adicionaTarefa('Estudar javascript');

// 8.
function adicionaLegendaATarefa(cor) {
  
  const minhaLista = document.querySelector('.my-tasks');
  const legenda = document.createElement('div');
  legenda.className = 'task';
  legenda.style.backgroundColor = cor;
  minhaLista.appendChild(legenda)

}

adicionaLegendaATarefa('seagreen');

// 9.
function modificaClasseDeLegenda(){
  const legendaTasks = document.querySelectorAll('.task');
  const novaLegenda = 'task selected'

  legendaTasks.forEach( legenda => {
    legenda.addEventListener ('click', function (evento){
      if(evento.target.className === novaLegenda) {
        evento.target.className = 'task';
      } else {
        evento.target.className = novaLegenda;
      }
    })
  });
}

modificaClasseDeLegenda();

// 10.
function marcaTarefa() {
  const dias = document.querySelectorAll('.day');
  const task = document.querySelector('.task');
  const corDia = 'rgb(119,119,119)';
  
  dias.forEach( dia => {
    dia.addEventListener ('click', function (evento){
      if (evento.target.style.color === task.style.backgroundColor) {
        evento.target.style.color = corDia;
      } else if (task.className === 'task selected') {
        evento.target.style.color = task.style.backgroundColor;
      } 
    })  
  });
}

marcaTarefa();

// Bônus

function adicionarCompromissos() {
  const botaoAdicionar = document.querySelector('#btn-add');
  const textoAdicionar = document.querySelector('#task-input');
  const listaCompromissos = document.querySelector('.task-list');

  botaoAdicionar.addEventListener('click', function (evento) {
    
    const itemLista = document.createElement('l1');
    const tarefa = textoAdicionar.value;
    if (tarefa) {
      itemLista.innerText = tarefa;
      listaCompromissos.appendChild(itemLista);
      listaCompromissos.appendChild(document.createElement('br'));
    } else {
      alert('Error: Adicione um texto!');
    }
  });
  
  textoAdicionar.addEventListener('keyup', function (evento){
    const tecla = evento.code;
      if (tecla === 'Enter') {
        const itemLista = document.createElement('l1');
        const tarefa = textoAdicionar.value;
      if (tarefa) {
        itemLista.innerText = tarefa;
        listaCompromissos.appendChild(itemLista);
        listaCompromissos.appendChild(document.createElement('br'));
      } else {
        alert('Error: Adicione um texto!');
      }
    }
  });
}  
adicionarCompromissos();  