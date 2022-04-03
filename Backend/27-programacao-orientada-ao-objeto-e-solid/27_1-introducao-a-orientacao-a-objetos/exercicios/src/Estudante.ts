class Estudante {
  
  private _notasProva: number[];
  private _notasTrabalho: Array<number>;

  constructor(private _nome: string, private _matricula: string) {
    this._notasProva = []
    this._notasTrabalho = []
  }

  set notasProvas(nota: number) {
    if(this._notasProva.length === 4 ) {
      console.log('Notas já atribuídas');
    }
    this._notasProva.push(nota)
  }

  set notasTrabalho(nota: number) {
    if(this._notasTrabalho.length === 2) {
      console.log('Notas já atribuídas');
    }
    this._notasTrabalho.push(nota)
  }

  private _soma(a: number, b: number): number {
    return a + b;
  }



  calculaNotas(): number {
    const somaProvas = this._notasProva.reduce(this._soma);
    const somaTrabalhos = this._notasTrabalho.reduce(this._soma)
    return somaProvas + somaTrabalhos
  }

  calculaMedia(): number | void{
    const totalNotas = this._notasProva.length + this._notasTrabalho.length;
    if(totalNotas > 0){
      return this.calculaNotas() / totalNotas;
    }
    console.log('Não há notas cadastradas');
  }
}

const aluno = new Estudante('aluno', '555999');
aluno.notasProvas = 10;
aluno.notasProvas = 8
aluno.notasProvas = 10
aluno.notasProvas = 5
aluno.notasTrabalho = 7;
aluno.notasTrabalho = 9;

console.log(aluno.calculaNotas());
console.log(aluno.calculaMedia());
