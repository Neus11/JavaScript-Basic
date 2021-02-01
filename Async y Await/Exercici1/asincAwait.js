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

const checking = false; 

const getEmpleados = getEmployee => {
    return new Promise((resolve, reject) => {
        if(employees.find(getFind => getFind.id === getEmployee)){
            resolve(`Found! ${employees[getEmployee -1].id}`);
        } else {
            reject(`Not found`);
        }
    });  
};

const getSalario = getEmployee => {
    return new Promise((resolve, reject) =>{
        if(employees.find(getFind => getFind.id === getEmployee)){
            resolve(`The salary of employee ${getEmployee} is ${(salaries[getEmployee -1].salary)}`);
        } else {
            reject(`Not Found! Sorry!!`);
        }
    });
};

getEmpleados(3)

    .then(res =>{
        console.log(`Awesome! ${res}`);
    })

    .catch(err =>{
        console.error(err);
    });

// Los compañeros me comentaron que seria mejor concatenarlo y lo he intentado pero no lo he sacado.
    
getSalario(3)
    .then(res =>{
        console.log(`Awesome! ${res}`);
    })
    .catch(err =>{
        console.log(err);
    });
        
    
