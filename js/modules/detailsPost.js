import { fetchPostByKey } from "../modules/api/devtoAPi";

const url = window.location.href;

const params = new URLSearchParams(new URL(url).search);

let postKey = params.get("postKey");
console.log(postKey);

const printPostData = async (postKey) => {
    let postData = await fetchPostByKey(postKey);
    console.log(postData);
    let {
      autor,
      fecha,
      fotoPerfil,
      logo,
      picture,
      reaccionesYasi,
      tags,
      titulo,
      contenido
    } = postData;
  
    document.getElementById("post-picture").setAttribute("src", picture);
    document.getElementById("logo-name").innerText = logo;
    document.getElementById("foto-profile").innerText = fotoPerfil;
    document.getElementById("autor-post").innerText = autor;
    document.getElementById("post-fecha").innerText = fecha;
    document.getElementById("titulo-post").innerText = titulo;
    document.getElementById("post-contenido").innerText = contenido;
    document.getElementById("post-hashtags").innerText = tags;
    document.getElementById("reacciones").innerText = reaccionesYasi;
}

printPostData(postKey)