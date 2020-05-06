import {filtrar, ordemNomes, buscarNome} from '../src/data.js';

const testeFiltrar = [
  {"type": ["Fire", "Flying"]},
  {"type": ["Grass", "Poison"]},
  {"type": ["Fire"]}
]

describe('filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('filtrar', () => {
    expect(filtrar("Fire", testeFiltrar)).toStrictEqual([{"type": ["Fire", "Flying"]}, {"type": ["Fire"]}]);
  });
});

const testeOrdem = [
  { "name": "Squirtle" },
  { "name": "Bulbasaur" },
  { "name": "Charmeleon" }
];

describe('ordemNomes', () => {
  it('is a function', () => {
    expect(typeof ordemNomes).toBe('function');
  });

  it('ordemNomes', () => {
    expect(ordemNomes("A - Z", testeOrdem)).toStrictEqual([{"name": "Bulbasaur"}, {"name": "Charmeleon"}, {"name": "Squirtle"}]);
  });
});

it('ordemNomes', () => {
  expect(ordemNomes("Z - A", testeOrdem)).toStrictEqual([{"name": "Squirtle"}, {"name": "Charmeleon"}, {"name": "Bulbasaur"}]);
});


const testeBuscar = [
  {"name": "Blastoise"},
  {"name": "Wartortle"},
  {"name": "Nidorina"}
]

describe('buscarNome', () => {
  it('is a function', () => {
    expect(typeof buscarNome).toBe('function');
  });

  it('buscarNome', () => {
    expect(buscarNome("Blastoise", testeBuscar)).toStrictEqual([{"name": "Blastoise"}]);
  });
});

