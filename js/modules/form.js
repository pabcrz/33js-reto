import { createPosts } from "./api/devtoAPi.js";

const formBtn = document.getElementById("form-btn");

formBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const form = document.querySelectorAll(
    "#form-post input, #form-post textarea"
  );
  let postObject = {};

  form.forEach((input) => {
    const type = input.type;
    console.log(type);
    const property = input.name;
    const value = input.value;
    switch (type) {
      case "text":
        postObject[property] = value;
        break;
      case "number":
        postObject[property] = Number(value);
        break;
      case "date":
        postObject[property] = value;
        break;
      case "textarea":
        postObject[property] = value;
        break;
    }
  });

  const rating = randomNumber()
  postObject.rating = rating
  console.log(postObject);

  const sendPost = await createPosts(postObject)
  window.open(location.origin)
});

const tags = document.getElementById('post-tags')

function randomNumber() {
  const random = Math.random()
  const multiplied = random * 10
  const rounded = Math.floor(multiplied)
  const result = rounded + 1
  return result
}

tags.addEventListener('keyup', event => {
  
})