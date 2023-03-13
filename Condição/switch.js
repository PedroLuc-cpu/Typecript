"use strict";
// criar uma função que recebe os parametros do ENUM e criar as conditions
var Tempo;
(function (Tempo) {
    Tempo[Tempo["Verao"] = 0] = "Verao";
    Tempo[Tempo["Inverno"] = 1] = "Inverno";
    Tempo[Tempo["Outono"] = 2] = "Outono";
    Tempo[Tempo["Primavera"] = 3] = "Primavera";
})(Tempo || (Tempo = {}));
const hearding = document.createElement('h1');
function getTempo(tempo) {
    switch (tempo) {
        case Tempo.Verao:
            hearding.textContent = 'Verao';
            hearding.style.textAlign = 'center';
            document.body.appendChild(hearding);
            break;
        case Tempo.Inverno:
            hearding.textContent = 'Inverno';
            hearding.style.textAlign = 'center';
            document.body.appendChild(hearding);
            break;
        case Tempo.Outono:
            hearding.textContent = 'Outono';
            hearding.style.textAlign = 'center';
            document.body.appendChild(hearding);
            break;
        case Tempo.Primavera:
            hearding.textContent = 'Primavera';
            hearding.style.textAlign = 'center';
            document.body.appendChild(hearding);
            break;
        default:
            throw new Error("Invalid Tempo");
    }
}
getTempo(Tempo.Inverno);
