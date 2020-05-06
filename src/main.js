import { filtrar, ordemNomes, buscarNome } from './data.js';
import data from "./data/pokemon/pokemon.js";

const arrayPokemon = data["pokemon"];
const ul = document.querySelector("#lista-pokemon");


card(arrayPokemon);

let campoFiltro = document.querySelector(".filtrar-pokemon")
campoFiltro.addEventListener("input", function filtrados() {
  card(filtrar(campoFiltro.value, arrayPokemon));
});

let botaoLimparFiltro = document.querySelector("#botao-limpar");
botaoLimparFiltro.addEventListener("click", function limparFiltro() {
  let campoFiltro = document.querySelector(".filtrar-pokemon");
  campoFiltro.value = "";
  card(arrayPokemon);
});

let campoOrdem = document.querySelector("#campo-ordenacao-pokemon");
campoOrdem.addEventListener("input", function(){
  card(ordemNomes(campoOrdem.value, arrayPokemon));
});

let campoBusca = document.querySelector("#campo-busca");
campoBusca.addEventListener("input", function Buscado() {
  let campoBuscado = document.querySelector("#campo-busca").value;
  campoBuscado = campoBuscado.substring(0, 1).toUpperCase().concat(campoBuscado.substring(1));
  card(buscarNome(campoBuscado, arrayPokemon));
});



function card(array) {
  ul.innerHTML = " ";
  for (let i = 0; i < array.length; i++) {
    let dadoImagem = array[i].img;
    let dadoNome = array[i].name;
    let dadoTipo = array[i].type;

    let li = document.createElement("li");
    li.classList.add("lista-pokedex-link");
    li.innerHTML += "<h4>" + dadoNome + "</h4>";
    ul.appendChild(li);

    let img = document.createElement("img");
    img.classList.add("lista-img");
    img.src += dadoImagem;
    li.appendChild(img);

    let tipo = document.createElement("tipo");
    tipo.classList.add("lista-tipo");
    li.appendChild(tipo);

    let tipoZero = document.createElement("tipo");
    tipoZero.classList.add("lista-tipo-zero");
    tipoZero.textContent = dadoTipo[0];
    tipo.appendChild(tipoZero);

    if(!dadoTipo[1] == 0){
    let tipoUm = document.createElement("tipo");
    tipoUm.classList.add("lista-tipo-um");
    tipoUm.textContent = dadoTipo[1];
    tipo.appendChild(tipoUm);
    }
  }
}
