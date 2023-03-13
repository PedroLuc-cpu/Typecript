"use strict";
const buscarApi = 'https://jsonplaceholder.typicode.com/posts';
async function buscandoPost(url) {
    let res = await fetch(url);
    let body = await res.json();
    return body;
}
async function mostrandoPost() {
    let posts = await buscandoPost(buscarApi);
    let post = posts[0];
    console.log("Post#" + post.id);
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()));
    console.log('Title: ' + post.title);
    console.log('Body: ' + post.body);
}
mostrandoPost();
