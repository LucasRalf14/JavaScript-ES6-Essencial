(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);
//respeita o escopo de bloco
    if(true){//esse let que vale
        let test = 'example'; // var não aceita escopo de bloco
        console.log(`Valor dentro do if "${test}"`);
    }
    if(true){//esse let que vale
        let test = 'valor de outro if';
        console.log(`Valor de outro "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();