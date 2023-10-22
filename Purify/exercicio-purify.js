let stringCorrompida = 'Gust@avo!#'

let dadosPurificados = '';
for(let caractere of stringCorrompida){
    if(caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '*' || caractere === '%' || caractere === '&' || caractere === ')' || caractere === '(' || caractere === '.'){
//ignorar
    } else{
        dadosPurificados = dadosPurificados + caractere;
        //dado purificado += caractere 
    }
}
console.log(dadosPurificados);