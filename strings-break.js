
const palavra = 'Gustavo';
let encontrado = false;

for(let letra of palavra) {
if (letra === 'h'){
    console.log('Tem a letra "H"')
    encontrado = true;
break;
}
}
if (!encontrado)              //(encontrado === false)
{
    console.log('Não tem  a letra "H" ');
}


