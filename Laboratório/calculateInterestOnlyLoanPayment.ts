interface Loan{
       principal: number
       interestRate: number // Interest rate percentage (eg. 14 is 14%)
}

interface ConvertionalLoan extends Loan{
       months: number // total number of months
}

function calculateInterestOnlyLoanPayment(loanTerms:Loan):string{
    let intetest = loanTerms.interestRate / 1200
    let payment;
    payment = loanTerms.principal * intetest
    return "O pagamento do empréstimo apenas com juros é " + payment.toFixed(2)
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal:3000, interestRate:5})
console.log(interestOnlyPayment)

function calculateConventionalLoanPayment(loanTerms:ConvertionalLoan):string{
       let interst: number = loanTerms.interestRate / 1200;
       let payment: number 
       payment = loanTerms.principal * interst / (1 - (Math.pow(1/(1 + interst),loanTerms.months)))
       return "O pagamento do empréstimo apenas com juros é " + payment.toFixed(2)
}

let conventionalPayment = calculateConventionalLoanPayment({principal:30000, interestRate: 5, months:180})
console.log(conventionalPayment)