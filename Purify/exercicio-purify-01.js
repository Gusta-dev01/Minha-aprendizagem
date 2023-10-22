let stringCorrompida = 'Gust@avo!#'
//replace === substituir
//regex ou expressão regulares

const dadosPurificados = stringCorrompida.replace(/[!@#$*%&()]/g, '');
console.log(dadosPurificados);