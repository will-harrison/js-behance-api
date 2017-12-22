const API_KEY = "bob7klhMfCaGeJeHhZduLyYYxIdb58iH";
const BASE_URL = (path = "") => `http://behance.net/v2/users/${path}?api_key=${API_KEY}`;

const getUsers = () => {
  return fetch(BASE_URL(), {
    headers: { "User-agent": "blah1.0" }
  })
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      return [];
    });
}

const getUser = (id) => {
  return fetch(BASE_URL(id))
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      return [];
    });
}

const getUserProjects = (id) => {
  return fetch(BASE_URL(`${id}/projects`))
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      return [];
    });
}

const getWorkExperience = (id) => {
  return fetch(BASE_URL(`${id}/work_experience`))
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      return [];
    });
}

const getUserFollowers = (id) => {
  return fetch(BASE_URL(`${id}/followers`))
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      return [];
    });
}

const getUserFollowing = (id) => {
  return fetch(BASE_URL(`${id}/following`))
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      return [];
    });
}

const getAllData = (id) => {
  return Promise.all([
    getUser(id),
    getUserProjects(id),
    getWorkExperience(id),
    getUserFollowers(id),
    getUserFollowing(id)
  ])
}
export default {
  getUser,
  getUsers,
  getAllData
}