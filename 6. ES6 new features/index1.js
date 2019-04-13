
//> Rescrieti folosind sintaxa ES6 cate o problema de la temele anterioare de la capitolul JavaScript ( 5 probleme ).


// problema 1:
const isEven = number => {
    let i = 0;
    for (i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
           console.log(i + " este numar par");
        } else {
           console.log(i + " este numar impar");
        }
    }
    return (i);
}
console.log(isEven());


// problema 2:
const isPolindrome = string => {
    let x = "cojoc".split("").reverse().join("");
    if (x !== "cojoc") {
        return ("The word is not a polindrome.");
    } else {
        return true;
    }
}
console.log(isPolindrome());


//problema 3:
const factorial = (num) => {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

console.log(factorial(7));


//problema 4:
const compareStrings = (str1, str2) => {
    let x = str1.substr(6);
    let y = str2.substr(0, 3);

    if (x === y) {
        return true;
    } else {
        return ("String-urile nu sunt la fel!");
    }
}

console.log(compareStrings("Alexandra", "dragon"));


//problema 5:
const power = x => x ** 2;
console.log(power(5));




//> Rezolvati 5 probleme implementate de catre voi pe www.codewars.com - Folositi sintaxa ES6.


//1. Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.

const addBinary = (a,b) => (a + b);
console.log(addBinary(2, 4));



//2. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a 
//function that determines whether a string that contains only letters is an isogram. 
//Assume the empty string is an isogram. Ignore letter case.

const isIsogram = string => {
    if (string.split("").every((c, i) => string.indexOf(c) == i)) {
        return (string + " is an isogram.");
    } else {
        return (string + " is NOT an isogram.");
    }
}
console.log(isIsogram("Ovidiu"))
console.log(isIsogram("Lucian"))


//3. A Narcissistic Number is a number which is the sum of its own digits, each raised to the power 
// of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10). 
// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.


const narcissistic = number => {
    
    valueArray = number.toString().split('');
    let x = []; let y = 0; 

    for (let i = 0; i < valueArray.length; ++i) {
        valueArray[i] = parseInt(valueArray[i]);
        valueArray[i] = Math.pow(valueArray[i], valueArray.length);
        x.push(valueArray[i]); 
        y += x[i]; 
    };
    if (y == number) {
        number = true;
    } else {number = false};
        return number;
};

console.log(narcissistic(153));