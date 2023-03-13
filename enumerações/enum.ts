/*As enumerações permitem que você especifique uma lista de opções disponíveis.
Elas são principalmente úteis quando você tem um conjunto de valores que um determinado
tipo de variável pode assumir. Vamos imaginar que você tem um campo em um banco de dados externo
chamado ContractStatus, que contém os números 1, 2 ou 3, que representam os seguintes status de 
contato: Permanent, Temp e Apprentice. Criaremos uma enumeração com esses valores e exploraremos o 
suporte do TypeScript.*/


enum ContractStatus{
       Permanent = 1,
       Temp,
       Appremtice
}

let employeeStatus: ContractStatus = ContractStatus.Temp
console.log(employeeStatus)


/*Para exibir o nome associado ao valor de enumeração, podemos usar o indexador fornecido.
Adicione o seguinte à parte inferior do código:*/
console.log(ContractStatus[employeeStatus])