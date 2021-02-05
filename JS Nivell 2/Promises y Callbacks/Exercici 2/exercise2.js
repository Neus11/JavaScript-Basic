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

function getEmpleado (inId) {
    return new Promise((resolve, reject)=>{
        if(employees.find(findId => findId.id === inId)){
            resolve(`The id required is ${employees[inId -1].id}`);
        } else {
            reject(`There is not such iD`);
        }
        
    });

};

function getSalario(ObjEmployee) {
    return new Promise((resolve, reject) => {
        if (employees.find(salFind => salFind.id === ObjEmployee)) {
            resolve(`Ok! The ID: ${employees[ObjEmployee -1].id}  requested has this salary: ${salaries[ObjEmployee - 1].salary}`);
        } else {
            reject(`Id not found!`);
        }
    });
};


getEmpleado(2)
    .then(getEmployee=> {
        console.log(getEmployee)
        return getSalario(getEmployeeS)
    })
     .then((salary) => console.log(salary))
     .catch((err) => console.log(err));
