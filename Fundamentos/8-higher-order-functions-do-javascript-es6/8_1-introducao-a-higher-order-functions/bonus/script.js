const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomNumber = (max, min) => {
  return Math.floor(Math.random()*(max - min + 1) + min); 
} 

const dragonDamage = (strength) => {
  return randomNumber(strength, 15);
} 

const warriorDamage = (strength, weaponDmg) => {
  return randomNumber(strength * weaponDmg, strength);
}

const mageDamageAndMana = (intelligence, mana) => {
  
  let usedMana = 15
  let damage = randomNumber(intelligence * 2, intelligence); 
  if (mana < 15) {
    damage = 'Não possui mana sufuciente'
    usedMana = 0;
  }
  
  return {
    damage: damage,
    usedMana: usedMana,
  };
}


const gameActions = {
  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage(warrior.strength, warrior.weaponDmg);
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (mageDamageAndMana) => {
    const mageTurnStatus = mageDamageAndMana(mage.intelligence, mage.mana);
    if (mageTurnStatus.usedMana === 15) {
      dragon.healthPoints -= mageTurnStatus.damage;
      mage.mana -= mageTurnStatus.usedMana;
    } 
    mage.damage = mageTurnStatus.damage;
  },
  dragonTurn: (dragonDamage) => {
    const damage = dragonDamage(dragon.strength);
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },
  getBattleMembers:() => {
    return battleMembers;
  }  
};

console.log(battleMembers);
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamageAndMana);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.getBattleMembers());