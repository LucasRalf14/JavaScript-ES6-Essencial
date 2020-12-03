const user = {
    name: 'José Lucas',
    lastName: 'W. Oliveira Ralf'
}

//recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//recupera os valores as chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

//mergear propriedades de objetos
Object.assign(user, {fullName: 'José Lucas Wesllen Oliveira Ralf'});

console.log('\nAdiciona a propriedade fullname no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 23}));

//previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj); //faz com que o objeto não seja alterado de jeito algum

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

//permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Lucas' };
Object.seal(person); //não permite que crie e nem delete. mas, pode alterar o que ja existe

person.name = 'Lucas Ralf';
delete person.name;
person.age = 23;

console.log('\nVariável person após as alteraçoes: ', person);