// Aveti 2 functii, una in care o sa luam userii si una in care luam todos
// fiecare todo are o proprietate Id, pentru fiecare Id care este acelasi ca id-ul din users vom printa ce title se potriveste - o sa faceti o verificare aici.
// Afisati in html un paragraph cu numele userilor, emailul si title-ul din todos.

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";

const todosCallback = (users, todos) => {
  console.log(users);
  console.log(todos);
};

const usersCallback = users => {
  getTodos(users, todosCallback);
};

const getUsers = callback => {
  const userReq = new XMLHttpRequest();
  userReq.open("GET", usersUrl);
  userReq.onload = () => {
    callback(userReq.response);
  };
  userReq.send();
};

const getTodos = (users, callback) => {
  const todosReq = new XMLHttpRequest();
  todosReq.open("GET", todosUrl);
  todosReq.onload = () => {
    callback(users, todosReq.response);
  };
  todosReq.send();
};

getUsers(usersCallback);
