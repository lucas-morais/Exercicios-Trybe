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