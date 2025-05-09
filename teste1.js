let idade = 10;
let tipo = '';

if (idade >= 18) {
    tipo = 'adulto';
}

else if (idade >= 16) {
    tipo = 'adolescente';
}

else {
    tipo = 'criança';
}

console.log ('você é ' + tipo);