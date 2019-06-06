
//EX1
// PRE: vom implementa metoda separat si apoi o importam in index.js
// folosind fetch() vom face un post catre url-ul de mai jos
// trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.

const url = 'https://jsonplaceholder.typicode.com/posts';
export const myThirdFetch = fetch(url).then(response => response.json());

// const options = {
//   method: 'post',
//   body: 'cors',
//   headers: // ??
// }


