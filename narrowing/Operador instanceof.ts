class User{
       name

       constructor(name:string){
              this.name = name;
       }
}

 class SuperUser extends User{
       constructor(name:string){
              super(name);
       }
 }

 const jhon = new User("Jhon")
 const paul = new SuperUser("Paul")

       function userGreeting(idUser:object){
             if(idUser instanceof SuperUser){
              console.log(`Olá, ${idUser.name}, Bem-vindo novamente!`)
             } else if(idUser instanceof User){
              console.log(`Olá, ${idUser.name}, Bem-vindo!`)
             }
       }

       userGreeting(jhon)
       userGreeting(paul)