import { Car, Color, Direcao, Door } from "./exercicio_1";

// Criando carro
const meuCarro = new Car('Volkswagen Gol', Color.Silver, 4);

meuCarro.openTheDoor(Door.FL);
meuCarro.closeTheDoor(Door.FL);
meuCarro.turnOn();

meuCarro.speedUp();
meuCarro.speedDown();
meuCarro.turn(Direcao.Left);
meuCarro.speedUp();
meuCarro.speedDown();
meuCarro.turn(Direcao.Right);
meuCarro.speedUp();
meuCarro.speedDown();
meuCarro.turn(Direcao.Right);
meuCarro.speedUp();
meuCarro.speedDown();
meuCarro.stop();

meuCarro.openTheDoor(Door.BR);
meuCarro.closeTheDoor(Door.BR);

meuCarro.speedUp();
meuCarro.speedDown();
meuCarro.turn(Direcao.Right);
meuCarro.speedUp();
meuCarro.speedDown();
meuCarro.turn(Direcao.Right);
meuCarro.speedUp();
meuCarro.speedDown();
meuCarro.stop();

meuCarro.openTheDoor(Door.BR);
meuCarro.closeTheDoor(Door.BR);

meuCarro.speedUp();