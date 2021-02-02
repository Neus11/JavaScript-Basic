var array = ['N', 3, 'U', 'S', 'C', 'A', 'L', 'V', 0]

console.log("Partim del nom " + array.join(''));

for (i = 0 ; i < array.length; i++)
{
    

    if(array[i] == 'N')
    {
        console.log("He trobar la CONSONANT: " + array[i]);
    }
    else if(array[i] == 3)
    {
        console.log("Els noms de persones no contenen el número: " + array[i]);
    }
    else if(array[i] == 'U')
    {
        console.log("He trobar la VOCAL: " + array[i]);
    }
    else if(array[i] == 'S')
    {
        console.log("He trobar la CONSONANT: " + array[i]);
    }
    else if(array[i] == 'C')
    {
        console.log("He trobar la CONSONANT: " + array[i]);
    }
    else if(array[i] == 'A')
    {
        console.log("He trobar la VOCAL: " + array[i]);
    }
    else if(array[i] == 'L')
    {
        console.log("He trobar la CONSONANT: " + array[i]);
    }
    else if(array[i] == 'V')
    {
        console.log("He trobar la CONSONANT: " + array[i]);
    }
    else
    {
        console.log("Els noms de persones no contenen el número: " + array[i]);   
    }

}

//Entenc que tambés és podria fer amb un switch, no? No se escollir-ho encara.