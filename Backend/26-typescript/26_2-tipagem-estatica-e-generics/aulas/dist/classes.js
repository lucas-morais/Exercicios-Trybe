"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
;
class Person {
    // name: string;
    // birthDate: Date;
    // eyeColor?: EyeColor;
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
        // this.name = name;
        // this.birthDate = birthDate;
        // this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo`);
    }
    walk() {
        console.log(`${this.name} está comnedo`);
    }
}
const person1 = new Person('Jane Doe', new Date('1986-01-01'), EyeColor.Brown);
const person2 = new Person('John Doe', new Date('1986-08-05'));
console.log(person1);
person1.eat();
console.log(person2);
person2.eat();
person2.eyeColor = EyeColor.Black;
console.log(person2);
