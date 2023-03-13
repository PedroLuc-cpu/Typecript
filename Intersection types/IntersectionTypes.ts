interface Employee{
       employeeID: number,
       age: number
}

interface Manager{
       stockPlan: boolean
}

//Um tipo de interseção usa o e comercial (&) para separar cada tipo.
type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
       employeeID: 12345,
       age: 21,
       stockPlan: true
}

console.log(newManager)

/*
Os tipos de interseção estão fortemente relacionados a tipos de união, mas eles são usados de maneira
diferente. Um tipo de interseção combina dois ou mais tipos para criar um tipo que tenha todas as 
propriedades dos tipos existentes. Uma interseção permite que você adicione tipos existentes para obter]
um tipo que tenha todos os recursos necessários.
*/