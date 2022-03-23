enum EyeColor {
  Black = 'Pretos',
  Blue = 'Azuis',
  Green = 'Verdes',
  Brown = 'Castanhos',
};

class Person {
  // name: string;
  // birthDate: Date;
  // eyeColor?: EyeColor;

  constructor(
    public name: string, 
    public birthDate: Date, 
    public eyeColor?: EyeColor
  ) {
    // this.name = name;
    // this.birthDate = birthDate;
    // this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo`);
  }

  walk(): void {
    console.log(`${this.name} está comnedo`);
  }
}

const person1 = new Person('Jane Doe', new Date('1986-01-01'), EyeColor.Brown);
const person2 = new Person('John Doe', new Date('1986-08-05'));

console.log(person1);
person1.eat()

console.log(person2);
person2.eat()

person2.eyeColor = EyeColor.Black;
console.log(person2);