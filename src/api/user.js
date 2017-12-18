const API_KEY = "bob7klhMfCaGeJeHhZduLyYYxIdb58iH";
const BASE_URL = (path = "") => `http://behance.net/v2/users/${path}?api_key=${API_KEY}`;

const getUsers = () => {
  return fetch(BASE_URL())
    .then(res => res.json())
    .catch(err => console.log(err));
}

const getUser = (id) => {
  console.log(BASE_URL(id))
  return fetch(BASE_URL(id))
    .then(res => res.json())
    .catch(err => console.log(err));
}

export default {
  getUser,
  getUsers
}