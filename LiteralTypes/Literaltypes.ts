type testResult = "pass" | "fail" | "imcomplete";
let myResult: testResult
myResult = "imcomplete" //* Valid
myResult = "pass" //* Valid
// myResult = "failure";       //* Invalid


/*
O TypeScript também possui tipos literais numéricos, que agem da mesma forma que os literais de cadeia de caracteres. Por exemplo: */

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid

//também pode usar booleanvalores ao definir tipos literais ou qualquer combinação de tipos.

type BollType = true | false
let valid: BollType

valid = true
valid = false
