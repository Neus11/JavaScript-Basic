// Creu una altra arrow function getSalario que rebi com a paràmetre
// un objecte employee i retorni el seu salari.

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

getEmpleado = (findId) =>{
    return new Promise((resolve, reject)=>{
        if(employees.find(getFind => getFind.id === findId)){
            resolve(`The id required is ${employees[findId -1].id}`);
        } else {
            reject(`There is not such iD`);
        }
        
    });

};

getSalario = (employee) => {
    return new Promise((resolve, reject) => {
        if (employees.find(salFind => salFind.id === employee)) {
            resolve(`Ok! The ID:  ${employees[employee -1].id}  requested has this salary: ${salaries[employee - 1].salary}`);
        } else {
            reject(`Id not found!`);
        }
    });
};


getEmpleado(2)
.then(employee=>{
    console.log('Hey!! ' + employee);
})
.then(salary=> getEmpleado)
.catch(err=> console.log(err));

//getSalario()
  //  .then((salary) => console.log(salary))
  //.catch((err) => console.log(err));
