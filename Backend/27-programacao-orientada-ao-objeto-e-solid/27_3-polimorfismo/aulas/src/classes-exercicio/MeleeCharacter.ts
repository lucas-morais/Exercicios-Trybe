import Character from "./Character";

export default class MeleeCharacter extends Character {
  talk(): void {
    console.log('Melee!');
  }
  specialMove(): void {
    console.log('Melee special attack!');
  }

}