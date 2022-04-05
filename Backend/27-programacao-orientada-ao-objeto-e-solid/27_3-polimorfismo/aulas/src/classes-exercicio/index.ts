import Character from "./Character";
import LongRangeCharacter from "./LongRangeCharacter";
import MeleeCharacter from "./MeleeCharacter";


function presentation(character: Character) {
  character.talk();
  character.specialMove();
}

presentation(new MeleeCharacter());
presentation(new LongRangeCharacter);