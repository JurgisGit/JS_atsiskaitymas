/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


document.querySelector("form").addEventListener("submit", kgConvert);

function kgConvert(event) {
    event.preventDefault();
    const result = document.querySelector("input").value;

    document.getElementById("outputPounds").innerText = result * 2.2046;
    document.getElementById("outputGrams").innerText = result / 0.0010000;
    document.getElementById("outputOunces").innerText = result * 35.274;
}