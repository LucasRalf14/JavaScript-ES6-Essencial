//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`); 
//Resultado: 5

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);
//Resultado: [ 'Te', 'to' ]

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replacedText);
//Resultado: txeTo

//Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);
//Resultado: o

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última: ', allWithoutLastChar);
//Resultado: Text

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondToEnd);
//Resultado: exto

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos);
//Resultado: Te