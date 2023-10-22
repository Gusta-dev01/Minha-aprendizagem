const precos = [100, 200, 100, 500, 50]

let soma = 0;
let menor = precos[0];

for (let preco of precos) {
  soma += preco;
 //nós estamos usando if e else ternário
  menor = preco < menor ? preco : menor;
}

const desconto = precos.length >= 5 ? menor : 0;
console.log(soma - desconto);