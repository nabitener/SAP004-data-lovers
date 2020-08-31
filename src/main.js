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

const limpaCampo = (selector) => {
  const campo = document.querySelector(selector);
  campo.value = "";
  card(arrayPokemon);
};

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

const candy = (element) => {
  let doce = "";
  if (!element.candy_count == 0) {
    doce = `
     <div class="lista-info-candy">
     <h4>Candy count: </h4>${element.candy_count}
     </div>
     `;
  }
  return doce;
};

const ovo = (element) => {
  let msg = "";
  if (element.egg == "Not in Eggs") {
    msg = "Não há ovos para serem chocados";
  } else {
    let eggKm = element.egg.replace("km", "");
    msg = `
        Uma pessoa andando 5km/h vai demorar: ${chocarOvo(
          eggKm
        )} min para chocar o ovo 
        `;
  }
  return msg;
};

const evolution = (element) => {
  let templateEvolution = "";
  if (!element.next_evolution == 0) {
    const arrayNextEvolution = element.next_evolution.map((next) => next.name);
    arrayNextEvolution.forEach((item) => {
      let buscarImg = buscarNome(item, arrayPokemon);
      let buscarImgArray = buscarImg.find((itemArray) => itemArray.img);

      templateEvolution = `
        <div class="lista-evolution-nome"><h4>${item}</h4></div>
        <img class="lista-evolution-img" src=${buscarImgArray.img}>
        `;
    });
  } else {
    templateEvolution = `<p class="lista-info-evolution">Este Pokémon não evolui</p>`;
  }
  return templateEvolution;
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

    const info = document.querySelector(".lista-pokedex-link");
    info.onclick = () => {
      modalCard(element);
    };
  });
};

const modalCard = (element) => {
  let divPai = document.createElement("div");
  divPai.classList.add("modal-content");

  divPai.innerHTML = `
  
  <section class="lista-info">
  <span class="close">X</span>
  <div class="lista-info-height">
    <h4>Altura:</h4>${element.height}
  </div>
  <div class="lista-info-weight">
    <h4>Peso:</h4>${element.weight}
  </div>
  ${candy(element)}
  <div class="lista-info-egg">
    <h4>${ovo(element)}</h4>
  </div>
  <div class="lista-info-fraqueza">
    <h4>Fraqueza:</h4>
    ${tipos(element.weaknesses)}
  </div>
  <div class="lista-info-evolution">
    <h4>Próxima evolução:</h4>
    <div class="lista-evolution">
      ${evolution(element)}
    </div>
  </div>
</section>
<section class="divImg">
  <img class="lista-info-img" src=${element.img}>
  <p class="lista-info-num">
  <h4>${element.num}</h4>
  </p>
  <p class="lista-info-nome">
  <h4>${element.name}</h4>
  </p>
</section>
  `;

  divModal.appendChild(divPai);
  const botaoFechar = document.querySelector(".close");
  botaoFechar.onclick = () => {
    modal.style.display = "none";
  };
  modal.style.display = "block";
};

card(arrayPokemon);
