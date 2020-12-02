// Também chamada de escopo léxico, é capacidade de uma função lembrar do ambiente em que ela foi criada

function init(){ // retorna outra função
    const exemplo = 'Essa variável';

    return function(){
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);  // vê o que seria esse "dólar"
        
        return function(){
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

            return function(){
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}

init()()()(); 

/*
//faz cadeia de execução
const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();
*/