
export function filtrar(campo, array) {
 const filtrado = array.filter((item) => item.type.includes(campo))
return filtrado;
}

export  function buscarNome(campo, array){
  const buscado = array.filter((item) => item.name.includes(campo))
return buscado;
}

export function imc(peso, altura){
  const imc = ((peso)/(altura*altura)).toFixed(2);
  if(imc <= 18.5){
    return ("Pokemon abaixo do peso: "+imc);
  }else if(imc > 18.5){
    return ("Pokemon com peso normal: "+imc);
  }else{
    return ("Pokemon acima do peso: "+ imc);
  }
}

export function ordemNomes(campo, array){
  const opcao = array.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  if(campo === "Z - A"){
    return opcao.reverse();
  }else{
    return opcao;
  }
}