interface Message{
       text: string
       sender:string
}

function displayMessage({text, sender}:Message){
       console.log(`Message de ${sender}: ${text}`)
}

displayMessage({sender:"Pedro Lucas", text:"Você é o melhor programador"})