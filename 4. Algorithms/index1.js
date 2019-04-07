
//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function emailFunction(emailAddress) {
    var splitEmail = emailAddress.split('@');
    var before = splitEmail[0];
    var sliceEmail = before.slice(0, 4);

    return (sliceEmail + "...@" + splitEmail[1])
  
}
console.log(emailFunction("ovidiu.grigoras@test.com"));


//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"


function superMan(text) {
    var pieces = text.split(" ");
    var newArray = [];
    for (i=0; i < pieces.length; i++) {
        var newWord = pieces[i].charAt(0).toUpperCase() + pieces[i].slice(1);
        newArray.push(newWord);
    }
    var newString = newArray.join(" ");
    return newString;
}

console.log(superMan("i am superman"));


//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function stringFunction(str) {
    var newString = "";
    for (i=0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 91 ) {
            newString += str[i].toUpperCase();
        } else { 
            newString += str[i].toLowerCase(); 
        }
    }

    return newString;
 }

console.log(stringFunction("xxXXyyYYzzZZ"));


//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatFunction(string, number) {
    console.log(string.repeat(number));
}

concatFunction("Winter", 9);


//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante


var x = "cojoc".split("").reverse().join("") === "cojoc";

console.log(x);

//sau 

function poli(string) {
    var x = "cojoc".split("").reverse().join("") === "cojoc";
}

poli("cojoc");



//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si 
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array


function largestOfThree(arr) {                  // am declarat functia cu un nume sugestiv
     var max = [];                               // am stabilit o variabila (array) care va contine cele mai mari numere - deocamdata e goala
     for (var i=0; i<arr.length; i++) {
         var maxElement = arr[i][0];             //acest loop va itera pe fiecare element al array-ului mare, adica fiecare sub-array
         for (var j=0; j<arr[i].length; j++) {   // var j va itera asupra fiecarui element DIN fiecare sub-array, adica va lua in considerare toate elementele mai mici
             var element = arr[i][j];
            if (element >= maxElement) {        // loop-ul este conditionat sa se opreasca la elementul cel mai mare si sa il considere element al array-ului final
                 maxElement = element;
            }
        }
    max.push(maxElement);                       // inseram elementele cele mai mari in array-ul final, respectiv cel numit la inceput "max"
    }
    return max;                                 // vrem sa vedem ce este in max dupa executia functiei
}

 console.log(largestOfThree([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


//Ex7
// Implementati o functie care face reverse la un string.


function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 

            // sau return str.split("").reverse().join("");      :D
}

console.log(reverseString("extraterestru"));


//Ex8 
// Implementati o functie care calculeaza factorialul unui numar.


var factorial = function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

var trueFactorial = factorial;
factorial = function(){
    return 0;
};

console.log((trueFactorial(7)));


//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma.


function compareStrings(str1, str2) {                //intelesesem prima data ca functia sa arate daca al doilea string incepe cu ce se termina primul.
    var x = str1.substr(6);
    var y = str2.substr(0, 3);

    if (x === y) {
        return true;
    } else {
        return ("String-urile nu sunt la fel!");
    }
}

console.log(compareStrings("Alexandra", "dragon"));
console.log(compareStrings("Alexandra", "dinozaur"));




function compareStrings(str1, str2) {                // aici am facut si functia conform cerintei.
    var x = str1.substr(4);
    
    if (x === str2) {
        return true;
    } else {
        return ("String-urile nu sunt la fel!");
    }
}

console.log(compareStrings("Alexandra", "andra"));



//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string.


function isAnagram (a, b) {

    var x = a.split("").sort().join("")
    var y = b.split("").sort().join("")

    return x === y;
}

console.log(isAnagram("mouse", "soume"));



// Ex 14
// Scrieti o functie care repeta un string de n ori specificate


function repeatFunction(string, number) {
    console.log(string.repeat(number));
}

repeatFunction("Great!", 12);




//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat


// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element 
// al array-ului pana cand intalneste elementul cu valoarea specificata.


// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
