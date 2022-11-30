import "../scss/app.scss";
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

window.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("ul");
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const arrayOfPok = data.results
    arrayOfPok.map(pokemon => {
      const li = document.createElement("li")
      li.innerText = pokemon.name
      ul.appendChild(li)
    })
  }) 
});






