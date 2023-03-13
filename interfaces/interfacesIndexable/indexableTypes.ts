interface indexable{
       [index:number]:string
}

let listaComida: indexable
       listaComida = ["bolo de cenoura", "Leite", "Carne mal passada", "Frango frito"]
let comidaFavorita: string = listaComida[1]
console.log(comidaFavorita)