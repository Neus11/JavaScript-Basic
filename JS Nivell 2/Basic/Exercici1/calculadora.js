// Aprofita la funció "calculadora" de l'exercici anterior
// per crear una calculadora completa amb opcions per sumar, 
// restar, multiplicar i dividir. Hauràs de controlar el Zero 
// com a denominador d'una divisió.


const calculadora = (operador, valor1, valor2) => {

    if(operador === '*'){
        let result = valor1 * valor2;
        console.log(`The result of ${valor1} * ${valor2} equals ${result}`);
    } else if (operador === '-'){
        if(valor1 >= valor2){
            let result = valor1 - valor2;
            console.log(`The result of ${valor1} - ${valor2} equals ${result}`);
        } else {
            console.log(`Input invalid! Try again!`)
        }
    } else if (operador === '+'){
        let result = valor1 + valor2;
        console.log(`The result of ${valor1} + ${valor2} equals ${result}`);
    } else {
        if(valor1 === 0 || valor2 === 0)
        {
            console.log(`What, zero?? Nop! Try again!!`);         
        } else {
            let result = valor1 / valor2;
            console.log(`The result of ${valor1} / ${valor2} equals ${result}`);   
        }
    }
}

calculadora('/', 2, 10);