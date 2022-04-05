interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character { 
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  getAllCharacters(): DbCharacter[];
  getCharacterById(id: number): DbCharacter;
  createCharacter(character: Character): DbCharacter;
  updateCharactert(id: number, character: Character): string;
  removeCharacter(id:number):string; 
}

class LocalDbModel implements IModel {

  private static lastId=0;
  getAllCharacters(): DbCharacter[] {
    return db;
  }
  getCharacterById(id: number): DbCharacter {
    return db[id];
  }
  createCharacter(character: Character): DbCharacter {
    const newChar = {
      id: LocalDbModel.lastId ++,
      ...character
    }
    db.push(newChar);
    return newChar;
  }
  updateCharactert(id: number, character: Character): string {
    const newChar = {
      id: db[id].id,
      ...character,
    }
    db[id] = newChar;
    return `Character "${id}" foi atualizado com sucesso`;
  }
  removeCharacter(id: number): string {
    db.splice(id, 0);
    return `Character "${id}" foi atualizado com sucesso`;

  }
}

class CharacterService {
  constructor(private model: IModel) {}

  getAll() {
    return this.model.getAllCharacters();
  }

  getById(id: number) {
    return this.model.getCharacterById(id);
  }

  create(character: Character) {
    return this.model.createCharacter(character);
  }

  update(id: number, character: Character) {
    return this.model.updateCharactert(id, character);
  }

  remove(id: number) {
    return this.model.removeCharacter(id)
  }
}

