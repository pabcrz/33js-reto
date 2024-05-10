import { fetchAllPosts } from "./api/devtoAPi.js"
/*
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

    let laFecha = document.createElement("p")
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

export {createPostsCard}
*/

const creacionPost = (post) => {
  let {coverPost, avatar, author, date, title, tags, reactions, content} = post;

  //**Contenedor de un post
  let contenedorPost = document.createElement("div");
  contenedorPost.classList.add("card-post");

  //**Seccion de imagen del post
  let contenedorImagen = document.createElement("div");
  contenedorImagen.classList.add("head");
  let imagen = document.createElement("img");
  imagen.classList.add("imagen-post");
  imagen.setAttribute("src", coverPost);
  contenedorImagen.append(imagen);

  //**Contenedor para foto y datos del usuario
  let contenedorUsuario = document.createElement("div");
  contenedorUsuario.classList.add("content-card");
  //contenedor para foto de usuario
  let contenedorFotos = document.createElement("div");
  contenedorFotos.classList.add("logo-image");
  //Foto del usuario
  let contenedorFotoUsuario = document.createElement("div");
  contenedorFotoUsuario.classList.add("profile");
  let imagenUsuario = document.createElement("img");
  imagenUsuario.setAttribute("src", "https://randomuser.me/api/portraits/men/1.jpg)")
  contenedorFotoUsuario.append(imagenUsuario);
  contenedorFotos.append(contenedorFotoUsuario);
  //Contenedor de datos del post
  let contenedorDatos = document.createElement("div");
  contenedorDatos.classList.add("name-date");
  let usuario = document.createElement("h4");
  usuario.classList.add("autor");
  let usuarioText = document.createTextNode(author);
  usuario.append(usuarioText);
  let fechaPost = document.createElement("p");
  fechaPost.classList.add("fecha");
  let fechaText = document.createTextNode(date);
  fechaPost.append(fechaText);
  contenedorDatos.append(usuario,fechaPost);
  contenedorUsuario.append(contenedorFotos,contenedorDatos);

  //**Contenedor del texto del post
  let contenedorTexto = document.createElement("div");
  contenedorTexto.classList.add("content-card2");
  //Titulo
  let tituloElement = document.createElement("h3");
  tituloElement.classList.add("titulo-post");
  let tituloText = document.createTextNode(title);
  tituloElement.append(tituloText);
  //Tags
  let contenedorTags = document.createElement("div");
  contenedorTags.classList.add("hashtags");
  let arregloTags = tags.split(",");
  arregloTags.forEach((tag) => {
      let span = document.createElement("span");
      span.classList.add("hastag");
      let tagText = document.createTextNode(`#${tag}`);
      span.append(tagText);
      contenedorTags.append(span);
  });
let contentCard = document.createElement("div")
contentCard.classList.add("content-text")
let contentPost = document.createElement("p")
contentPost.classList.add("content-post")
contentPost.innerText = content
contentCard.append(contentPost)

  contenedorTexto.append(tituloElement, contenedorTags, contentCard);

  //**Contenedor emojis y comentarios
  let contenedorEmojisComentarios = document.createElement("div");
  contenedorEmojisComentarios.classList.add("reactions");
  //Contenedor emojis
  let contenedorEmojis = document.createElement("div");
  contenedorEmojis.classList.add("emojis-reaction");
  //emojis
  let emoji1 = document.createElement("img");
  emoji1.setAttribute("src", "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg");
  let emoji2 = document.createElement("img");
  emoji2.setAttribute("src", "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg");
  let emoji3 = document.createElement("img");
  emoji3.setAttribute("src", "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg");
  let emoji4 = document.createElement("img");
  emoji4.setAttribute("src", "https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg");
  let emoji5 = document.createElement("img");
  emoji5.setAttribute("src", "https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg");
  //Otros
  let reaccionesElement = document.createElement("span");
  reaccionesElement.classList.add("reaction-post");
  let reaccionesnum = document.createTextNode(reactions);
  reaccionesElement.append(reaccionesnum);
  let comentarios = document.createElement("span");
  comentarios.classList.add("comments-post");
  let comentariosnum = document.createTextNode("comentarios");
  comentarios.append(comentariosnum);
  contenedorEmojis.append(emoji1, emoji2, emoji3, emoji4, emoji5, reaccionesElement, comentarios);
  contenedorEmojisComentarios.append(contenedorEmojis);

   contenedorPost.append(contenedorImagen, contenedorUsuario, contenedorTexto, contenedorEmojisComentarios)
 
  return contenedorPost;
};

const printPost = (postArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  
  postArray.forEach((post) => {
    wrapper.append(creacionPost(post))
  });
};

const printAllPost = async () => {
  let postArray = await fetchAllPosts();
  printPost(postArray, "post-cards-wrapper");
};

printAllPost();
