interface loginServicesUsers{
       nome:string
       sobrenome:string
       idade: number
}

       function getDateUses(user:loginServicesUsers):string{
              let myUsers = user
              
              let meuano = user.idade / 2022

                     return `${myUsers.nome} ${myUsers.sobrenome} tem Subtração:${meuano}`
       }

       console.log(getDateUses({nome:"Pedro",sobrenome:"Lucas",idade:2001}))
