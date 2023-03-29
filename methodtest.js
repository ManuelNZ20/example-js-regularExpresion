const regex = /dev/;
const searchRegex = /Waldo/;
const myRegex = (myString) => boolIf(regex, myString);

export default function solved(myString) {
  console.log(myString.length);
}
// el método test no funciona si la palabra a buscar es diferente
// Encuentra a waldo
const searchGame = (myString) =>
  boolIf(searchRegex, myString)
    ? "Enhorabuena encontraste a Waldo"
    : "Lo siento Waldo no se encuentra en tu string";

const boolIf = (regex, string) => regex.test(string);

// Multiples patrones
// Encuentra a la mascota de shaggy
const petReguex = /Scooby Doo|Scooby Dooby/;

const mysteryMachine = (string) =>
  boolIf(petReguex, string)
    ? `Enhorabuena encontraste a ${string}`
    : "Esa no es la mascota de Shaggy";

// capitalización
const baseRegex = /mouse|keywords/i;
const dettString = (string = "default") => {
  boolIf(baseRegex, string);
};

export { myRegex, searchGame, mysteryMachine, dettString };
