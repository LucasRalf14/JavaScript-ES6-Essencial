//um objeto não é atualizado, ele é copiado e alterado o qu quer
//

const user = {
    name: 'José Lucas',
    lastName: 'Wesllen oliveira Ralf'
};

function getUserWithFullName(user){
    return{
        ...user, //spread operator - pra cada propriedade que receber do user ele vai colocar dentro desse objeto
        fullName: `${user.name} ${user.lastName}` //string literal. o mesmo que usar: user.name + " " + user.lastName
    }
}

const getUserWithFullName = getUserWithFullName(user);

console.log(getUserWithFullName);