const form = document.querySelector("form");
form.onsubmit = function(submitEvent) {
  // luati numele cartii din input
  submitEvent.preventDefault();
  const name = document.querySelector('input').value
  const urlQuery = `https://www.googleapis.com/books/v1/volumes?q=${name}`
  
  //apelati API-ul si folositi functia resultOfBooks ca si handler pentru raspunsul primit
  const request = new XMLHttpRequest();
  request.open('GET', urlQuery);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    resultsOfBooks(request.response);
  }
  
};


function resultsOfBooks(response) {
  //schimbati argumentele in functia de mai jos astfel incat sa primeasca response si o functie de tip care sa fie apelata ca si callback - displayBookParagraph 
  displayDetailsWithCallback(response, displayBookParagraph);

}

function displayDetailsWithCallback(books, callback) {
 // up to 4 books 
  const booksArray = books.items.slice(0,4);
  // console.log(booksArray);
  for (let i = 0; i < booksArray.length; i++) {
    callback(booksArray[i].volumeInfo.title);
  }
 // detaliile le gasiti in volumeInfo - cautati prin obiectul principal folosind console.log()
 // stocati detaliile in variabile folosind const sau let
}

function displayBookParagraph(book) {
  console.log(book)
  let paragraphBook = document.createElement('p');
  paragraphBook.textContent = book;
  document.querySelector('.custom-input').appendChild(paragraphBook);
 // formati un text de genul 'cele 4 carti citite sunt: titlu1 titlu2 titlu3 titlu4'
  // inserati intr-un paragraph textul format
}

function addBooksToPage() {
  // BONUS
  // Sa se afiseze pe pagina detalii precum title, publisher, publishDate, pages, language si thumbnail-ul(imaginea) cartii
  //Bonus 2 - afisati si descrierea - description - iar daca descrierea e mai lunga de 15 cuvinte, adaugati "..."
  //exemplu : Describes the COMPASS model for working with preschool and elementary...
}