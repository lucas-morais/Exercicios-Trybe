"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Direcao = exports.Door = exports.Color = void 0;
var Color;
(function (Color) {
    Color["Black"] = "preta";
    Color["White"] = "branca";
    Color["Red"] = "vermelha";
    Color["Silver"] = "prata";
})(Color = exports.Color || (exports.Color = {}));
var Door;
(function (Door) {
    Door["FL"] = "porta dianteira esquerda";
    Door["FR"] = "prota dianteira direita ";
    Door["BL"] = "prota traseira esquerda ";
    Door["BR"] = "porta traseira direita ";
})(Door = exports.Door || (exports.Door = {}));
var Direcao;
(function (Direcao) {
    Direcao["Left"] = "esquerda";
    Direcao["Right"] = "direita";
})(Direcao = exports.Direcao || (exports.Direcao = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Buzinando...');
    }
    openTheDoor(door) {
        console.log(`Abrindo a ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a ${door}`);
    }
    turnOn() {
        console.log('Ligando o carro...');
    }
    turnOff() {
        console.log('Desligando o carro...');
    }
    speedUp() {
        console.log('Acelerando...');
    }
    speedDown() {
        console.log('Freando...');
    }
    stop() {
        console.log('Parando o carro');
    }
    turn(direcao) {
        console.log(`Virando à ${direcao}`);
    }
}
exports.Car = Car;
