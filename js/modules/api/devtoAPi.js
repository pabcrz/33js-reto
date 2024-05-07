const BASE_URL = "https://reto-js-10b99-default-rtdb.firebaseio.com/";

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
