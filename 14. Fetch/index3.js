import { myThirdFetch } from "./module3.js"


console.log(myThirdFetch)





//EX2
//***bonus***//
//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()


const myPost = {
    title: 'Javascript Post is awesome',
    body: 'lorem ipsum etc',
    userId: 1
}