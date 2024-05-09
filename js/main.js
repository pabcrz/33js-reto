//Crear el DOM para los post
const creacionPost = (post,index) => {
    let {coverPost, avatar, author, date, title, tags, reactions,key} = post;

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
    imagenUsuario.setAttribute("src", avatar);
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
    contenedorTexto.append(tituloElement, contenedorTags);

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

    let toDetails = document.createElement("a");
    toDetails.setAttribute("href", `../views/detailsPost.html?postKey=${key}`);

    toDetails.append(contenedorTexto)

    index === 0 ? 
    contenedorPost.append(contenedorImagen, contenedorUsuario, toDetails, contenedorEmojisComentarios) :
    contenedorPost.append(contenedorUsuario, contenedorTexto, contenedorEmojisComentarios);

    return contenedorPost;
};

//Impresion de los post en el DOM
const imprimirPost = (arreglo, areaImpresion) => {
    let contenedorPrincipal = document.getElementById(areaImpresion);

    while (contenedorPrincipal.firstChild) {
        contenedorPrincipal.removeChild(contenedorPrincipal.firstChild);
    };

    arreglo.forEach((post, index) => {
        contenedorPrincipal.append(creacionPost(post, index));
    });
};

//Llamado de las funciones
const impresionPosts = async () => {
    let postsArray = await traerPost();
    imprimirPost(postsArray, "post-cards");
};

impresionPosts();

//Filtrado de relevant posts
let relevantBtn = document.getElementById("relevant");

relevantBtn.addEventListener("click", async() => {
    let arreglo = await traerPost();
    let arregloFiltrado = arreglo.filter((post) => post.relevant === true);
    console.log(arregloFiltrado);
    imprimirPost(arregloFiltrado, "post-cards");
});

//Filtrado de latest post
let latestBtn = document.getElementById("latest");

latestBtn.addEventListener("click", async() => {
    let arreglo = await traerPost();
    let arregloOrdenado = arreglo.toSorted((a,b) => {
        let x = a.date.toLowerCase();
        let y = b.date.toLowerCase();
        if (x > y) {return -1;}
        if (x < y) {return 1;}
        return 0;
      }); 
    let arregloPequeño = arregloOrdenado.slice(0,3);
    console.log(arregloPequeño);
    imprimirPost(arregloPequeño, "post-cards");
});

//Filtrado de top
let topBtn = document.getElementById("top");

topBtn.addEventListener("click", async() => {
    let arreglo = await traerPost();
    let arregloFiltrado = arreglo.filter((post) => post.rating >= 9);
    console.log(arregloFiltrado);
    imprimirPost(arregloFiltrado, "post-cards");
});

//Filtrado del buscador
let buscador = document.getElementById("filter-post");

buscador.addEventListener("keyup", async(event) => {
    let consulta = event.target.value;
    let arreglo = await traerPost();
    let result = arreglo.filter((post) => {
        return post.title.toLowerCase().includes(consulta.toLowerCase());
    });
    console.log(result);
    imprimirPost(result, "post-cards");
});

//Filtrado del Hastag
const arregloReducido = async (tag) => {
    let arreglo = await traerPost();
    let nuevoArreglo = arreglo.filter((post) => {
        return post.tags.includes(tag);
    });
    let arregloPequeño = nuevoArreglo.slice(0,5);
    return arregloPequeño;
};

//Crecaion del Dom
const creacionTitulo = (post) => {
    let {title} = post
    
    let tituloHastag = document.createElement("a");
    tituloHastag.classList.add("discussItem");
    tituloHastag.setAttribute("src", "../index.html");
    let tituloText = document.createTextNode(title);

    tituloHastag.append(tituloText);
    return tituloHastag;
};

//Impresion de titulos
const printListItems = (arreglo, contenedor) => {
    let contenedorPrincipal = document.getElementById(contenedor);

    while (contenedorPrincipal.firstChild) {
        contenedorPrincipal.removeChild(contenedorPrincipal.firstChild);
    };

    arreglo.forEach((post) => {
        contenedorPrincipal.append(creacionTitulo(post));
    });   
};

//Mostrar en DOM
const mostrarTitulos = async() => {
    let result = await arregloReducido("css");
    printListItems(result, "hastags-contenedor");
};

mostrarTitulos();

import { traerPost } from "./modules/api/devtoAPi.js";