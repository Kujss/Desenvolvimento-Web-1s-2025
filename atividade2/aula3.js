let num_A = 2;
let num_B = 8.0;
let num_C;

const operacoes = ["adição", "subtração", "multiplicação", "divisão"];

function imprimirResultado(operando1, operando2, operacao, resultado){
    console.log(`Resultado da ${operacao} entre ${operando1} e ${operando2} é ${resultado}`);
}

num_C = num_A + num_B;
//imprimirResultado(num_A, num_B, operacoes[0], num_C);

num_C = num_A - num_B;
//imprimirResultado(num_A, num_B, operacoes[1], num_C);

num_C = num_A * num_B;
//imprimirResultado(num_A, num_B, operacoes[2], num_C);

num_C = num_A / num_B;
//imprimirResultado(num_A, num_B, operacoes[3], num_C);

let matriz = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linha ="";
        for(let j = 0; j < A[i].length; j++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }
}

//imprimirMatriz(matriz);

let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

//console.log(capitais.RJ + " - " + capitais.DDD_RJ);

for(chave in capitais){
    //console.log(chave + " - " + capitais[chave]);
}

function verificarParidade(n){
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}

let n = 2;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`);

 n = 3;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`);

 n = 7;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`);

 n = 10;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`);