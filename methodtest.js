const regex = /dev/;
const searchRegex = /Waldo/;
const myRegex = (myString) => regex.test(myString);

export default function solved(myString) {
  console.log(myString.length);
}
// el método test no funciona si la palabra a buscar es diferente
// Encuentra a waldo
const searchGame = (myString) => {
  if (searchRegex.test(myString)) {
    return "Enhorabuena encontraste a Waldo";
  }
  return "Lo siento Waldo no se encuentra en tu string";
};
const boolIf = (bool) => bool;
export { myRegex, searchGame };

// Multiples patrones
// Encuentra a la mascota de shagui
const petReguex = /Scooby|Doo/;
const mysteryMachine = (string) => {};
