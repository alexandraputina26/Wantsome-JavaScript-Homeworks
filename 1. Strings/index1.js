
//1.Scrieti o functie care verifica daca un input este sau nu de tip string.

function is_string(str) {
    return typeof str === 'string';
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


//2.Scrieti o functie care verifica daca un string este gol sau nu.//

function is_Blank(str) {
    if (str === '') return true;
    else return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

//3.Scrieti o functie care accepta ca input un string si il transforma intr-un array de cuvinte//

function string_to_array(str) {
    return str.trim().split(" ");
}

console.log(string_to_array("Robin Singh"));

//4.Scrieti o functie care transforma un string in forma abreviata.//

function abbrev_name(str1) {
    split_names = str1.trim().split(" ")
    if (split_names.length > 1) {
    return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
}

console.log(abbrev_name("Robin Singh"));

//5.Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare )://

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('js string exercises'));

//6.Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului.//

function truncate_string(str, length) {
    if ((str.constructor === String) && (length>0)) {
        return str.slice(0, length);
    }
}

console.log(truncate_string("Robin Singh",4));

//7.Scrieti o functie care specifica daca caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu://

function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

//8.Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string://

function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
        pos = 0;
    }
    if(typeof(ins_string) == "undefined") {
        ins_string = '';
    }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));

//9.Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string://

function remove_first_occurrence(str, searchstr) {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

//10.Scrieti o functie care compara doua string-uri case-insensitive://

function compare_strings(str1, str2) {
var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return true;
}

console.log(compare_strings('abcd', 'AbcD'));

//11.Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital://

function Uncapitalize(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(Uncapitalize('Js string exercises'));