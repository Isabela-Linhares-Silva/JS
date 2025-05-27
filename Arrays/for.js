let numeros=[1,2,3,4,5];

for (let i = 0; i < numeros.length; i++) {
    console.log("volta",i);
    
}

for (let i = 0; i < numeros.length; i++) {
    numeros[i]+= 1;
    console.log("Volta: ",numeros[i]);
    
}