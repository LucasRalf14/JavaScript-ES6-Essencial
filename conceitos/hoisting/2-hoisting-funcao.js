//suspender algo
//as declarações de variaveis ou funções são elevadas de escopo
//obs: hoisting de função eleva tanto a criação quanto a assinatura
//pesquisar q poha é: linter
function fn(){
    log('Hoisting de função');

    function log(value){
        console.log(value);
    }
}

fn();

//é como se:
/*
function fn(){
    function log(value){
        console.log(value);
    }
    log('Hoisting de função');
}
*/
