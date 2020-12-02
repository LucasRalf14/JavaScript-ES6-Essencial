// É a técnica para transformar uma função com n parâmetros em apenas uma função que recebe um parametro, para cada parâmetro retornando uma função

//para cada parametro vai criar uma nova função
function soma(a){
    return function(b){
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma(2));
console.log(soma(3));
console.log(soma(4));
console.log(soma(5));