import Character from "./Character";

export default class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Ranged!')
  }
  specialMove(): void {
    console.log('Special ranged attack!')
  }

}