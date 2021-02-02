
let ageControl = age => console.log(`Your age is ${age}, so welcome!`);
    

const showAge = (age2, name, callback) => {
    const nameAge = `${age2} ${name}`
    callback(nameAge);
}

showAge(20, 'Nunu', ageControl);

setTimeout(() => {
    showAge(25, 'Sofi', ageControl);
},  3000);

