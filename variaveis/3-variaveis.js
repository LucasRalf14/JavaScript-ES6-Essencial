const name = 'Lucas';

//não podemos alterar o valor
//name = 'Lucas';

const user = {
    name: 'Lucas'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//    name: 'Lucas'
//};

const persons = ['Lucas', 'Pedro', 'Jennifer'];

//podemos adicionar novos itens
persons.push('João');

//podemos remover algum item
persons.shift();

//podemos alterar diretamente
persons[1] = 'James';

console.log('\Array após as alterações: ', persons);