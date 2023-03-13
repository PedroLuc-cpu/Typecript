const buscarApi = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post{
       userId:number;
       id: number;
       title:string;
       body:string;
}

async function buscandoPost(url:string){
       let res = await fetch(url)
       let body = await res.json()
       return body as Post[]
}

async function mostrandoPost(){
       let posts = await buscandoPost(buscarApi)
       let post = posts[0]
       console.log("Post#" + post.id)
       console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
       console.log('Title: ' + post.title)
       console.log('Body: ' + post.body)
}

mostrandoPost()