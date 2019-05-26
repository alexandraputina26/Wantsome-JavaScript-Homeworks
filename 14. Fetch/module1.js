// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
// 



const url = "https://jsonplaceholder.typicode.com/users"
export const myFetch = fetch(url).then(response => response.json());

