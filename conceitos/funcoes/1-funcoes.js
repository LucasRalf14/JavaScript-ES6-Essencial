/*função de primeira classe:    -função pode ser atribuida a uma variavel 
                                -atribuida a uma estrutura de dados (object, array...)
                                -pode ser passada por argumentos e até retornar para outras funçoes
*/

function getName(){
    return 'José Lucas W. O. Ralf';
}

function logFn(fn){ //re
    console.log(fn()); //console.log no que a função retornar
}

const logFnResult = lofFn;


logFnResult(getName); //sendo passada por argumentos