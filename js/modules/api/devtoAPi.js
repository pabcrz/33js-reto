const BASE_URL = "https://reto-js-10b99-default-rtdb.firebaseio.com/blogDevTo/.json";
//Funcion para traer los posts de la DB
const traerPost = async () => {
    let response = await fetch(BASE_URL);
    let posts = await response.json();
    let keys = Object.keys(posts);
    let arregloPosts = keys.map((key) => {
        return {...posts[key], key};
    });
    return arregloPosts;
};

export { traerPost };

const createPosts = async (postObject) => {
  let response = await fetch(`${BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(postObject),
  });
  let data = await response.json();
  return data;
};

const fetchPostByKey = async (postKey) => {
  let response = await fetch(`${BASE_URL}/${postKey}/.json`);
  let data = await response.json();
  return data;
};

const fetchAllPosts = async () => {
  let response = await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  let keys = Object.keys(data);
  let postsArray = keys.map((key) => ({ ...data[key], key }));
  return postsArray;
};

export { createPosts, fetchPostByKey, fetchAllPosts };
