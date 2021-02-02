const isName = false;

const names = new Promise ((resolve, reject) => {
    if(!isName){
        const name1 = 'Lexa';
        resolve(name1);
    } else {
        reject(new  Error('No name found'))
    }
});

names
    .then( res => {
        console.log('Name passed: ');
        console.log(res);
    })
    .catch( err => {
        console.log(err.message);
        console.log('Try again!')
    });