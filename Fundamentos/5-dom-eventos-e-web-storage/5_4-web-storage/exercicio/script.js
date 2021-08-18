principal = document.getElementsByClassName('principal')[0];
let backgroundStyle = principal.style.backgroundColor;
let colorStyle = principal.style.color;
let fontSizeStyle = principal.style.backgroundColor;
let fontHeightStyle = principal.style.backgroundColor;
let fontFamilyStyle = principal.style.backgroundColor;

function criaArmazenamentoLocal(){
  if (typeof (Storage) !== 'undefined') {
    if (localStorage.preferencias === undefined) {
      console.log('nada')
      let preferencias = {
        background: '',
        color: '',
        fontSize: '',
        fontHeight: '',
        fontFamily: ''   
      };
      localStorage.setItem('preferencias', JSON.stringify(preferencias));
    
    }
  } 
} 

function lerPreferencias(){
  let preferencias = JSON.parse(localStorage.getItem('preferencias'));
  console.log(preferencias);
}


criaArmazenamentoLocal();
lerPreferencias();