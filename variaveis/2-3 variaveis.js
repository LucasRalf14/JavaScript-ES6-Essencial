(() => {
    const test = 'example';
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        const test = 'example'; // var não aceita escopo de bloco
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();