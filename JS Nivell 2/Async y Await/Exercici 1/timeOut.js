// Creu una funció asíncrona que anomeni a una altra que retorni
// una Promise que efectuï la seva resolve amb una demora de 2 segons.



function loginUser(email, password){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Got the user!');
            resolve({email, password});
        }, 2000);
    });
}

loginUser('bumba@gomail.com', 1234)
    .then(user => console.log(user))




