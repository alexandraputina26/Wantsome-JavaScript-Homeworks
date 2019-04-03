
// 4. Scrieti o functie de tip IIFE care afiseaza in consola:
//  "Afisez, deci ma autoapelez". Veti crea un fisier javascript separat 
// pe care il veti include intr-un fisier html. Verificarea se va face
//  prin deschiderea paginii html in browser.


//am adaugat si pentru pagina din browser si pentru consola.

(function() {
    alert("Afisez, deci ma autoapelez");
})();


(function() {
    console.log("Afisez, deci ma autoapelez");
})();
