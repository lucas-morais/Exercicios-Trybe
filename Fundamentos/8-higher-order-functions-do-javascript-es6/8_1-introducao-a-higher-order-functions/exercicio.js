const wakeUp = () => 'Acordando!!';
const drinkCofee = () => 'Bora tomar café!!';
const sleep = () => 'Patiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(drinkCofee);
doingThings(sleep);