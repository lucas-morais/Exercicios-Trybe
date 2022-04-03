class Animal {
  constructor(public name: string, private birthDate: Date) {

  }

  get age():number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const monthAlreadyPassed = today.getMonth() - this.birthDate.getMonth();
    const dayAlreadyPassed = today.getDate() - this.birthDate.getDate()
    if(monthAlreadyPassed > 0 || (monthAlreadyPassed === 0 && dayAlreadyPassed > 0)) {
      age--;
    }
    return age;
  }
}

class Mamal extends Animal {
  walk() {
    console.log(`${this.name} está andando`);
  }
}

class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando`);
  }
}

const d1 = new Date(2015, 3, 3);
const d2 = new Date(2016, 8, 5);


const m1 = new Mamal('Tatu', d1);
const b1 = new Bird('Papagaio', d2);


console.log(m1.age);
m1.walk();

console.log(b1.age);
b1.fly();
