
//  Ex1
//  Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar
//  daca sunt egale sa-mi imulteasca suma lor cu 5
//  ex myFunction(10, 5) - output 15 // myFunction(10, 10) - output 100

function numbers(x, y) {
    if (x === y) {
      console.log(x*y)
    } else {
      console.log(x+y)
    }
  }
numbers(4, 5);
  
  //Ex2
  //Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
  //ex testFunction(30, 30) - true 
  //testFunction(15,15) - true
  //testFunction(10, 15) - false
  
function testFunction(a, b) {
    if (a === 30 && b === 30) {
      console.log(true)
    } else if (a+b === 30) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
testFunction(15, 15);
  
  //Ex3
  //Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
  //checkString('JSisAwsome') - JSisAwsome
  //checkString('isEasy') - JSisEasy
  //checkString(null) - JS
  
function stringFunction(str) {
    let m = str.includes("JS");
    if (m == true) {
      console.log(str);
    } else {
      console.log("JS");
    }
  }
  
stringFunction("JASisEasy");
  
  
  //Ex4
  //Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
  //removeDuplicates('aabcdeef') - 'abcdef'
  //removeDuplicates(122334) - 1234
  
function removeDuplicates(array) {
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
          if (newArray.indexOf(array[i]) == -1) {
              newArray.push(array[i])
          }
      }
      return newArray
  }
  
  console.log(removeDuplicates("abbccdefgghh"));
  
  
  //Ex5
  // Gasiti cel mai lung string intr-o fraza
  //findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function findLongestString(array) {
  let longWord = "";

  array.forEach(function(word) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  });
  return longWord;
}

console.log(findLongestString(["wantsome", "is", "awesoooommmeeee", "today"]));

  //Ex6
  //Scrieti o functie care sa aiba output-ul asta
  // *  
  // * *  
  // * * *  
  // * * * *  
  // * * * * *
  
for (let i=1; i<=5; i++) {
    console.log("*".repeat(i));
 }
  
  //  ex7
  //  const negativeNumbers = [];
  
  //  function extractNegativeNumbers(numbers) {
  //  append any negative numbers found in the numbers array 
  //  into the negativeNumbers array constant variable above
  //  }
  //  extractNegativeNumbers([1,2,-5,4,-6])

function extractNegativeNumbers(array) {

    const negativeNumbers = [];
    array.forEach(function(number) {
      if (number < 0) {
        negativeNumbers.push(number);
      }
    });
    return negativeNumbers;
  }

  console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));

  // ex8
  // Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
  // ex calculate(2, 5, "add") => 7
  // calculate(10, 8, "substract") => 2

function calculate(n1, n2, str) {
  switch (true) {
    case str === "add": return (n1 + n2);
    break
    case str === "substract": return (n1 - n2);
    break
    case str === "multiply": return (n1 * n2);
    break
    case str === "divide": return (n1 / n2);
    }
}
  console.log(calculate(2, 5, "add"));
  console.log(calculate(10, 8, "substract"));
  console.log(calculate(20, 2, "divide"));
  
  //Ex9
  // Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca
  // nu este cu niciunul sa returneze numarul
  // isDiv(15) => "BOTH"
  // isDiv(9)=> "THREE"
  // isDiv(7)=> 7

  function isDiv(number) {

    if (number % 3 === 0 && number % 5 === 0) {
      console.log("BOTH");
    } else if (number % 3 === 0) {
      console.log("THREE");
    } else if (number % 5 === 0) {
      console.log("FIVE");
    } else {
      console.log(number);
    }
  }

  isDiv(5);
  isDiv(7);
  isDiv(9);
  isDiv(15);
 
  //Master exercises

  //Ex9 
  // Vreau sa pot afisa data si ziua sub urmatorul format:
  // Azi este : Luni. -------->>>> NU REUSESC :D

  // Ora este : 20 PM : 30 : 38


  //   let today = new Date().toLocaleDateString();
  //   let days = ["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"];
  //   var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
  // console.log(today);
   
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var myDate = month+"-"+day+"-"+year;

    var d = new Date("Mon Jun 22 03:45:24 PDT 2015");
    var h = (d.getHours() + 11) % 12 + 1;
    var m = h < 12 ? ' PM ' : ' AM';
    var seconds = d.getSeconds();
    var minutes = d.getMinutes();

  console.log("Ora este : " + hour + m + " : " + minutes + " : " + seconds);

  
  //ex10
  // ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
  // validPin("1234") => true
  // validPin("12345") => false
  // validPin("z23f") => false

  function validPin(str) {
    if (str.length === 4) {
      console.log(true);
    } else if (str.length === 6) {
      console.log(true)
    } else {
      console.log(false)
    } 
  }
  validPin("1234");
  validPin("12a45");
  validPin("z22a3f");
  
  //ex11 
  //Folosind regex vreau sa scot toate vocalele dintr-un string
  // removeVowels("Hey I am developer") => "Hy m dvlpr"

  function removeVowels(str) {
    return str.replace(/[aeiou]/gi, "");
  }

  console.log(removeVowels("Hey I am developer"));

  
  //ex12
  //Vreau sa am o functie care sa verifice daca un numar este patrat
  // isSquareNumber(-1) => false
  // isSquareNumber(25) => true
  // isSquareNumber(3) => false

function isSquareNumber(number) {
    if (number > 0 && Math.sqrt(number) % 1 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
}
  
  isSquareNumber(-1);
  isSquareNumber(25);
  isSquareNumber(3);
  
  //ex13
  // Vreau sa am o functie care sa verifice daca un cuvant este o anagrama - daca toate literele din primul string se regasesc in al doilea
  // isAnagram("School master", "The class room") => true
  // isAnagram("silent", "listen") => true


function isAnagram(a, b) {

  var x = a.split("").sort().join("")
  var y = b.split("").sort().join("")

  return x === y;
}

  console.log(isAnagram("School master", "The class room"));
  console.log(isAnagram("silent", "listen"));