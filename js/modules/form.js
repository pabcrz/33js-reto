import { createPosts } from "./api/devtoAPi.js";

const formBtn = document.getElementById("form-btn");
const form = document.querySelectorAll("#form-post input, #form-post textarea");

const randomNumber = (maxNum) => {
  const random = Math.random();
  const multiplied = random * maxNum;
  const rounded = Math.floor(multiplied);
  const result = rounded + 1;
  return result;
}

const formatDate = (dateInput) => {
  let dateArray = dateInput.split('-')
  dateArray.shift()
  const date = dateArray.join('-')
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const fullDate = new Date(date)
  let day = fullDate.getDate()
  const month = fullDate.getMonth()

  const monthName = months[month]
  const dateNum = ('0' + day).slice(-2)

  return`${monthName} ${dateNum}`

}

formBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  let postObject = {};

  form.forEach((input) => {
    const type = input.type;
    const property = input.name;
    const value = input.value;
    console.log('form.forEach ~ value:',typeof value)
    switch (type) {
      case "text":
        postObject[property] = value;
        break;
      case "number":
        postObject[property] = Number(value);
        break;
      case "date":
        const newDate = formatDate(value)
        postObject[property] = newDate;
        console.log(postObject[property])
        break;
      case "textarea":
        postObject[property] = value;
        break;
      case 'checkbox':
        postObject[property] = input.checked;
        break;
    }
  });

  const reactions = randomNumber(1000);
  postObject.reactions = reactions;
  const rating = randomNumber(10);
  postObject.rating = rating;
  
  console.log(postObject);
  const sendPost = await createPosts(postObject)
  window.open(location.origin, '_self');
});