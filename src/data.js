export const filtrar = (campo, array) => {
  const filtrado = array.filter((item) => item.type.includes(campo))
  return filtrado;
}

export const buscarNome = (campo, array) => {
  const buscado = array.filter((item) => item.name.includes(campo))
  return buscado;
}

export const ordemNomes = (campo, array) => {
  const novoArray = [...array];
  const opcao = novoArray.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  if (campo === "Z - A") {
    return opcao.reverse();
  } else {
    return opcao;
  }
}

export const chocarOvo = (km) => {
  return (km / 5) * 60
}
