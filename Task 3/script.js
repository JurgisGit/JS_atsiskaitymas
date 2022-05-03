/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const output = document.getElementById("output")

async function append() {
    const response = await fetch(ENDPOINT);
    let users = await response.json();
    for (i = 0; i < users.length; i++) {

        let div = document.createElement("div")
                output.appendChild(div)
                div.textContent += `${users[i].login} – ${users[i].avatar_url}`;
    }
    const text = document.getElementById("message")
    text.remove()
}

