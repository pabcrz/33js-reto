import { createPosts } from "./api/devtoAPi.js";

const formBtn = document.getElementById("form-btn");
const form = document.querySelectorAll("#form-post input, #form-post textarea");
const postTitle = document.getElementById("post-title");
const postTags = document.getElementById("post-tags");
const postContent = document.getElementById("post-content");

postTitle.addEventListener("click", () => {
  let title = document.getElementById("title-tips");
  title.classList.remove("d-none");
  let tags = document.getElementById("tags-tips");
  tags.classList.add("d-none");
  let content = document.getElementById("content-tips");
  content.classList.add("d-none");
});
postTags.addEventListener("click", () => {
  let title = document.getElementById("title-tips");
  title.classList.add("d-none");
  let tags = document.getElementById("tags-tips");
  tags.classList.remove("d-none");
  let content = document.getElementById("content-tips");
  content.classList.add("d-none");
});
postContent.addEventListener("click", () => {
  let title = document.getElementById("title-tips");
  title.classList.add("d-none");
  let tags = document.getElementById("tags-tips");
  tags.classList.add("d-none");
  let content = document.getElementById("content-tips");
  content.classList.remove("d-none");
});

const randomNumber = (maxNum) => {
  const random = Math.random();
  const multiplied = random * maxNum;
  const rounded = Math.floor(multiplied);
  const result = rounded + 1;
  return result;
};

const formatDate = (dateInput) => {
  let dateArray = dateInput.split("-");
  dateArray.shift();
  const date = dateArray.join("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const fullDate = new Date(date);
  let day = fullDate.getDate();
  const month = fullDate.getMonth();

  const monthName = months[month];
  const dateNum = ("0" + day).slice(-2);

  return `${monthName} ${dateNum}`;
};

formBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  let postObject = {};

  form.forEach((input) => {
    const type = input.type;
    const property = input.name;
    const value = input.value;
    console.log("form.forEach ~ value:", typeof value);
    switch (type) {
      case "text":
        postObject[property] = value;
        break;
      case "number":
        postObject[property] = Number(value);
        break;
      case "date":
        const newDate = formatDate(value);
        postObject[property] = newDate;
        console.log(postObject[property]);
        break;
      case "textarea":
        postObject[property] = value;
        break;
      case "checkbox":
        postObject[property] = input.checked;
        break;
    }
  });

  const reactions = randomNumber(1000);
  postObject.reactions = reactions;
  const rating = randomNumber(10);
  postObject.rating = rating;

  console.log(postObject);
  const sendPost = await createPosts(postObject);
  window.open("../../post.html", "_self");
});
