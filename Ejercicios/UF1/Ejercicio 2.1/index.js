const numeroAdivinar =  10
let numeroIntroducido = -1

while ( numeroAdivinar != numeroIntroducido  )
    {
    let numeroIntroducido =  pront ('Introduce un numero: ')
    console.log('numeroIntroducido:',numeroIntroducido)

    if (numeroIntroducido < numeroAdivinar) {
        console.log('El numero es mayor')
    }   
   
    else if (numeroIntroducido > numeroAdivinar){
        console.log('El numero es menor')
        
    } 
    else {
        console.log('lo has acertado!!!')
    } 

} 

//Convertir el promt en imput