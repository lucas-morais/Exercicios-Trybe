export enum Color {
  Black= 'preta',
  White = 'branca',
  Red = 'vermelha',
  Silver = 'prata',
}

export enum Door {
  FL = 'porta dianteira esquerda',
  FR = 'prota dianteira direita ',
  BL = 'prota traseira esquerda ',
  BR = 'porta traseira direita '
}

export enum Direcao {
  Left = 'esquerda',
  Right = 'direita',
}

export class Car {
  constructor(
    public brand: string,
    public color: Color,
    public doors: number
  ) {}

  honk(): void {
    console.log('Buzinando...');
  }

  openTheDoor(door: Door): void {
    console.log(`Abrindo a ${door}`);
  }

  closeTheDoor(door: Door): void {
    console.log(`Fechando a ${door}`);
  }

  turnOn(): void {
    console.log('Ligando o carro...');
  }

  turnOff(): void {
    console.log('Desligando o carro...');
  }

  speedUp(): void {
    console.log('Acelerando...');
  }

  speedDown(): void {
    console.log('Freando...')
  }

  stop(): void {
    console.log('Parando o carro')
  } 

  turn( direcao: Direcao): void{
    console.log(`Virando à ${direcao}`  );
  } 
}