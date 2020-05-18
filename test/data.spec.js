import {filtrar, ordemNomes, buscarNome, chocarOvo} from '../src/data.js';

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

describe('chocarOvo', () => {
  it('should be a function', () => {
    expect(typeof chocarOvo).toBe('function');
  });

  it('should return "24" with "2"', () => {
    expect(chocarOvo(2)).toBe(24);
  });
});

describe('chocarOvo', () => {
  it('should be a function', () => {
    expect(typeof chocarOvo).toBe('function');
  });

  it('should return "60" with "5"', () => {
    expect(chocarOvo(5)).toBe(60);
  });
});

describe('chocarOvo', () => {
  it('should be a function', () => {
    expect(typeof chocarOvo).toBe('function');
  });

  it('should return "120" with "10"', () => {
    expect(chocarOvo(10)).toBe(120);
  });
});