function transporEImprimirMatrizes(matriz) {
  
  console.log("Matriz Original:");
  imprimirMatriz(matriz);
  
  const matrizTransposta = transporMatriz(matriz);

  console.log("Matriz Transposta:");
  imprimirMatriz(matrizTransposta);
}

function transporMatriz(matriz) {
  const linhas = matriz.length;
  const colunas = matriz[0].length;

  const matrizTransposta = [];
  for (let j = 0; j < colunas; j++) {
    matrizTransposta[j] = [];
  }

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      matrizTransposta[j][i] = matriz[i][j];
    }
  }

  return matrizTransposta;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
  }
}

const matrizExemplo = [
  [1, 2, 3],
  [4, 5, 6]
];

transporEImprimirMatrizes(matrizExemplo);
