//Funcion para traer los posts de la DB
const traerPost = async () => {
    let response = await fetch("https://reto-js-10b99-default-rtdb.firebaseio.com/blogDevTo/.json");
    let posts = await response.json();
    let keys = Object.keys(posts);
    let arregloPosts = keys.map((key) => {
        return {...posts[key], key};
    });
    return arregloPosts;
};

export { traerPost };