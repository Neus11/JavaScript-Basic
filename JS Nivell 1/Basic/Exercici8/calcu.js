
function calculadora(operador, valor1, valor2) {

    var sum = valor1 + valor2;
    var resta = valor1 - valor2;
    var multi = valor1 * valor2;

    if(operador == 'suma')
    {
        return sum;
    }
    else if(operador == 'resta')
    {
        return resta;
    }
    else
        return multi;
    

}

var resultat = calculadora('muti', 15, 5);

console.log(resultat);