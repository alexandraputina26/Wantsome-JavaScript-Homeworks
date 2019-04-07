
// 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
// raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for


function isEven(number) {           // declar functia
    var i;                          // declar o variabila asupra careia functia va itera
    for (i = 1; i <= 20; i++) {     // construiesc for-ul pana la numarul 20

        if (i % 2 == 0) {           // adaug un if care sa ma ajute sa afisez mesajul - prima data daca este par
            console.log(i + " este numar par");
        } 
        else {                      // apoi daca nu este par
            console.log(i + " este numar impar");
        }
    }
    return (i);                     // apoi vreau ca for-ul sa execute si sa afiseze functia cand o voi apela
}
console.log(isEven());              // apelez functia


// 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
// rezultatul. (exemplu: “3*9=27”).
// Scrieti functia in doua variante: while si for

function timesNine(num) {           //declar o functie
    var a;                          //declar o variabila
    for (a = 1; a <= 10; a++) {     //stabilesc criteriile lui 'a'
        console.log(a * 9);         // si ce vreau sa execute atata timp cat respecta criteriile
    }
    return (a);                     // pentru tot for-ul rezultatul vreau sa fie 'a'
}

console.log(timesNine());           //apelez functia in consola


// 3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
// (exemplu: 1 * 0 = 0
//     1 * 1 = 1
//     …
//     1 * 10 = 10 )
//     Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.

function increase(numb) {
    var b;
    for (b = 1; b <= 10; b++) {
        console.log(b + " * 2 = " + b*2);       // am improvizat putin ca sa fie mai interesant :)
    }
    return (b);
}

increase();


// 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
// poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
//     calificativul B \n ...samd “). Atentie: Rezultatul calificativul trebuie sa fie obtinut prin utilizarea functiei
//     dezvoltate la tema anterioara !

// function pointsFunction(x) {
//     switch (true) {
//         case x >= 1 && x <= 3: return "Calificativul corespunzator punctajului " + x + " este " + "E";
//         break
//         case x >= 4 && x <= 6: return "Calificativul corespunzator punctajului " + x + " este " + "D";
//         break
//         case x >= 7 && x <= 8: return "Calificativul corespunzator punctajului " + x + " este " + "B";
//         break
//         case x > 8 && x <= 9: return "Calificativul corespunzator punctajului " + x + " este " + "A";
//         break
//         case x > 9 && x <= 10: return "Calificativul corespunzator punctajului " + x + " este " + "A+";
//         break
//         case x > 10: return "Mai incearca :))";
//     }
// }

// console.log(pointsFunction(7));


function pointsFunction() {
    var q;
    for (q = 1; q <= 3; q++) {
        console.log("Calificativul corespunzator punctajului " + q + " este " + "E")
    }
    for (q = 4; q <= 6; q++) {
        console.log("Calificativul corespunzator punctajului " + q + " este " + "D")
    }
    for (q = 7; q <= 8; q++) {
        console.log("Calificativul corespunzator punctajului " + q + " este " + "C")
    }
    for (q = 9; q < 10; q++) {
        console.log("Calificativul corespunzator punctajului " + q + " este " + "A")
    }
    for (q = 10; q < 11; q++) {
        console.log("Calificativul corespunzator punctajului " + q + " este " + "A+")
    }
}

pointsFunction();
