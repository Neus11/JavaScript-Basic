let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

// Creu una funció asíncrona que, rebent un id d'empleat, 
// imprimeixi per pantalla el nom de l'empleat i el seu salari

const getEmpleados = getEmployee => {
    return new Promise((resolve, reject) => {
        if(employees.find(givenId => givenId.id === getEmployee)){
            resolve(`The name of the employee is: ${employees[getEmployee-1].name} and the salary: ${salaries[getEmployee-1].salary}`);
        } else {
            reject(`Not found!`)
        }
    });
};

getEmpleados(1)
    .then(res =>{
        console.log(`Found! ${res}`);
    })
    .catch(err =>{
        console.error(err);   
    });

