import { fetchPostByKey } from "../modules/api/devtoAPi";

const url = window.location.href;

const params = new URLSearchParams(new URL(url).search);

let postKey = params.get("postKey");
console.log(postKey);

const printPostData = async (postKey) => {
    let postData = await fetchPostByKey(postKey);
    console.log(postData);
    let {
     author,
     content,
     coverPost,
     date,
     reactions,
     tags,
     title
    } = postData;
  
    document.getElementById("post-picture").setAttribute("src", coverPost);
    document.getElementById("foto-profile").innerText = fotoPerfil;
    document.getElementById("autor-post").innerText = author;
    document.getElementById("post-fecha").innerText = date;
    document.getElementById("titulo-post").innerText = title;
    document.getElementById("post-contenido").innerText = content;
    document.getElementById("post-hashtags").innerText = tags;
    document.getElementById("reacciones").innerText = reactions;
}

printPostData(postKey)

