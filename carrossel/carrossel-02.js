const sequencia = ['<', '<', '<', '>', '>'];
let indice = 0;
for (let item of sequencia) {
    indice = item === '>' ? indice + 1 : indice - 1;
}
indice = indice < 0 ? 6 : indice > 6 ? 0 : indice;
console.log(indice);