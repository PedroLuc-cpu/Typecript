"use strict";
//        function IMCCalculator(peso:number, altura: number){
//               let ICM = peso / (altura ** 2)
//               console.log(ICM)
//               function getWeightCategory(imc:number):string{
//                      if(imc < 18.5){
//                            return"AbaixoPeso"
//                      }else if(imc < 25){
//                             return"PesoNormal"
//                      }else if(imc <30){
//                             return"Sobrepeso"
//                      }else if(imc <35){
//                             return"Obesidade grau 1"
//                      }else if(imc < 40){
//                             return"Obesidade grau 2"
//                      }else{
//                             return"Obesidade grau 3"
//                      }
//               }
//               return getWeightCategory(ICM)
//        }
// console.log(IMCCalculator(75.54,1.3))
class IMCCalculator {
    calculateIMC(weight, height) {
        return weight / (height ** 2);
    }
    getWeightCategory(imc) {
        if (imc < 18.5) {
            return "Abaixo do peso";
        }
        else if (imc < 25) {
            return "Peso normal";
        }
        else if (imc < 30) {
            return "Sobrepeso";
        }
        else if (imc < 35) {
            return "Obesidade grau 1";
        }
        else if (imc < 40) {
            return "Obesidade grau 2";
        }
        else {
            return "Obesidade grau 3";
        }
    }
}
// Exemplo de uso da calculadora
const calculator = new IMCCalculator();
const weight = 80; // em kg
const height = 1.8; // em metros
const imc = calculator.calculateIMC(weight, height);
const category = calculator.getWeightCategory(imc);
console.log(`Seu IMC é ${imc.toFixed(3)} (${category}).`);
