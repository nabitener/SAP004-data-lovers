import { filtrar, ordemNomes, buscarNome, chocarOvo } from "./data.js";
import data from "./data/pokemon/pokemon.js";

const arrayPokemon = data["pokemon"];
const campoBusca = document.querySelector("#campo-busca");
const campoFiltro = document.querySelector(".filtrar-pokemon");
const campoOrdem = document.querySelector("#campo-ordenacao-pokemon");
const botaoLimparFiltro = document.querySelector("#botao-limpar");
const botaoLimparOrdem = document.querySelector("#limpar-ordem-pokemon");
const section = document.querySelector("#pokemons");
const divModal = document.querySelector(".modal");


let modal = document.getElementById("myModal");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

campoBusca.addEventListener("input", function Buscado() {
  let campoBuscado = campoBusca.value;
  campoBuscado = campoBuscado
    .substring(0, 1)
    .toUpperCase()
    .concat(campoBuscado.substring(1));
  card(buscarNome(campoBuscado, arrayPokemon));
});

campoFiltro.addEventListener("input", function filtrados() {
  card(filtrar(campoFiltro.value, arrayPokemon));
});

campoOrdem.addEventListener("input", function () {
  card(ordemNomes(campoOrdem.value, arrayPokemon));
});

botaoLimparFiltro.addEventListener("click", function () {
  limpaCampo(".filtrar-pokemon");
});

botaoLimparOrdem.addEventListener("click", function () {
  limpaCampo("#campo-ordenacao-pokemon");
});

const tipos = (array) => {
  let listaTipo = "";
  array.forEach((tipoPokemon) => {
    listaTipo += `
   <tipo class=${tipoPokemon}>${tipoPokemon}
    </tipo>
    `;
  });
  return listaTipo;
};

const card = (array) => {
  let ul = document.createElement("ul");
  ul.classList.add("lista-pokedex");

  array.forEach((element) => {
    ul.innerHTML += `
   <li id="pokemon."${element.num} class="lista-pokedex-link">
    <h4>${element.name}</h4>
    <p class="lista-num">${element.num}</p>
    <img class="lista-img" src=${element.img}>
    <tipo class="lista-tipo">
    ${tipos(element.type)}
    </tipo>
   </li>
  `;
    section.appendChild(ul);

    const lista = document.querySelector("li");
    lista.addEventListener("click", () => modalCard(element));
  });
};

card(arrayPokemon);

const modalCard = (element) => {
  let divPai = document.createElement("div");
  divPai.classList.add(".modal-content");

  divPai.innerHTML = `
 <div class="lista-info">
  <span class="close">X</span>
  <p class="lista-info-height">
   <h4>Altura:</h4>${element.height}
  </p>
  <p class="lista-info-weight">
   <h4>Peso:</h4>${element.weight}
  </p>
  <p class="lista-info-egg">
   <h4>${element.egg}</h4>
  </p>
  <p class="lista-info-fraqueza">
   <h4>Fraqueza:</h4>${element.weaknesses}
  </p>
  <p class="lista-info-evolution">
   <h4>Próxima evolução:</h4>
  </p>
  <div class="divImg">
   <img class="lista-info-img" src=${element.img}>
   <p class="lista-info-num"><h4>${element.num}</h4></p>
   <p class="lista-info-nome"><h4>${element.name}</h4></p>
  </div>
 </div>
  `;

  divModal.appendChild(divPai);
  const botaoFechar = document.querySelector(".close");
  botaoFechar.onclick = function () {
    modal.style.display = "none";
  };
   modal.style.display = "block";

  /* let div = document.createElement("div");
  div.classList.add("lista-info");
  divPai.appendChild(div);

  let divImg = document.createElement("div");
  divImg.classList.add("divImg");
  divPai.appendChild(divImg);

  let botaoFechar = document.createElement("span");
  botaoFechar.textContent = "X";
  botaoFechar.classList.add("close");
  div.appendChild(botaoFechar);

  let img = document.createElement("img");
  img.classList.add("lista-info-img");
  img.src = element.img;
  divImg.appendChild(img);

  let num = document.createElement("p");
  num.innerHTML = "<h4>" + element.num + "</h4>";
  num.classList.add("lista-info-num");
  divImg.appendChild(num);

  let nome = document.createElement("p");
  nome.innerHTML = "<h4>" + element.name + "</h4>";
  nome.classList.add("lista-info-nome");
  divImg.appendChild(nome);

  let height = document.createElement("p");
  height.innerHTML = "<h4>" + "Height: " + "</h4>" + element.height;
  height.classList.add("lista-info-height");
  div.appendChild(height);

  let weight = document.createElement("p");
  weight.innerHTML = "<h4>" + "Weight: " + "</h4>" + element.weight;
  weight.classList.add("lista-info-weight");
  div.appendChild(weight);

  if (!element.candy_count == 0) {
    let candy = document.createElement("p");
    candy.innerHTML = "<h4>" + "Candy count: " + "</h4>" + element.candy_count;
    candy.classList.add("lista-info-candy");
    div.appendChild(candy);
  }

  if (element.egg == "Not in Eggs") {
    let egg = document.createElement("p");
    egg.innerHTML = "<h4>" + "Não há ovos para serem chocados" + "</h4>";
    egg.classList.add("lista-info-egg");
    div.appendChild(egg);
  } else {
    let egg = document.createElement("p");
    let eggKm = element.egg.replace("km", "");
    egg.innerHTML =
      "<h4>" +
      "Uma pessoa andando 5km/h vai demorar:  " +
      "</h4>" +
      chocarOvo(eggKm) +
      " min para chocar o ovo";
    egg.classList.add("lista-info-egg");
    div.appendChild(egg);
  }

  let pFraqueza = document.createElement("p");
  pFraqueza.classList.add("lista-info-fraqueza");
  pFraqueza.innerHTML = "<h4>" + "Fraqueza" + "</h4>";
  div.appendChild(pFraqueza);

  element.weaknesses.forEach((fraqueza) => {
    const infoFraqueza = document.createElement("tipo");
    infoFraqueza.classList = fraqueza;
    infoFraqueza.textContent = fraqueza;
    pFraqueza.appendChild(infoFraqueza);
  });

  let pEvolution = document.createElement("p");
  pEvolution.innerHTML = "<h4>" + "Próxima evolução:" + "</h4>";
  pEvolution.classList.add("lista-info-evolution");
  div.appendChild(pEvolution);

  let divEvolution = document.createElement("div");
  divEvolution.classList.add("lista-evolution");
  pEvolution.appendChild(divEvolution);

  if (!element.next_evolution == 0) {
    const arrayNextEvolution = element.next_evolution.map((next) => next.name);
    arrayNextEvolution.forEach((item) => {
      let buscarImg = buscarNome(item, arrayPokemon);
      let buscarImgArray = buscarImg.find((itemArray) => itemArray.img);
      let evolutionImg = document.createElement("img");
      let evolution = document.createElement("p");
      evolutionImg.classList.add("lista-evolution-img");
      evolutionImg.src = buscarImgArray.img;
      evolution.innerHTML = "<h4>" + item + "</h4>";
      evolution.classList.add("lista-evolution-nome");
      evolution.appendChild(evolutionImg);
      divEvolution.appendChild(evolution);
    });
  } else {
    const evolution = document.createElement("p");
    evolution.innerHTML = "Este Pokémon não evolui";
    evolution.classList.add("lista-info-evolution");
    div.appendChild(evolution);
  }
  */
};

function limpaCampo(selector) {
  const campo = document.querySelector(selector);
  campo.value = "";
  card(arrayPokemon);
}
