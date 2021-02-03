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

getSalario = (ids) => {
    return new Promise((resolve, reject)=>{
        if(employees.find(salFind => salFind.id === ids)){
            resolve(`Ok! The ID:  ${salaries[ids -1].id}  requested has this salary: ${salaries[ids -1].salary}`);
        } else {
            reject(`Id not found!`);
        }
    });
};




getSalario(3)
    .then(res=>{
        console.log(`${res}`);
    })
    .catch(err=>{
        console.log(`${err}`);
    });