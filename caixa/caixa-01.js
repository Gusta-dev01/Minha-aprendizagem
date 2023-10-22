const precos = [100, 200, 100, 500, 50]

let soma = 0;

for(let preco of precos){
    soma += preco;   
}
if(precos.length >= 5){
    //tem promoçao
    let menor = precos [0]
    for(let itemIgual of precos){
        //se o item atual for < que o item ate agora 
        if(itemIgual < menor){
            //o item atual eh o novo menor
            menor = itemIgual;

        }
    }
    console.log(soma - menor);
}else {
    // nao tem promoçao trs
    console.log(soma);
}