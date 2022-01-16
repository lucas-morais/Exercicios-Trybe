const estados = [
  'Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará',
  'Distrito Federal','Espírito Santo','Goiás','Maranhão',
  'Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará',
  'Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro',
  'Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima',
  'Santa Catarina','São Paulo','Sergipe','Tocantins'
];
const siglas = [
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
  'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'
];

const dropdown = document.getElementById('input-estado');

function createStatesDropdown() {
  for (let index = 0; index <= estados.length; index += 1) {
    const option = document.createElement('option');
    option.value = siglas[index];
    option.innerHTML = estados[index];
    dropdown.appendChild(option);
  }
}

createStatesDropdown();


const validationSettings = {
  nome: 40,
  email: 50,
  cpf: 11,
  endereco: 200,
  cidade: 28,
  curriculo: 1000,
  cargo: 40,
  descricao: 500,
}


const buttonSubmit = document.getElementById('buttonSubmit');
const buttonClear = document.getElementById('buttonClear');
const personalInfo = document.getElementById('personal');
const profesionalInfo = document.getElementById('profesional');
const validateInputs = document.getElementsByClassName('validate');
const validatedSection = document.getElementById('validated');

buttonSubmit.addEventListener('click', validateInfo);



function validateText(input, id) {
  let validated = null;
  const isNotNull = !(input.value === '');

  if(input.value.length <= validationSettings[id] && isNotNull) {
    validated = input.value; 
  }
  
  return validated;
}

function validateDate(input) {
  let validated = null;
  const regexp = new RegExp('([0-2][1-9]|3[01])(/)(0[0-9]|1[0-2])(/)(19[0-9]{2}|20[0-2][0-9])');
  if(regexp.test(input.value)){
    validated = input.value;
  }
  return validated;
}


function validateRadio(input) {
  let validated = null;
  for(child of input.children){
    if(child.firstElementChild.checked){
      validated = child.firstElementChild.value;
      break;
    }
  }
  return validated;
}

function validateDropdown(input) {
  let validated = null
  if(input.value !== 'none'){
    validated = input.value;
  }
  return validated;
}

function validateByType(input, type, id) {
  let validInput = null;
  switch(type) {
    case 'validate':
      validInput = validateText(input, id); 
      break;
    case 'validate date':
      validInput = validateDate(input);
      break;
    case 'validate radio':
      validInput = validateRadio(input);
      break;
    case 'validate dropdown':
      validInput = validateDropdown(input);
      break;
  }
       
  return validInput;
}


function removeChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function validateInfo(event) {
  removeChildren(validatedSection);

  event.preventDefault();
  
  for (input of validateInputs) {
    const id = input.id.replace('input-', ''); 
    const paragraph = document.createElement('p');
    const validated = validateByType(input, input.className, id);
    if (validated !== null) {
      validatedSection.appendChild(paragraph);
      paragraph.innerHTML = `${id}: ${validated}`;
      console.log(validated);
    } else {
      paragraph.innerHTML = 'Dados inválidos';
      if(id ==='data'){
        paragraph.innerHTML = 'A data deve ser no formato DD/MM/AAAA';
      }
      removeChildren(validatedSection);
      validatedSection.appendChild(paragraph);
      break; 
    }
  }
}

buttonClear.addEventListener('click') {
  
}