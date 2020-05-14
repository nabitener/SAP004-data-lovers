import {filtrar, ordemNomes, buscarNome} from '../src/data.js';

const testeFiltrar = [
  {"type": ["Fire", "Flying"]},
  {"type": ["Grass", "Poison"]},
  {"type": ["Fire"]}
]

describe('filtrar', () => {
  it('should be a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('should return "type: ["Fire", "Flying"], type: ["Fire"]" for "Fire" with testeFiltar', () => {
    expect(filtrar("Fire", testeFiltrar)).toStrictEqual([{"type": ["Fire", "Flying"]}, {"type": ["Fire"]}]);
  });
});

const testeOrdem = [
  { "name": "Squirtle" },
  { "name": "Bulbasaur" },
  { "name": "Charmeleon" }
];

describe('ordemNomes', () => {
  it('should be a function', () => {
    expect(typeof ordemNomes).toBe('function');
  });

  it('should return "Bulbasaur, Charmeleon, Squirtle" for "A - Z" with testeOrdem', () => {
    expect(ordemNomes("A - Z", testeOrdem)).toStrictEqual([{"name": "Bulbasaur"}, {"name": "Charmeleon"}, {"name": "Squirtle"}]);
  });
});

it('should return "Squirtle, Charmeleon, Bulbasaur" for "Z - A" with testeOrdem', () => {
  expect(ordemNomes("Z - A", testeOrdem)).toStrictEqual([{"name": "Squirtle"}, {"name": "Charmeleon"}, {"name": "Bulbasaur"}]);
});


const testeBuscar = [
  {"name": "Blastoise"},
  {"name": "Wartortle"},
  {"name": "Nidorina"}
]

describe('buscarNome', () => {
  it('should be a function', () => {
    expect(typeof buscarNome).toBe('function');
  });

  it('should return "Blastoise" for "Blastoise" with testeBuscar', () => {
    expect(buscarNome("Blastoise", testeBuscar)).toStrictEqual([{"name": "Blastoise"}]);
  });
});

