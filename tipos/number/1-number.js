const myNumber = 12.4032;

//Trasformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', numberAsString, typeof numberAsString);
//Resultado: 12.4032 string

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);
//Resultado: 12.40

//transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));
//Resultado: 13.22

//transforma uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'));
//Resultado: 13