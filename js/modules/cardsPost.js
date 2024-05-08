import { fetchAllPosts } from "./api/devtoAPi.js"

let createPostsCard = (postsObject) =>{
    let {content, date, coverPost, author, tags, title, reactions} = postsObject
    
    let postsCard = document.createElement("div")
    postsCard.classList.add("card", "card-group")

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let theAuthor = document.createElement("h4")
    theAuthor.classList.add("autor")
    theAuthor.innerText = author
    
    let emojisCard = document.createElement("img")
    emojisCard.setAttribute("src", "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg")

    let laFecha = documento.createElement("p")
    laFecha.classList.add("post-fecha")
    laFecha.innerText = date

    let cardTitle = document.createElement("h3")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = title

    let cardDateAuthor = document.createElement("span")
    cardDateAuthor.classList.add("author-Post")

    let cardTags = document.createElement("p")
    cardTags.classList.add("hashtags")
    cardTags.innerText = tags

    let cardinfo = document.createElement("p")
    cardinfo.classList.add("card-text")
    cardinfo.innerText = content

    let productImage = document.createElement("img");
  productImage.setAttribute("src", coverPost);

    let reactionsCard = document.createElement("a")
    reactionsCard.classList.add("emojis-reaction")
    reactionsCard.innerText = reactions

    cardDateAuthor.append(theAuthor, laFecha)

    cardBody.append(cardDateAuthor, emojisCard, cardTitle, cardTags, cardinfo)

  postsCard.append(productImage, cardBody)
  
  return postsCard
}
const printPosts= (productsArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    //wrapper.innerHTML = "";
    productsArray.forEach((product) => {
      wrapper.append(createPostsCard(product));
    });
  };

const printAllPosts = async () => {
    let postsArray = await fetchAllPosts()
    printPosts(petShopArray, "post-cars-wrapper")
}

printAllPosts()