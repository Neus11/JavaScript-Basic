// Donats els objectes employees i salaries, creu una arrow function 
// getEmpleado que retorni una Promise efectuant la cerca en l'objecte 
// pel seu id.

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

getEmpleado(1)
    .then(res=>{
        console.log(`Found! ${res}`);
    })
    .catch(err=>{
        console.error(`Ops! ${err}`);
    });