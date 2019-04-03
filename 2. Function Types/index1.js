
// 1. Scrieti o functie de tip named function care accepta ca argument un CNP si 
// verifica sexul unei persoane. In urma apelului acestei functii, 
// se va returna un text de forma "Persoana verificata este de sexul M/F". //


var number;

function cnpFunction(number) {

var result = number[0];

    if (result = 1) {
        return ("Persoana verificata este de sexul M");
    }
    else if (result = 2) {
        return ("Persoana verificata este de sexul F");
    }
    else return ("undefined");
}

console.log(cnpFunction(1840918226715));


//2. Scrieti o functie de tip function expression care accepta ca argument o valoare
//  numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile 
//  sunt urmatoarele:
//  - 1-3 = E
//  - 3-6 = D
//  - 7-8 = B
//  - 9 = A
//  - 10 = A+
//  Functia va returna un text de forma "Calificativul corespunzator punctajului 
//  [punctaj] este [calificativ]".


function pointsFunction(x) {
    switch (true) {
        case x >= 1 && x <= 3: return "Calificativul corespunzator punctajului " + x + " este " + "E";
        break
        case x >= 4 && x <= 6: return "Calificativul corespunzator punctajului " + x + " este " + "D";
        break
        case x >= 7 && x <= 8: return "Calificativul corespunzator punctajului " + x + " este " + "B";
        break
        case x > 8 && x <= 9: return "Calificativul corespunzator punctajului " + x + " este " + "A";
        break
        case x > 9 && x <= 10: return "Calificativul corespunzator punctajului " + x + " este " + "A+";
        break
        case x > 10: return "Mai incearca :))";
    }
}

console.log(pointsFunction(7));


// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si
// returneaza un text de forma: "Marca [marca] se produce in [tara]". 
// Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste
// marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite.

function car(carName) {
    switch (carName) {
        case "Opel": return "Marca " + carName + " se produce in Germania.";
        break
        case "AlfaRomeo": return "Marca " + carName + " se produce in Italia.";
        break
        case "Renault": return "Marca " + carName + " se produce in Franta.";
        break
        case "Honda": return "Marca " + carName + " se produce in Japonia.";
        break
        case "Dacia": return "Marca " + carName + " se produce in Romania.";
        break
        case "Volga": return "Marca " + carName + " se produce in Rusia.";
        break
        case "Bentley": return "Marca " + carName + " se produce in Anglia.";
        break
        default: return "Marca este necunoscuta.";
    }
}

console.log(car("Dacia"));

