"use strict";
function displayMessage({ text, sender }) {
    console.log(`Message de ${sender}: ${text}`);
}
displayMessage({ sender: "Pedro Lucas", text: "Você é o melhor programador" });
