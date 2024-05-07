const formBtn = document.getElementById("form-btn");

formBtn.addEventListener("click", (event) => {
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
  console.log(postObject);
  // window.open(location.origin)
});
