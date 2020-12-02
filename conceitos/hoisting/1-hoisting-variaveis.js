//suspender algo
//as declarações de variaveis ou funções são elevadas de escopo
//obs: hoisting de variavel só eleva a criaçã da variavel e não a variação

// é retornado como 'undefined'

function fn(){
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

//é o mesmo que esta acontecendo isso:
/*
funcion fn(){
    var text;
    console.log(text);

    text = 'Exemplo";

    console.log(text);
}*/
