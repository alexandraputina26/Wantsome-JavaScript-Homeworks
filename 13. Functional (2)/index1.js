
//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

const moveLetters = str => {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122) {
            newString += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return newString;
}
console.log(moveLetters('alfasiomega'))  


// ex3
// Faceti asftel incat toate variabilele de mai jos sa returneze ceea ce zice numele


const arr = [
  {name:'sasha', sex:'f', age:7, species:'cat'},
  {name:'john', sex:'m', age:133, species:'human'},
  {name:'titus', sex:'m', age:62, species:'human'},
  {name: 'kalifa', sex:'f', age:255, species:'human'},
  {name: 'oreo', sex:'m', age:21, species:'cat'},
  ];
  
let allCats = arr.filter((arr) => arr.species == 'cat')
let allHumans = arr.filter((arr) => arr.species == 'human')
let allFemales = arr.filter((arr) => arr.sex == 'f')
let totalOfAllAges = arr.reduce((accumulator, arr) => accumulator + arr.age, 0);
let averageAgeOfCats = allCats.reduce((accumulator, allCats) => accumulator + allCats.age, 0) / allCats.length;
let averageAgeOfHumans = allHumans.reduce((accumulator, allHumans) => accumulator + allHumans.age, 0) / allHumans.length;
let avgLengthOfNames = arr.map((arr) => arr.name.length).reduce((accumulator, names) => accumulator + names, 0) / arr.length;


//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const composedValue = item => {
  const square = item => {
    return item * item;
  }
  const double = item => {
    return item * 2;
  }
  return ((square(item)) + (double(item)) + item) 
}
console.log(composedValue(5))


//ex.2
//faceti o functie 'compose' care atunci cand va fi apelata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc


const compose = item => {
  const square = item => {
    return item * item;
  }
  const double = item => {
    return item * 2;
  }
  return square(double(item)) 
}
console.log(compose(6))


//ex.3
//faceti o functie find care ia ca parametri un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5


