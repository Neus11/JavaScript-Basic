// Crear una arrow function que, rebent un paràmetre, 
// retorni un objecte amb un atribut que tingui com a
// valor el paràmetre rebut.

let values = {
    name1:'John',
    age: 26,
    weight: 70
}

const oneObject = newAge => {
    return values.age = newAge
}    

// In here I tried to remove return coz I thought it was implied in the =>
// but it gave me undefined result... 

oneObject(30);
console.log(values);
